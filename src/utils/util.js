export const formatLabelText = (type) => type.charAt(0).toUpperCase() + type.slice(1);

export const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

export const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomBoolean = () => Math.random() > 0.5;

export const getRandomDate = (start, end) => {
  const startDate = new Date(start).getTime();
  const endDate = new Date(end).getTime();
  const randomTime = Math.random() * (endDate - startDate) + startDate;
  return new Date(randomTime);
};
