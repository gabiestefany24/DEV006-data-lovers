import { filterObj, sortObj, sortObjaz,porcentageObj} from '../src/data.js';


const charactersTest = [
  {
    "id": 3,
    "name": "African prince",
    "birth": null,
    "death": null,
    "species": "Human",
    "ancestry": "Muggle-born or half-blood (possibly)",
    "gender": "Male",
    "hair_color": null,
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": null,
    "associated_groups": ["Africa"],
    "books_featured_in": [1]
  },
  {
    "id": 7,
    "name": "Arkie Alderton",
    "birth": null,
    "death": null,
    "species": "Human",
    "ancestry": "Pure-blood or Half-blood",
    "gender": "Male",
    "hair_color": null,
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": null,
    "associated_groups": ["Arkie Alderton's Kwik-Repair Shop"],
    "books_featured_in": [7]
  },
  
  {
    "id": 587,
    "name": "Hermione Granger",
    "birth": "19 September, 1979",
    "death": null,
    "species": "Human",
    "ancestry": "Muggle-born",
    "gender": "Female",
    "hair_color": "Brown",
    "eye_color": "Brown",
    "wand": "10¾\", vine wood, dragon heartstring",
    "patronus": "Otter",
    "house": "Gryffindor",
    "associated_groups": [
      "Granger family",
      "Weasley family",
      "Potter family",
      "Hogwarts School of Witchcraft and Wizardry",
      "Gryffindor",
      "Slug Club",
      "S.P.E.W.",
      "Dumbledore's Army",
      "Order of the Phoenix",
      "British Ministry of Magic",
      "Department for the Regulation and Control of Magical Creatures",
      "Department of Magical Law Enforcement"
    ],
    "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
  },
  {
    "id": 589,
    "name": "Daphne Greengrass",
    "birth": "Between 1 September 1979 and 31 August 1980",
    "death": null,
    "species": "Human",
    "ancestry": "Pure-blood",
    "gender": "Female",
    "hair_color": null,
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": "Slytherin",
    "associated_groups": ["Hogwarts School of Witchcraft and Wizardry", "Slytherin", "Greengrass family"],
    "books_featured_in": [5]
  },
  {
    "id": 730,
    "name": "Romilda Vane",
    "birth": "between 1 September 1981 and 31 August 1982",
    "death": null,
    "species": "Human",
    "ancestry": "Pure-blood or half-blood (possibly)",
    "gender": "Female",
    "hair_color": "Black",
    "eye_color": "Dark",
    "wand": null,
    "patronus": null,
    "house": "Gryffindor",
    "associated_groups": ["Vane family", "Hogwarts School of Witchcraft and Wizardry", "Gryffindor", "Dumbledore's Army"],
    "books_featured_in": [4, 6]
  },
  {
    "id": 740,
    "name": "Myrtle Warren",
    "birth": "Between 14 June, 1928 and 13 June, 1929",
    "death": "13 June, 1943 (aged 14)",
    "species": "Human (formerly)",
    "ancestry": "Muggle-born",
    "gender": "Female",
    "hair_color": null,
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": "Ravenclaw",
    "associated_groups": [
      "Warren family",
      "Hogwarts School of Witchcraft and Wizardry",
      "Ravenclaw",
      "Harry Potter",
      "Draco Malfoy",
      "Albus Potter",
      "Scorpius Malfoy"
    ],
    "books_featured_in": [2, 4, 6]
  }
]

