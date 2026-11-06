import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, test } from "node:test";

import { contactCta, primaryNavigation } from "../src/config/site.ts";

const repositoryRoot = process.cwd();
const sourceRoot = join(repositoryRoot, "src");

function collectSourceFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? collectSourceFiles(path) : [path];
  });
}

const sourceText = collectSourceFiles(sourceRoot)
  .filter((file) => file.endsWith(".ts") || file.endsWith(".tsx"))
  .map((file) => readFileSync(file, "utf8"))
  .join("\n");

function routeFileFor(pathname: string): string {
  if (pathname === "/") return join(sourceRoot, "app", "page.tsx");
  return join(sourceRoot, "app", pathname.replace(/^\//, ""), "page.tsx");
}

describe("Internal routes and anchors", () => {
  const internalLinks = [...primaryNavigation.map((item) => item.href), contactCta.href];

  test("every configured route has an App Router page", () => {
    for (const href of internalLinks) {
      const [pathname] = href.split("#");
      assert.ok(existsSync(routeFileFor(pathname)), `Missing route for ${href}`);
    }
  });

  test("every configured hash points to an existing id", () => {
    for (const href of internalLinks) {
      const [, hash] = href.split("#");
      if (!hash) continue;
      assert.match(sourceText, new RegExp(`id=["']${hash}["']`), `Missing #${hash}`);
    }
  });

  test("active source contains no placeholder href", () => {
    assert.doesNotMatch(sourceText, /href=["']#["']/);
  });

  test("all referenced static public assets exist in the public directory", () => {
    const assetRegex = /["'](\/(?:images\/|logo|bg|favicon|apple)[^"']+)["']/g;
    const matches = Array.from(sourceText.matchAll(assetRegex));
    assert.ok(matches.length > 0, "Expected at least one static asset reference");

    for (const match of matches) {
      const assetPath = match[1].split("?")[0].split("#")[0];
      const filePath = join(repositoryRoot, "public", assetPath.replace(/^\//, ""));
      assert.ok(
        existsSync(filePath),
        `Referenced asset not found in public/: ${assetPath} (source: ${match[0]})`
      );
    }
  });
});
