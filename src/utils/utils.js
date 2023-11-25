export const utils = () => {
  let data = localStorage.getItem("books");
  if (data) {
    return JSON.parse(data);
  }
  return [];
};
