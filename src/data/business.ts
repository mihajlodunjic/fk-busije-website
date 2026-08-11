export const business = {
  fullName: "Фудбалски клуб Бусије",
  shortName: "ФК Бусије",
  foundingDate: "2003-11-29",
  foundingDateLabel: "29. новембра 2003.",
  foundingYear: 2003,
  address: {
    street: "Обедска 27",
    postalCode: "11284",
    locality: "Бусије",
    region: "Београд",
    country: "RS",
    label: "Обедска 27, 11284 Бусије"
  },
  contact: {
    phoneDisplay: "+381 63 843 4874",
    phoneHref: "tel:+381638434874",
    email: "fkbusije@gmail.com",
    emailHref: "mailto:fkbusije@gmail.com"
  },
  colors: ["Црвена", "плава", "бела"],
  crest: {
    src: "/logo.png",
    alt: "Грб Фудбалског клуба Бусије",
    width: 640,
    height: 640,
    contentBounds: {
      left: 124,
      top: 57,
      right: 517,
      bottom: 591,
      contentWidth: 394,
      contentHeight: 535
    }
  },
  hasHomeGround: false,
  site: {
    defaultUrl: "https://example.com"
  },
  localMarker: "БУСИЈЕ / ЗЕМУН / БЕОГРАД"
} as const;

export const currentYear = new Date().getFullYear();
