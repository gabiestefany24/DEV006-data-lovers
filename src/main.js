import { filterObj } from './data.js';

import { sortObj } from './data.js';
import { sortObjaz } from './data.js';
import {porcentageObj} from './data.js';
import data from './data/harrypotter/data.js';

const character = data.characters;
const contenedortarjetas = document.getElementById("contenedorcards");
const contenedorpotions = document.getElementById("potions-name");
const contenedorspells= document.getElementById("spellmain");
const contenedorporcentageF= document.getElementById("porcentangeFnumber");
const contenedorporcentageM= document.getElementById("porcentangeMnumber");
const contenedorporcentageMS= document.getElementById("porcentangeMSnumber");
const contenedorporcentageFS= document.getElementById("porcentangeFSnumber");
const contenedorporcentageFR= document.getElementById("porcentangeFRnumber");
const contenedorporcentageMR= document.getElementById("porcentangeMRnumber");
const contenedorporcentageMH= document.getElementById("porcentangeMHnumber");
const contenedorporcentageFH= document.getElementById("porcentangeFHnumber");
const studentsnumber= document.getElementById("studentsnumber");
const studentsSnumber= document.getElementById("studentsSnumber");
const studentsRnumber= document.getElementById("studentsRnumber");
const studentsHnumber= document.getElementById("studentsHnumber");


const selectedhouse = document.getElementById("selectedhouse");
const button_sortZA = document.getElementById("button-sortZA");
const button_sortAZ = document.getElementById("button-sortAZ");
const button_charactergriffindor = document.getElementById("charactergriffindor");
const button_characterslytherin = document.getElementById("characterslytherin");
const button_characterravenclaw = document.getElementById("characterravenclaw");
const button_characterhufflepuff = document.getElementById("characterhufflepuff");
const button_characterhomeless = document.getElementById("characterhomeless");
const button_housegryffindor= document.getElementById("house1");
const button_houseslytherin= document.getElementById("house2");
const button_houseravenclaw= document.getElementById("house3");
const button_househufflepuff= document.getElementById("house4");


const button_home = document.getElementById("inicio");
const section_books = document.getElementById("section-books");
const section_potions = document.getElementById("section-potions");
const section_spell = document.getElementById("section-spell")
const section_houses = document.getElementById("section-houses")
const sectionhouse1 = document.getElementById("porcentagehouse1")
const sectionhouse2 = document.getElementById("porcentagehouse2")
const sectionhouse3 = document.getElementById("porcentagehouse3")
const sectionhouse4 = document.getElementById("porcentagehouse4")
const section_characters = document.getElementById("section-characters")
const section_home = document.getElementById("categories")
const button_characters = document.getElementById("personajes")
const button_houses = document.getElementById("casas")
const button_spell = document.getElementById("hechizos")
const button_books = document.getElementById("libros");
const button_potions = document.getElementById("pociones");
const potion_instructions = document.getElementById("potion-instructions");

const griffindor = "Gryffindor";
const slytherin = "Slytherin";
const ravenclaw = "Ravenclaw";
const hufflepuff = "Hufflepuff";
const none = null;

button_charactergriffindor.addEventListener("click", FilterCharacter(griffindor));
button_characterslytherin.addEventListener("click", FilterCharacter(slytherin));
button_characterravenclaw.addEventListener("click", FilterCharacter(ravenclaw));
button_characterhufflepuff.addEventListener("click", FilterCharacter(hufflepuff));
button_characterhomeless.addEventListener("click", FilterCharacter(none));
button_sortZA.addEventListener ("click", SortPotionsZA());
button_sortAZ.addEventListener ("click", SortPotionsAZ());
button_housegryffindor.addEventListener("click",FilterHouse(griffindor,sectionhouse1,contenedorporcentageM, contenedorporcentageF,studentsnumber));
button_houseslytherin.addEventListener("click",FilterHouse(slytherin,sectionhouse2, contenedorporcentageMS, contenedorporcentageFS, studentsSnumber ));
button_houseravenclaw.addEventListener("click",FilterHouse(ravenclaw,sectionhouse3, contenedorporcentageMR, contenedorporcentageFR,studentsRnumber));
button_househufflepuff.addEventListener("click",FilterHouse(hufflepuff,sectionhouse4, contenedorporcentageMH, contenedorporcentageFH, studentsHnumber));

