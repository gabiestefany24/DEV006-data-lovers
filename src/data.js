// estas funciones son de ejemplo

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

<<<<<<< HEAD

=======
export const porcentageObj = (objectfiltrated,objectfilterfemale ) => {
  const porcentagefemale =(objectfilterfemale*100)/objectfiltrated
  
  return porcentagefemale;
  

};
>>>>>>> 1e79b5b172857b86591402f719f1347fd43926de
