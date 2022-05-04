/**
 * Uebung 2: Arrays
 */

/**
 * 1) Wie bei den Variablen hat hier das let das Array erstellt. Das Array hat genau 5 Elemente, welches alles Laender sind.
 * Dadurch, dass wir den namen des Arrays in der console.debug angegeben haben, werden alle Elemente ausgegeben.
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================");

  let laender = ["USA", "Spanien", "Frankreich", "Deutschland", "Spanien"]
  console.debug(laender)
}

/**
 * 2) Durch unser helden.length in der console.debug wird die Laenge des Arrays ausgegeben.
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================");

  let helden = ["Spider-Man", "Batman", "Superman"]

  console.debug("Laenge des Arrays", helden.length)
}

/**
 * 3) Durch den Index 0 (Da wir immer mit 0 anfangen zu zaehlen) und den Index 4 werden nur die jeweiligen Elemente aus
 * dem Array heraus abgerufen.
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  let willkommen = ["Hallo", "Tschuess", "Mittag", "Planet", "Welt!"]

  console.debug(willkommen[0], willkommen[4])
}

/**
 * 4) Durch warenkorb.unshift können wir direkt das Element Brot vorne an unsere Liste anhaengen.
 */
function aufgabe4() {
  console.debug("Aufgabe 4 ==========================")

  let warenkorb = ["Milch", "Eier", "Wurst"]
  warenkorb.unshift("Brot")

  console.debug(warenkorb)
}

/**
 * 5) Durch buchstaben.splice koennen wir zunächst angeben, bei welchem Element wir starten und dann mit dem zweiten Wert,
 * wie viele Elemente wir loeschen wollen.
 */
function aufgabe5() {
  console.debug("Aufgabe 5 ==========================");

  let buchstaben = ["a", "b", "x", "y", "z", "c", "d"]
  buchstaben.splice(2,3)

  console.debug(buchstaben)
}

/**
 * 6) Wir erstellen wieder durch let das Array und füllen dieses mit den gewünschten Daten. Anschließend geben wir den
 * gewünschten Wert durch den Index aus (also durch die eckigen Klammern).
 */
function aufgabe6() {
  console.debug("Aufgabe 6 ==========================");

  let developer = ["Joshua", "Scherer", 25, 1.83, true]
  console.debug("Vorname: ", developer[0])
  console.debug("Nachname: ", developer[1])
  console.debug("Alter: ", developer[2])
  console.debug("Groesse: ", developer[3])
  console.debug("Aufgabe erledigt: ", developer[4])
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  aufgabe1()
  aufgabe2()
  aufgabe3()
  aufgabe4()
  aufgabe5()
  aufgabe6()
}
main()