const charactersTestGryffindor = [
  {
    "id": 587,
    "name": "Hermione Granger",
    "birth": "19 September, 1979",
    "death": null,
    "species": "Human",
    "ancestry": "Muggle-born",
    "gender": "Female",
    "hair_color": "Brown",
    "eye_color": "Brown",
    "wand": "10¾\", vine wood, dragon heartstring",
    "patronus": "Otter",
    "house": "Gryffindor",
    "associated_groups": [
      "Granger family",
      "Weasley family",
      "Potter family",
      "Hogwarts School of Witchcraft and Wizardry",
      "Gryffindor",
      "Slug Club",
      "S.P.E.W.",
      "Dumbledore's Army",
      "Order of the Phoenix",
      "British Ministry of Magic",
      "Department for the Regulation and Control of Magical Creatures",
      "Department of Magical Law Enforcement"
    ],
    "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
  },
  {
    "id": 730,
    "name": "Romilda Vane",
    "birth": "between 1 September 1981 and 31 August 1982",
    "death": null,
    "species": "Human",
    "ancestry": "Pure-blood or half-blood (possibly)",
    "gender": "Female",
    "hair_color": "Black",
    "eye_color": "Dark",
    "wand": null,
    "patronus": null,
    "house": "Gryffindor",
    "associated_groups": ["Vane family", "Hogwarts School of Witchcraft and Wizardry", "Gryffindor", "Dumbledore's Army"],
    "books_featured_in": [4, 6]
  }
]


describe('filterObj', () => {
  it('is a function', () => {
    expect(typeof filterObj).toBe('function');
  });

  it('filtrar los personajes por casa Gryffindor', () => {
    expect(filterObj(charactersTest,"house", "Gryffindor")).toEqual(charactersTestGryffindor);
  });
});

const pocionsTest = [
  {
    "id": 138,
    "name": "Thick golden potion",
    "description": "Healing, curse quarantining. Was used by Professor Severus Snape in the summer of 1996 to treat the effects that the curse on the Ring Horcrux had on Albus Dumbledore."
  },
  {
    "id": 44,
    "name": "Dragon Poison",
    "description": "A poisonous potion most likely taken from dragons."
  },
  {
    "id": 18,
    "name": "Blood-Replenishing Potion",
    "description": "A potion that replenishes the taker's blood if they have been injured and lost blood."
  },
  {
    "id": 84,
    "name": "Laxative Potion",
    "description": "A potion that is most likely a laxative."
  },
  
  
  {
    "id": 108,
    "name": "Potion No. 07",
    "description": "Experimental mix Poisonous"
  },
  {
    "id": 295,
    "name": "Vera Verto",
    "other_name": null,
    "pronunciation": "vair-uh-VAIR-toh",
    "spell_type": "Transfiguration",
    "description": "Turn animals to water goblets.",
    "etymology": "From Latin vera meaning \"right\" or \"proper\", and verto, meaning “I turn”.",
    "note": null
  },

]

const pocionsTestza= [
  {
    "id": 295,
    "name": "Vera Verto",
    "other_name": null,
    "pronunciation": "vair-uh-VAIR-toh",
    "spell_type": "Transfiguration",
    "description": "Turn animals to water goblets.",
    "etymology": "From Latin vera meaning \"right\" or \"proper\", and verto, meaning “I turn”.",
    "note": null
  },
  {
    "id": 138,
    "name": "Thick golden potion",
    "description": "Healing, curse quarantining. Was used by Professor Severus Snape in the summer of 1996 to treat the effects that the curse on the Ring Horcrux had on Albus Dumbledore."
  },
  {
    "id": 108,
    "name": "Potion No. 07",
    "description": "Experimental mix Poisonous"
  },
  {
    "id": 84,
    "name": "Laxative Potion",
    "description": "A potion that is most likely a laxative."
  },
  {
    "id": 44,
    "name": "Dragon Poison",
    "description": "A poisonous potion most likely taken from dragons."
  },
  {
    "id": 18,
    "name": "Blood-Replenishing Potion",
    "description": "A potion that replenishes the taker's blood if they have been injured and lost blood."
  },

]

describe('sortObj', () => {
  it('is a function', () => {
    expect(typeof sortObj).toBe('function');
  });

  it('ordena las pociones de za', () => {
    expect(sortObj(pocionsTest)).toEqual(pocionsTestza);
  });
}); 

