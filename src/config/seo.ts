const localSiteUrl = "http://localhost:3000";

function resolveSiteUrl(): URL {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    return new URL(localSiteUrl);
  }

  try {
    return new URL(configuredUrl);
  } catch {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL deve ser uma URL absoluta válida, por exemplo https://www.exemplo.com.br."
    );
  }
}

export const siteUrl = resolveSiteUrl();
export const isIndexableEnvironment =
  siteUrl.protocol === "https:" && !["localhost", "127.0.0.1"].includes(siteUrl.hostname);

export function absoluteUrl(pathname = "/"): string {
  return new URL(pathname, siteUrl).toString();
}
