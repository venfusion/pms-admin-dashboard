export const getRandomEnumValue = <T extends Record<string, unknown>>(
  enumObject: T,
): T[keyof T] => {
  const values = Object.values(enumObject) as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
};