button_characters.addEventListener("click", SectionCharacters);
button_books.addEventListener("click", SectionBooks);
button_potions.addEventListener("click", SectionPotions);
button_houses.addEventListener("click", SectionHouses);
button_spell.addEventListener("click", SectionSpell);
button_home.addEventListener("click", SectionHome);


SectionHome();

//inyectar color a characters


function SectionHome() {
  section_home.style.display = "block";
  section_characters.style.display = "none";
  section_houses.style.display = "none";
  section_spell.style.display = "none";
  section_books.style.display = "none";
  section_potions.style.display = "none";
  sectionhouse1.style.display = "none";
  sectionhouse2.style.display = "none"; 
  sectionhouse3.style.display = "none";
  sectionhouse4.style.display = "none";

}

const newcharacters = character;

function SectionCharacters() {
  section_potions.style.display = "none";
  section_spell.style.display = "none";
  section_books.style.display = "none";
  section_houses.style.display = "none";
  section_home.style.display = "none";
  section_characters.style.display = "block";
  sectionhouse1.style.display = "none";
  sectionhouse2.style.display = "none"; 
  sectionhouse3.style.display = "none"; 
  sectionhouse4.style.display = "none";


  const getColor = function (p) {
    if (p.house === 'Gryffindor') {
      const colors = "#271313";
      return colors;
    } else if (p.house === 'Slytherin' || p.house === "Malfoy family") {
      const colors = "#112514";
      return colors;
    } else if (p.house === 'Ravenclaw') {
      const colors = "#0C1127";
      return colors;
    } else if (p.house === 'Hufflepuff') {
      const colors = "#975D1C";
      return colors;
    } else {
      const colors = "#9e9cac";
      return colors;
    }
  };

  const getShield = function (p) {
    if (p.house === 'Gryffindor') {
      const escudos = "gryffindor.png";
      return escudos;
    } else if (p.house === 'Slytherin') {
      const escudos = "slytherin.png";
      return escudos;
    } else if (p.house === 'Ravenclaw') {
      const escudos = "ravenclaw.png";
      return escudos;
    } else if (p.house === 'Hufflepuff') {
      const escudos = "hufflepuff.png";
      return escudos;
    } else {
      const escudos = "casas.png";
      return escudos;
    }
  };

  const getImg = function (p) {
    if (p.name === 'Bellatrix Lestrang') {
      const Image = "belatrix_720.png";
      return Image;
    } else if (p.name === 'Rubeus Hagrid') {
      const Image = "hagrid1.png";
      return Image;
    } else if (p.name === 'Minerva McGonagall') {
      const Image = "minerva_720.png";
      return Image;
    } else if (p.name === 'Severus Snape') {
      const Image = "severus1.png";
      return Image;
    } else if (p.name === 'Ronald Weasley') {
      const Image = "PngItem_3243455.png";
      return Image;
    } else if (p.name === 'Sirius Black') {
      const Image = "sirius_black.png";
      return Image;
    } else if (p.name === 'Tom Riddle (Voldemort)') {
      const Image = "voldemort.png";
      return Image;
    } else if (p.name === 'Dobby') {
      const Image = "dobby1.png";
      return Image;
    } else if (p.name === 'Dolores Umbridge') {
      const Image = "dolores.png";
      return Image;
    } else if (p.name === 'Ginny Weasley') {
      const Image = "ginny1.png";
      return Image;
    } else if (p.name === 'Harry Potter') {
      const Image = "harrypotter_cha.png";
      return Image;
    } else if (p.name === 'Hermione Granger') {
      const Image = "pngwing.com.png";
      return Image;
    } else if (p.name === 'Draco Malfoy') {
      const Image = "character_5.png";
      return Image;
    } else if (p.name === 'Neville Longbottom') {
      const Image = "character_2.png";
      return Image;
    } else if (p.name === 'George Weasley') {
      const Image = "George Weasley.png";
      return Image;
    } else if (p.name === 'Aberforth Dumbledore') {
      const Image = "dum.png";
      return Image;
    } else if (p.name === 'Albus Dumbledore') {
      const Image = "character_3.png";
      return Image;
    } else if (p.name === 'Cedric Diggory') {
      const Image = "harry-potter-and-the-goblet-of-fire-cedric-diggory.png";
      return Image;
    } else if (p.name === 'Luna Lovegood') {
      const Image = "pngegg (2).png";
      return Image;
    } else if (p.name === 'Sybill Trelawney') {
      const Image = "Sybill Trelawney.png";
      return Image;
    } else if (p.name === 'Cho Chang') {
      const Image = "Cho Chang.png";
      return Image;
    } else if (p.name === 'Seamus Finnigan') {
      const Image = "Seamus Finnigan.png";
      return Image;
    } else if (p.name === 'Argus Filch') {
      const Image = "Argus Filch.webp";
      return Image;
    } else if (p.name === 'Rolanda Hooch') {
      const Image = "Rolanda Hooch.webp";
      return Image;
    } else if (p.name === 'Viktor Krum') {
      const Image = "Viktor Krum.png";
      return Image;
    } else if (p.name === 'Oliver Wood') {
      const Image = "Oliver Wood.png";
      return Image;
    } else if (p.name === 'Molly Weasley') {
      const Image = "Molly Weasley.png";
      return Image;
    } else if (p.name === 'Alastor Moody') {
      const Image = "Alastor Moody.png";
      return Image;
    } else if (p.name === 'Nymphadora Tonks') {
      const Image = "nymphadora tonks.png";
      return Image;
    } else if (p.name === 'Remus Lupin') {
      const Image = "Remus Lupin.png";
      return Image;
    } else if (p.name === 'Lucius Malfoy') {
      const Image = "Lucius Malfoy.png";
      return Image;
    } else {
      const Image = "noimg.png";
      return Image;
    }
  };

  newcharacters.forEach(p => {
    p.color = getColor(p);
    p.shield = getShield(p);
    p.img = getImg(p);
  });

  ShowCharacters(newcharacters);
  return newcharacters
}

