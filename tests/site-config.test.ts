import { test, describe } from "node:test";
import assert from "node:assert/strict";

import { primaryNavigation, siteConfig, contactCta } from "../src/config/site.ts";

describe("Site Configuration & Navigation Integrity", () => {
  test("primary navigation items have non-empty labels and valid paths", () => {
    assert.ok(primaryNavigation.length >= 4);

    for (const item of primaryNavigation) {
      assert.ok(item.label.trim().length > 0, `Item ${item.href} has empty label`);
      assert.ok(
        item.href.startsWith("/") || item.href.startsWith("http"),
        `Item ${item.label} has invalid href: ${item.href}`
      );

      if (item.children) {
        for (const child of item.children) {
          assert.ok(child.label.trim().length > 0);
          assert.ok(child.href.startsWith("/"));
        }
      }
    }
  });

  test("siteConfig provides essential contact channels", () => {
    assert.ok(siteConfig.phone.number || siteConfig.phone.href.startsWith("tel:"));
    assert.ok(siteConfig.whatsapp.href.startsWith("https://wa.me/"));
    assert.ok(siteConfig.addresses.length >= 1);
  });

  test("contact CTA points to valid contact route", () => {
    assert.ok(contactCta.href.startsWith("/contato"));
  });
});
