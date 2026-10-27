export const homeSections: [string, string, number][] = [
  ["KSIĄŻKA", "#wierszoterapie", 0],
  ["O MNIE", "#about-me", 1],
  ["KSIĄŻKI", "#books", 2],
  ["WIERSZE", "#poems", 3],
  ["KONTAKT", "#contact", 4],
];

export const homeLinks: [string, string, number][] = homeSections.map(
  ([label, hash, index]) => [label, `/${hash}`, index],
);
