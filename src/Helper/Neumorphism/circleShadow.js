import tinycolor from "tinycolor2";

export const circleShadow = (color) => {
  let lightenedColor = lightenColor(color, 20);
  let darkenedColor = darkenColor(color, 45);
  let lightShadow = lightenColor(color, 10);
  let darkShadow = darkenColor(color, 40);
  return {
    background: `linear-gradient(145deg, ${lightenedColor},${darkenedColor} )`,
    boxShadow: `  10px 10px 20px ${darkShadow}, -5px -5px 20px ${lightShadow}`,
  };
};

const lightenColor = (color, percent) => {
  let result = tinycolor(color).lighten(percent).toString();
  return result;
};

const darkenColor = (color, percent) => {
  let result = tinycolor(color).darken(percent).toString();
  return result;
};
