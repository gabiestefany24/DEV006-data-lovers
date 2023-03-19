import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const section_spell = document.getElementById("section-spell")
const section_houses = document.getElementById("section-houses")
const section_characters = document.getElementById("section-characters")
const section_home = document.getElementById("categories")
const button_characters = document.getElementById("personajes")
const button_houses = document.getElementById("casas")
const button_spell = document.getElementById("hechizos")

section_home.style.display = "block";
section_characters.style.display = "none";
section_houses.style.display = "none";
section_spell.style.display = "none"


button_characters.addEventListener("click", SectionCharacters);

function SectionCharacters(){
    section_home.style.display = "none";
    section_characters.style.display = "block";
}

button_houses.addEventListener("click", SectionHouses);

function SectionHouses(){
    section_home.style.display = "none";
    section_characters.style.display = "none";
    section_houses.style.display = "block";
}

button_spell.addEventListener("click", SectionSpell);

function SectionSpell(){
    section_home.style.display = "none";
    section_characters.style.display = "none";
    section_houses.style.display = "none";
    section_spell.style.display = "block";
}
