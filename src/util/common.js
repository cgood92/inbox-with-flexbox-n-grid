import lorem from "lorem-ipsum";

export const removePeriod = str => str.slice(0, -1);

export const getLorem = (min, max) =>
  removePeriod(
    lorem({
      count: 1,
      units: "sentences",
      sentenceLowerBound: min,
      sentenceUpperBound: max,
    }),
  );
