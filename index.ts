import { persianColors } from './data';
import chroma from 'chroma-js';
import { ColorByLang } from './types';

const colorsByLang: ColorByLang = {
  fa: persianColors,
};

export const getColorName = (color: string, lang = 'fa') => {
  const colors = colorsByLang[lang] || [];

  const deltas = colors.map((c) => chroma.deltaE(color, c.hex));
  const min = Math.min(...deltas);

  const index = deltas.indexOf(min);

  return colors[index]?.name;
};
