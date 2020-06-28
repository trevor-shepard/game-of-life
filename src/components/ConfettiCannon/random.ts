export const randomInRange = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const randomIntInRange = (min: number, max: number): number =>
  Math.floor(randomInRange(min, max));

export const randomFromArray = (array: any[]) =>
  array[randomIntInRange(0, array.length)];

export const flipCoin = (): boolean => Math.round(Math.random()) === 1;
