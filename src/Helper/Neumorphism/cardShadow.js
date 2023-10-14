import tinycolor from "tinycolor2";

export const cardShadow = (color) => {
  let lightenedColor = lightenColor(color, 15);
  let darkenedColor = darkenColor(color, 15);
  return {
    background: `linear-gradient(145deg, ${lightenedColor}, ${darkenedColor})`,
  };
}

const lightenColor = (color, percent) => {
  let result = tinycolor(color).lighten(percent).toString();
  return result;
}

const darkenColor = (color, percent) => {
  let result = tinycolor(color).darken(percent).toString();
  return result;
}
