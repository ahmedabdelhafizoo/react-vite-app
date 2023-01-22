export const getImageUrl = (path) =>
  new URL(`../assets/images/${path}`, import.meta.url).href;
