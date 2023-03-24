
export const filterObj = (categories,keyoptions, value) => {
  const newArray = categories.filter((key) => key[keyoptions] === value);
  return newArray;
};

export const sortObj = (categories) => {
  categories.sort((a,b) => a.name < b.name? 1:-1);
  return categories;
};

export const sortObjaz = (categories) => {
  categories.sort((a,b) => a.name > b.name? 1:-1);
  return categories;
};

export const porcentageObj = (objectfiltrated,objectfilterfemale ) => {
  const porcentagefemale =(objectfilterfemale*100)/objectfiltrated
  
  return porcentagefemale;
  

};
