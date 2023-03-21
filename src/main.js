import { filterObj } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';

const contenedortarjetas= document.getElementById("contenedorcards");
const button_charactergriffindor= document.getElementById("charactergriffindor");
const button_characterslytherin= document.getElementById("characterslytherin");
const button_characterravenclaw= document.getElementById("characterravenclaw");
const button_characterhufflepuff= document.getElementById("characterhufflepuff");
const button_home =document.getElementById("inicio");
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

const griffindor = "Gryffindor";
const slytherin = "Slytherin";
const ravenclaw = "Ravenclaw";
const hufflepuff = "Hufflepuff";

button_charactergriffindor.addEventListener("click", FilterCharacter(griffindor));
button_characterslytherin.addEventListener("click", FilterCharacter(slytherin));
button_characterravenclaw.addEventListener("click", FilterCharacter(ravenclaw ));
button_characterhufflepuff.addEventListener("click", FilterCharacter(hufflepuff));


button_characters.addEventListener("click", SectionCharacters);
button_books.addEventListener("click", SectionBooks);
button_potions.addEventListener("click", SectionPotions);
button_houses.addEventListener("click", SectionHouses);
button_spell.addEventListener("click", SectionSpell);
button_home.addEventListener("click", SectionHome);


SectionHome();

//inyectar valores a characters


function SectionHome(){
    section_home.style.display = "block";
    section_characters.style.display = "none";
    section_houses.style.display = "none";
    section_spell.style.display = "none";
    section_books.style.display="none";
    section_potions.style.display="none";
}


function SectionCharacters(){
    section_potions.style.display="none";
    section_spell.style.display = "none";
    section_books.style.display="none";
    section_houses.style.display = "none";
    section_home.style.display = "none";
    section_characters.style.display = "block";


    contenedortarjetas.innerHTML=`<section class="characters-card1">

    <div class="bottom-card">  
      <div class="nombresection">
        <h3>HARRY <br />POTTER</h3>
        <div class="escudo">
        <img src="data/Images/gryffindor.png" width="90px" height="84px">
        </div> 
      </div>
      <img id="harry" src="data/Images/harrypotter_cha.png" width="144.47px" height="213.94px">
    </div>
  </section>

  <section class="characters-card2">
    <div class="bottom-card">  
      <div class="nombresection">
        <h3>DRACO <br />MALFOY</h3>
        <div class="escudo">
        <img src="data/Images/slytherin.png" width="90px" height="84px">
        </div> 
      </div>
      <img id="harry" src="data/Images/character_5.png" width="144.47px" height="213.94px">
    </div>
  </section>

  <section class="characters-card3">
    <div class="bottom-card">  
      <div class="nombresection">
        <h3>LUNA<br/>LOVEGOOD</h3>
        <div class="escudo">
        <img src="data/Images/ravenclaw.png" width="90px" height="84px">
        </div> 
      </div>
      <img id="harry" src="data/Images/pngegg (2).png" width="144.47px" height="213.94px">
    </div>
  </section>

  <section class="characters-card4">
    <div class="bottom-card">  
      <div class="nombresection">
        <h3>NEVILLE<br/> LONGBOTTOM</h3>
        <div class="escudo">
        <img src="data/Images/gryffindor.png" width="90px" height="84px">
        </div> 
      </div>
      <img id="harry" src="data/Images/character_2.png" width="144.47px" height="213.94px">
    </div>
  </section>

  <section class="characters-card5">
    <div class="bottom-card">  
      <div class="nombresection">
        <h3>CEDRIC<br/>DIAGORY</h3>
        <div class="escudo">
        <img src="data/Images/hufflepuff.png" width="90px" height="84px">
        </div> 
      </div>
      <img id="harry" src="data/Images/harry-potter-and-the-goblet-of-fire-cedric-diggory.png" width="144.47px" height="213.94px">
    </div>
  </section>

  <section class="characters-card6">
    <div class="bottom-card">  
      <div class="nombresection">
        <h3>HERMIONE<br/>GRANGER</h3>
        <div class="escudo">
        <img src="data/Images/gryffindor.png" width="90px" height="84px">
        </div> 
      </div>
      <img id="harry" src="data/Images/pngwing.com.png" width="144.47px" height="213.94px">
    </div>
  </section>`

}

function FilterCharacter(house){
  return function () {
    contenedortarjetas.innerHTML=""
    const objectfiltrated = filterObj(data.characters, house);
    PushContent(objectfiltrated,house);
    
  }
} 

function PushContent(arraypushed,house){
  if (house === "Gryffindor"){
    arraypushed.forEach(object => {
    object.color = "#271313"
    object.image = "data/Images/gryffindor.png"
})  
}
  else if (house === "Slytherin"){
  arraypushed.forEach(object => {
  object.color = "#112514"
  object.image = "data/Images/slytherin.png"

})} else if (house === "Ravenclaw"){
  arraypushed.forEach(object => {
  object.color = "#0C1127"
  object.image = "data/Images/ravenclaw.png"

})} else if (house === "Hufflepuff"){
  arraypushed.forEach(object => {
  object.color = "#3C370B"
  object.image = "data/Images/hufflepuff.png"
})}
const newarray= arraypushed;
ShowFiltratedChara(newarray);
}


function ShowFiltratedChara(array){
  array.forEach((character) => {
  let optioncharacter =  
  `<section class="characters-card1">
   <div class="bottom-card">  
    <div class="nombresection">
      <h3>${character.name}</h3>
      <div class="escudo">
      <img src="${character.image}" width="90px" height="84px">
      </div> 
    </div>
   </div>
  </section>    
  <style>
    .characters-card1{
      background-color: ${character.color};
    }`
contenedortarjetas.innerHTML += optioncharacter;
})}



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
