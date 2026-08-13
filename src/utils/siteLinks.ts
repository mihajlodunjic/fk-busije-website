export type SiteLinkAttrs = {
  href?: string;
  "aria-disabled"?: "true";
  "data-disabled-site-link"?: "true";
  tabindex?: "0";
};

const normalizeHref = (href: string) => href.split("#")[0]?.split("?")[0] ?? href;

const isInternalHref = (href: string) => href.startsWith("/") && !href.startsWith("//");

const isHomepageHref = (href: string) => {
  const normalizedHref = normalizeHref(href);
  return normalizedHref === "/" || normalizedHref === "";
};

export const getSiteLinkAttrs = (href: string): SiteLinkAttrs => {
  if (isInternalHref(href) && !isHomepageHref(href)) {
    return {
      "aria-disabled": "true",
      "data-disabled-site-link": "true",
      tabindex: "0"
    };
  }

  return { href };
};
