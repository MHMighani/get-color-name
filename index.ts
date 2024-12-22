import { colors } from './data';
import chroma from 'chroma-js';

export const getColorName = (color: string) => {
  const deltas = colors.map((c) => chroma.deltaE(color, c.hex));
  const min = Math.min(...deltas);

  const index = deltas.indexOf(min);

  return colors[index];
};
