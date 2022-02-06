export const getItem = () => {
  try {
    const item = JSON.parse(localStorage.getItem("cart"));
    return item || [];
  } catch (error) {
    return [];
  }
};

export const setItem = (fruitList) => {
  const item = localStorage.setItem("cart", JSON.stringify(fruitList));
  return item;
};

export const sortByID = (fruitList) => {
  const sortedList = fruitList.sort((a, b) => a.id - b.id);
  return sortedList;
};
