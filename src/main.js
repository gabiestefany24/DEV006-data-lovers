import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const section_characters = document.getElementById("section-characters");
const section_home = document.getElementById("categories");
const button_characters = document.getElementById("personajes");
const section_books= document.getElementById("section-books");
const button_books = document.getElementById("libros");
const button_potions=document.getElementById("pociones");
const section_potions=document.getElementById("section-potions");
const potion1=document.getElementById("potion1-name");
const potion2=document.getElementById("potion2-name");
const potion_instructions = document.getElementById("potion-instructions");

section_home.style.display = "block";
section_characters.style.display = "none";
section_books.style.display="none";
section_potions.style.display="none";


button_characters.addEventListener("click", SectionCharacters);
button_books.addEventListener("click", SectionBooks);
button_potions.addEventListener("click", SectionPotions);

function SectionCharacters(){
    section_home.style.display = "none";
    section_characters.style.display = "block";
    section_books.style.display="none";
    section_potions.style.display="none";
}
function SectionBooks(){
    section_home.style.display = "none";
    section_characters.style.display = "none";
    section_books.style.display="block";
    section_potions.style.display="none";
}

function SectionPotions(){
    const potion1_description= "A potion that, depending on the amount taken, ages the drinker to various ages";
    const potion2_description= "A potion from the Alihotsy plant; causes hysterical laughter.";
    potion1.addEventListener("click", CambioDescripcion(potion1_description));
    potion2.addEventListener("click", CambioDescripcion(potion2_description));
    section_home.style.display = "none";
    section_characters.style.display = "none";
    section_books.style.display="none";
    section_potions.style.display="block";
    potion_instructions.innerHTML="Seleccione una pocion";
    
}
function CambioDescripcion(description){
        return function () {
            potion_instructions.innerHTML=description;
        };
    }