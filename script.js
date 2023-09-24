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

  if (musiqueChoisie == "Anissa - Wejdene") {
    santeMentale -= 1; 
    nbTaxis +=1;
  } 


  return musiqueChoisie;
}

while (santeMentale > 0 && nbFeux > 0) {
  let musique = musiqueRadio();
  console.log(`John a écouté la musique ${musique}. Feux rouges restants : ${nbFeux}. Santé mentale actuelle : ${santeMentale}.`);
  if (musique == "Anissa - Wejdene") {
  console.log(`John change de taxi.`);
}
nbFeux-=1;
}



if (santeMentale <= 0) {
  console.log("John a épuisé sa santé mentale. Il explose.");
} else {
  console.log(`John est rentré chez lui avec une santé mentale finale de : ${santeMentale}`);
}

console.log(`Nombre de changement de taxis : ${nbTaxis}`);
