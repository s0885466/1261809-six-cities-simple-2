export const getRandomInteger = (from: number, to: number) =>
  from + Math.floor(Math.random() * (to - from + 1));

export const getRandomList = (number: number, list: string[]): string[] => {
  if (number > list.length) {
    throw new Error('length array is shorter than number');
  }

  const resultList = new Set<string>();
  const length = list.length;

  while (resultList.size < number) {
    const randomIndex = getRandomInteger(0, length - 1);
    resultList.add(list[randomIndex]);
  }

  return [...resultList];
};