const pocionsTestaz=[
  
  {
    "id": 18,
    "name": "Blood-Replenishing Potion",
    "description": "A potion that replenishes the taker's blood if they have been injured and lost blood."
  },
  {
    "id": 44,
    "name": "Dragon Poison",
    "description": "A poisonous potion most likely taken from dragons."
  },
  {
    "id": 84,
    "name": "Laxative Potion",
    "description": "A potion that is most likely a laxative."
  },
  {
    "id": 108,
    "name": "Potion No. 07",
    "description": "Experimental mix Poisonous"
  },
  {
    "id": 138,
    "name": "Thick golden potion",
    "description": "Healing, curse quarantining. Was used by Professor Severus Snape in the summer of 1996 to treat the effects that the curse on the Ring Horcrux had on Albus Dumbledore."
  },
  {
    "id": 295,
    "name": "Vera Verto",
    "other_name": null,
    "pronunciation": "vair-uh-VAIR-toh",
    "spell_type": "Transfiguration",
    "description": "Turn animals to water goblets.",
    "etymology": "From Latin vera meaning \"right\" or \"proper\", and verto, meaning “I turn”.",
    "note": null
  }, 
]
describe('sortObjaz', () => {
  it('is a function', () => {
    expect(typeof sortObjaz).toBe('function');
  });

  it('ordena las pociones de az', () => {
    expect(sortObjaz(pocionsTest)).toEqual(pocionsTestaz);
  });
}); 


const charactersTestfemele= [
  {
    "id": 587,
    "name": "Hermione Granger",
    "birth": "19 September, 1979",
    "death": null,
    "species": "Human",
    "ancestry": "Muggle-born",
    "gender": "Female",
    "hair_color": "Brown",
    "eye_color": "Brown",
    "wand": "10¾\", vine wood, dragon heartstring",
    "patronus": "Otter",
    "house": "Gryffindor",
    "associated_groups": [
      "Granger family",
      "Weasley family",
      "Potter family",
      "Hogwarts School of Witchcraft and Wizardry",
      "Gryffindor",
      "Slug Club",
      "S.P.E.W.",
      "Dumbledore's Army",
      "Order of the Phoenix",
      "British Ministry of Magic",
      "Department for the Regulation and Control of Magical Creatures",
      "Department of Magical Law Enforcement"
    ],
    "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
  },
  {
    "id": 589,
    "name": "Daphne Greengrass",
    "birth": "Between 1 September 1979 and 31 August 1980",
    "death": null,
    "species": "Human",
    "ancestry": "Pure-blood",
    "gender": "Female",
    "hair_color": null,
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": "Slytherin",
    "associated_groups": ["Hogwarts School of Witchcraft and Wizardry", "Slytherin", "Greengrass family"],
    "books_featured_in": [5]
  },
  {
    "id": 730,
    "name": "Romilda Vane",
    "birth": "between 1 September 1981 and 31 August 1982",
    "death": null,
    "species": "Human",
    "ancestry": "Pure-blood or half-blood (possibly)",
    "gender": "Female",
    "hair_color": "Black",
    "eye_color": "Dark",
    "wand": null,
    "patronus": null,
    "house": "Gryffindor",
    "associated_groups": ["Vane family", "Hogwarts School of Witchcraft and Wizardry", "Gryffindor", "Dumbledore's Army"],
    "books_featured_in": [4, 6]
  },
  {
    "id": 740,
    "name": "Myrtle Warren",
    "birth": "Between 14 June, 1928 and 13 June, 1929",
    "death": "13 June, 1943 (aged 14)",
    "species": "Human (formerly)",
    "ancestry": "Muggle-born",
    "gender": "Female",
    "hair_color": null,
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": "Ravenclaw",
    "associated_groups": [
      "Warren family",
      "Hogwarts School of Witchcraft and Wizardry",
      "Ravenclaw",
      "Harry Potter",
      "Draco Malfoy",
      "Albus Potter",
      "Scorpius Malfoy"
    ],
    "books_featured_in": [2, 4, 6]
  }

]

describe('porcentageObj', () => {
  it('is a function', () => {
    expect(typeof porcentageObj).toBe('function');
  });

  it('calcula porcentaje mujeres', () => {
    expect(porcentageObj(charactersTest.length, charactersTestfemele.length)).toEqual(66.66666666666667);
  });
}); 
