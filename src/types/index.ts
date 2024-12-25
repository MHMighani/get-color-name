export type Color = {
  name: string;
  hex: string;
};

export type ColorByLang = {
  [key: string]: Color[];
};
