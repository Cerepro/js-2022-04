/**
 * Uebung 6: Funktionen
 */

/**
 * 1) Schreibe die debug Funktion.
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================")

  //ToDo: füge ab hier Deinen Code ein
  console.debug("Diese Funktion kenne ich bereits!")
}

/**
 * 2) Benutze deinen ersten Parameter.
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================")

  //ToDo: füge ab hier Deinen Code ein
  function sagHallo(name) {
    console.debug("Hallo " + name)
  }

  sagHallo("Jacky")
}

/**
 * 3) Benutze dein erstes Argument.
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  function sagBye(name) {
    console.debug("Bye " + name)
  }

  //ToDo: füge ab hier Deinen Code ein
  sagBye("Jacky")
}

/**
 * 4) Schreibe deine erste Funktion mit Parameter und Argument.
 */
function aufgabe4() {
  console.debug("Aufgabe 4 ==========================");

  //ToDo: füge ab hier Deinen Code ein
  function willkommenZurueck(name) {
    console.debug("Da bist du ja wieder",name)
  }
  willkommenZurueck("Jacky")
}

/**
 * 5) Schreibe deinen ersten return.
 */
function aufgabe5() {
  console.debug("Aufgabe 5 ==========================");

  function multiplizieren(a, b) {
    //ToDo: füge ab hier Deinen Code ein
    return (a*b)
  }

  console.debug(multiplizieren(3, 5))
}

/**
 * 6) Schreibe deine erste rekursive Funktion.
 */
function aufgabe6() {
  console.debug("Aufgabe 6 ==========================");

  //ToDo: füge ab hier Deinen Code ein
  function fakultaet(a) {

    if (a <=1 ){
      return 1
    }
  else {
    return  a*fakultaet(a-1)
    }
  }


  console.debug(fakultaet(5))
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