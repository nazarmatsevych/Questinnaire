const startYear = 1940;
const endYear = 2005;

export const years = Array.from(
  { length: endYear - startYear + 1 },
  (_, i) => endYear - i,
);