const sheet = document.createElement('style')


function ShowCharacters(array) {
  let styles = ''
  let tarjetas = ''
  array.forEach((p) => {
    const optioncharacter =
      `<section class="p${p.id}">
        <div class="bottom-card">  
          <div class="nombresection">
            <h3>${p.name.toUpperCase()}</h3>
            <div class="escudo">
            <img src="data/Images/${p.shield}" width="90px" height="84px">
            </div> 
          </div>
          <img id="harry" src="data/Images/${p.img}" width="144.47px" height="213.94px">
        </div>
      </section>`


    styles += `.p${p.id} {
    width: 234.86px;
    height: 198.17px;
    border-radius: 30px;
    border:0;
    background: ${p.color}}`
    tarjetas += optioncharacter;
  })
  contenedortarjetas.innerHTML = tarjetas;
  sheet.innerHTML = styles
  document.head.appendChild(sheet);
}

function FilterCharacter(value) {
  return function () {
    contenedortarjetas.innerHTML = ""
    const objectfiltrated = filterObj(newcharacters, "house", value);
    ShowCharacters(objectfiltrated)
    selectedhouse.innerHTML = value.toUpperCase() + " 🠋";
  }
}


function SectionHouses() {

  section_potions.style.display = "none";
  section_spell.style.display = "none";
  section_books.style.display = "none";
  section_home.style.display = "none";
  section_characters.style.display = "none";
  section_houses.style.display = "block";
  sectionhouse1.style.display = "none";
  sectionhouse2.style.display = "none"; 
  sectionhouse3.style.display = "none"; 
  sectionhouse4.style.display = "none";
}


