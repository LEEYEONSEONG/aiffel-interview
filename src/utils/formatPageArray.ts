export const formatPageArray = (count: number, limit: number = 5) => {
  const pages = [];
  const math = Math.ceil(count / limit);
  for (let i = 1; i <= math; i++) {
    pages.push(i);
  }
  return pages;
};
