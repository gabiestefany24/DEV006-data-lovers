/* Definición de las funciones principales de nuestra página*/

/* definimos función filtrar en la categoria personajes con el keyoption: home y gender y el valor establecido en la data */ 
export const filterObj = (categories,keyoptions, value) => {
  const newArray = categories.filter((key) => key[keyoptions] === value);
  return newArray;
};

/* definimos función ordenar, la usaremos en la categoria pociones*/ 

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

/* definimos funcion porcentajes que en conjunto con la función filtrar nos dara el porcentaje de genero femenino y masculino*/ 

export const porcentageObj = (objectfiltrated,objectfilterfemale ) => {
  const porcentagefemale =(objectfilterfemale*100)/objectfiltrated
  return porcentagefemale;

};
