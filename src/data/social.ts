export type SocialLink = {
  id: "instagram" | "facebook" | "youtube";
  label: string;
  handle?: string;
  url: string;
  verified: boolean;
  primary?: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    label: "Инстаграм",
    handle: "@fkbusije",
    url: "https://www.instagram.com/fkbusije/",
    verified: true,
    primary: true
  },
  {
    id: "facebook",
    label: "Фејсбук",
    url: "https://www.facebook.com/fkbusije",
    verified: true
  },
  {
    id: "youtube",
    label: "Јутјуб",
    url: "",
    verified: false
  }
] as const;

export const publicSocialLinks = socialLinks.filter((link) => link.verified && link.url);
