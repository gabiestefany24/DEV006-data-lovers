import { filterObj } from '../src/data.js';

const charactersTest = [
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

/*
describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */
