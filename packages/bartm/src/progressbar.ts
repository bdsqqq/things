export function progressBar(
  percent: number,
  width: number,
  charPalette: string[] = ["░", "▓", "█"]
) {
  // figure out how much % each character will represent considering 100% = width
  const charPercentValue = 100 / width;

  // figure out how much of a % each character in the palette represents
  // palette[0] will always mean 0% of the charPercentValue,
  // palette[palette.length - 1] will always mean 100% of the charPercentValue,
  // and the rest will be distributed evenly in between
  const charPalettePercentValues = charPalette.map(
    (_, i) => (i * charPercentValue) / (charPalette.length - 1)
  );

  const progress = Array(width)
    .fill(charPalette[0])
    .reduce((acc, _, i) => {
      const valueLeft = percent - i * charPercentValue;

      // could get extract this to a function but I'm lazy
      const closestValue = charPalettePercentValues.reduce(
        (acc, value) =>
          Math.abs(value - valueLeft) < Math.abs(acc - valueLeft) ? value : acc,
        charPalettePercentValues[0]
      );

      return [
        ...acc,
        charPalette[charPalettePercentValues.indexOf(closestValue)],
      ];
    }, [] as string[])
    .join("");

  return progress;
}
