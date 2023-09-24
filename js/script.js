"use strict";

const startSante = 10 ;
const maxFeux = 30 ;

let santeMentale = startSante;
let nbTaxis = 0; 
let nbFeux = maxFeux;

function musiqueRadio() {  
  let nbRandom = Math.floor(Math.random() * 5 + 1);
  let musiqueChoisie;
  switch (nbRandom) {
    case 1 :
        musiqueChoisie = "Anissa - Wejdene" ;
        break;
    case 2 :
        musiqueChoisie = "Spectre - Alan Walker" ;
        break;
    case 3 :
        musiqueChoisie = "Never Gonna Give You Up - Rick Astley" ;
        break;
    case 4 :
        musiqueChoisie = "Hello - OMFG" ;
        break;
    case 5 :
        musiqueChoisie = "Among Us Remix" ;
        break;
  }
  return musiqueChoisie;
}

while (santeMentale > 0 && nbFeux > 0) {
  nbFeux-=1;
  let musique = musiqueRadio();
  console.log(`John a écouté la musique ${musique}. Feux rouges restants : ${nbFeux}. Santé mentale actuelle : ${santeMentale}.`);
  if (musique == "Anissa - Wejdene") {
  console.log(`John change de taxi.`);
  santeMentale -= 1; 
  nbTaxis +=1;
}
}

if (santeMentale <= 0) {
  console.log("John a épuisé sa santé mentale.");
  console.log("%c EXPLOSION!", "font-weight: bold; font-size: 50px;color: red; text-shadow: 2px 2px 0 rgb(245, 117, 66) , 4px 4px 0 rgb(245, 150, 66) , 6px 6px 0 rgb(245, 176, 66) , 8px 8px 0 rgb(245, 203, 66) , 10px 10px 0 rgb(245, 230, 66) , 12px 12px 0 rgb(117, 23, 20) , 14px 14px 0 rgb(255, 255, 255); margin-bottom: 12px; padding: 5%");
} else {
  console.log(`John est rentré chez lui avec une santé mentale finale de : ${santeMentale}`);
}

console.log(`Nombre de changement de taxis : ${nbTaxis}`);
