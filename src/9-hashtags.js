export const hashtags = (text) =>
  text.split(' ').filter((word) => word[0] === '#');
