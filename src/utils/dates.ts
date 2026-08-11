const dateFormatter = new Intl.DateTimeFormat("sr-Cyrl-RS", {
  day: "numeric",
  month: "long",
  year: "numeric"
});

export function formatMatchDate(value: string) {
  return dateFormatter.format(new Date(value));
}