function FilterHouse(value, section, porcentageman, porcentagewoman,numberstudents) {
  return function(){
    section.style.display="block";
    section_houses.style.display = "none";

    const objectfiltrated = filterObj(newcharacters, "house", value);
    const genderfem= "Female"
    const objectfilterfemale = filterObj(objectfiltrated, "gender", genderfem);
    const porcentagefemale= porcentageObj(objectfiltrated.length, objectfilterfemale.length)

    const porcentagemale= 100-porcentagefemale
    porcentagewoman.innerHTML= Math.round(porcentagefemale)+ "% </br>"
    porcentageman.innerHTML=Math.round(porcentagemale)+"%"
    numberstudents.innerHTML=(objectfiltrated.length)
    
    
  }}


function SectionSpell() {
  section_spell.style.display = "block";
  section_books.style.display = "none";
  section_home.style.display = "none";
  section_characters.style.display = "none";
  section_houses.style.display = "none";
  section_potions.style.display = "none";
  sectionhouse1.style.display = "none";

  ShowSpell(data.spells);
}

function ShowSpell (array){
  let tarjetasSpell = ''
  array.forEach(s => {
    const optionsspells=
      `<section class="spell1">
      <div class="bottom-spell">  
        <div class="spelldescription">
          <h3>${s.name}</h3>
          <h4>${s.description}</h4>
        </div>
      </div>
    </section> `
    tarjetasSpell += optionsspells;
  });
  contenedorspells.innerHTML= tarjetasSpell;
}

function SectionBooks() {
  section_houses.style.display = "none";
  section_spell.style.display = "none";
  section_home.style.display = "none";
  section_characters.style.display = "none";
  section_books.style.display = "block";
  section_potions.style.display = "none";
  sectionhouse1.style.display = "none";
}

function SectionPotions() {
  section_houses.style.display = "none";
  section_spell.style.display = "none";
  section_home.style.display = "none";
  section_characters.style.display = "none";
  section_books.style.display = "none";
  section_potions.style.display = "block";
  sectionhouse1.style.display = "none";
  potion_instructions.innerHTML = "Seleccione una pocion";
  ShowPotions(data.potions);
}

function ShowPotions(array) {
  let optionPotionName 
  array.forEach((p) => {
    optionPotionName=
      `<span id ="${p.id}">${p.name}</span>`
    contenedorpotions.innerHTML += optionPotionName;
  })
  for (let i=1; i<=array.length; i++) {
    const identificadorpocionId = document.getElementById(i)
    identificadorpocionId.addEventListener('click', function () {
      potion_instructions.innerHTML = array[i-1].description;
    });
  } 
}

function ShowPotionsZA(array) {
  let optionPotionName 
  array.forEach((p) => {
    optionPotionName=
      `<span id ="${p.id}">${p.name}</span>`
    contenedorpotions.innerHTML += optionPotionName;
  })
  for (let i=1; i<=array.length; i++) {
    const identificadorpocionId = document.getElementById(array.length+1-i)
    identificadorpocionId.addEventListener('click', function () {
      potion_instructions.innerHTML = array[i-1].description;
    });
  } 
}
function SortPotionsZA(){
  return function (){
    contenedorpotions.innerHTML=""
    const sortpotions= sortObj(data.potions);
    ShowPotionsZA(sortpotions)
  }
}
function SortPotionsAZ(){
  return function (){
    contenedorpotions.innerHTML=""
    const sortpotions= sortObjaz(data.potions);
    ShowPotions(sortpotions)
  }
}



