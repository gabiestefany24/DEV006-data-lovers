// estas funciones son de ejemplo

export const filterObj = (categories,house) => {
  const newArray = categories.filter((key) => key.house === house);
  return newArray;
};

export const sortObj = (categories) => {
  categories.sort((a,b) => a.name < b.name? 1:-1);
  return categories;
};

export const sortObjaz = (categories) => {
  categories.sort((a,b) => a.name > b.name? -1:1);
  return categories;
};

