export const shortLabel = (label: string) => {
  if (label.includes("(") === false) return label;
  const firstParen = label.indexOf("(");
  const lastParen = label.lastIndexOf(" ");
  const shortenedLabel = label.slice(firstParen + 1, lastParen);
  return shortenedLabel;
};
