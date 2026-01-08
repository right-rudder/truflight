export const randomImages = (
  arrayOfObjects: Array<{ src: string; alt: string }>,
) => arrayOfObjects[Math.floor(Math.random() * arrayOfObjects.length)];
