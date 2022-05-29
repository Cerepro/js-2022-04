/**
 * Uebung 4: Bedingungen
 */

import {artikel_Gekauft} from "./lektion4.js";

/**
 * 1) Erstelle deine if-Bedingung!
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================");
//ToDo: füge ab hier deinen Code ein
  let ampel = "gruen";
  if (ampel == "gruen"){
console.debug("Du darfst fahren!")
  }
}

/**
 * 2) Erstelle deine if-Bedingung mit einem negativen Wert!
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================");

  let ampel = "rot";
  if (ampel != "gruen"){
console.debug("Du musst halten!")
  }
}

/**
 * 3) Bastel deine if-else Ampel!
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  let ampel = "gruen";
  if (ampel == "gruen") {
    console.debug("Du darfst fahren!")
  } else {
    console.debug("Du musst Halten!")
  }


  //ToDo: füge ab hier Deinen Code ein


}

/**
 * 4) Bastel deinen Switch Wochenkalender!
 */
function aufgabe4() {
  console.debug("Aufgabe 4 ==========================");

  let tag = 5;
  switch(tag) {
    case 1:console.debug("Heute ist Montag")
      break;
    case 2:console.debug("Heute ist Dienstag")
      break;
    case 3:console.debug("Heute ist Mittwoch")
      break;
    case 4:console.debug("Heute ist Donnerstag")
      break;
    case 5:console.debug("Heute ist Freitag")
      break;
    case 6:console.debug("Heute ist Samstag")
      break;
    case 7:console.debug("Heute ist Sonntag")
      break;
    default:console.debug("Tag nicht gefunden")
  }




  //ToDo: füge ab hier Deinen Code ein
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  aufgabe1();
  aufgabe2();
  aufgabe3();
  aufgabe4();
}
main();