export function capitalize(word: string): string {
  return `${word.charAt(0).toUpperCase()}${word.toLowerCase().slice(1)}`;
}
