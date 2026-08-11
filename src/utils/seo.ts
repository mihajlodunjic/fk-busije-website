import { business } from "@/data/business";
import { publicSocialLinks } from "@/data/social";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export function getSiteUrl() {
  return import.meta.env.PUBLIC_SITE_URL || business.site.defaultUrl;
}

export function buildUrl(pathname: string) {
  return new URL(pathname, getSiteUrl()).toString();
}

export function getSportsTeamSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsTeam",
    name: business.fullName,
    alternateName: business.shortName,
    sport: "Фудбал",
    foundingDate: business.foundingDate,
    logo: buildUrl(business.crest.src),
    url: getSiteUrl(),
    email: business.contact.email,
    telephone: business.contact.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      addressCountry: business.address.country
    },
    sameAs: publicSocialLinks.map((link) => link.url)
  };
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildUrl(item.href)
    }))
  };
}
