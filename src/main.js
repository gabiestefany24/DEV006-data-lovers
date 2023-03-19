import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const section_books= document.getElementById("section-books");
const section_potions=document.getElementById("section-potions");
const section_spell = document.getElementById("section-spell")
const section_houses = document.getElementById("section-houses")
const section_characters = document.getElementById("section-characters")
const section_home = document.getElementById("categories")
const button_characters = document.getElementById("personajes")
const button_houses = document.getElementById("casas")
const button_spell = document.getElementById("hechizos")
const button_books = document.getElementById("libros");
const button_potions=document.getElementById("pociones");
const potion1=document.getElementById("potion1-name");
const potion2=document.getElementById("potion2-name");
const potion_instructions = document.getElementById("potion-instructions");

section_home.style.display = "block";
section_characters.style.display = "none";
section_houses.style.display = "none";
section_spell.style.display = "none";
section_books.style.display="none";
section_potions.style.display="none";


button_characters.addEventListener("click", SectionCharacters);
button_books.addEventListener("click", SectionBooks);
button_potions.addEventListener("click", SectionPotions);
button_houses.addEventListener("click", SectionHouses);
button_spell.addEventListener("click", SectionSpell);


function SectionCharacters(){
    section_potions.style.display="none";
    section_spell.style.display = "none";
    section_books.style.display="none";
    section_houses.style.display = "none";
    section_home.style.display = "none";
    section_characters.style.display = "block";
}



function SectionHouses(){

    section_potions.style.display="none";
    section_spell.style.display = "none";
    section_books.style.display="none";
    section_home.style.display = "none";
    section_characters.style.display = "none";
    section_houses.style.display = "block";
}


function SectionSpell(){
    section_spell.style.display = "block";
    section_books.style.display="none";
    section_home.style.display = "none";
    section_characters.style.display = "none";
    section_houses.style.display = "none";
    section_potions.style.display="none";
     
    
}
function SectionBooks(){
    section_houses.style.display = "none";
    section_spell.style.display = "none";
    section_home.style.display = "none";
    section_characters.style.display = "none";
    section_books.style.display="block";
    section_potions.style.display="none"
}

function SectionPotions(){
    const potion1_description= "A potion that, depending on the amount taken, ages the drinker to various ages";
    const potion2_description= "A potion from the Alihotsy plant; causes hysterical laughter.";
    potion1.addEventListener("click", CambioDescripcion(potion1_description));
    potion2.addEventListener("click", CambioDescripcion(potion2_description));
    section_houses.style.display = "none";
    section_spell.style.display = "none";
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
