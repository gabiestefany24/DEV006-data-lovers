
export const filterObj = (categories,keyoptions, value) => {
  const newArray = categories.filter((key) => key[keyoptions] === value);
  return newArray;
};

export const sortObj = (categories) => {
  const copy= [...categories]
  copy.sort((a,b) => a.name < b.name? 1:-1);
  return copy;
};

export const sortObjaz = (categories) => {
  const copy= [...categories]
  copy.sort((a,b) => a.name > b.name ? 1:-1);
  return copy;
};

export const porcentageObj = (objectfiltrated,objectfilterfemale ) => {
  const porcentagefemale =(objectfilterfemale*100)/objectfiltrated
  return porcentagefemale;

};
