import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const section_characters = document.getElementById("section-characters");
const section_home = document.getElementById("categories")
const button_characters = document.getElementById("personajes")

section_home.style.display = "block";
section_characters.style.display = "none";

button_characters.addEventListener("click", SectionCharacters);

function SectionCharacters(){
    section_home.style.display = "none";
    section_characters.style.display = "block";
}