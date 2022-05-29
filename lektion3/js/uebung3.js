/**
 * Uebung 3: Maps
 */

/**
 * 1) Erstelle die Map.
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================");

  //ToDo: füge ab hier Deinen Code ein
const pizza = {
  art: "Tunfisch",
  belag: ["Tunfisch", "Zwiebeln", "Käse"],
  skala: 8,
  gerneIsst: true,
}
console.debug(pizza)
}

/**
 * 2) Rufe keys, value und entries auf.
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================");

  const tonno = {
    name: "Pizza Tonno",
    gruendung: 1981,
    medium: "immerimfroster"
  }

  //ToDo: füge ab hier in den debugs Deinen Code ein
  console.debug(Object.keys(tonno))
  console.debug(Object.values(tonno))
  console.debug(Object.entries(tonno))
}

/**
 * 3) Erstelle eine weitere Map.
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  //ToDo: füge ab hier Deinen Code ein
const kuenstler = {
  vorname: "Ryan Rodney",
  nachname: "Reynolds",
  geboren: "23.Oktober 1976",
  gestorben: "-",
  taetigkeit: "Schauspieler und Filmproduzent"
}
console.debug(Object.keys(kuenstler))
  for (let key of Object.keys(kuenstler)) {
    console.debug(key + ": " + kuenstler[key])
  }
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  aufgabe1()
  aufgabe2()
  aufgabe3()
}
main()