export const formatLabelText = (type) => type.charAt(0).toUpperCase() + type.slice(1);

export function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}
