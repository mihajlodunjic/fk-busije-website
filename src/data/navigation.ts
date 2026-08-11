export type NavigationItem = {
  href: string;
  label: string;
};

export const navigationItems: NavigationItem[] = [
  { href: "/", label: "Почетна" },
  { href: "/klub/", label: "Клуб" },
  { href: "/utakmice/", label: "Утакмице" },
  { href: "/kontakt/", label: "Контакт" }
];
