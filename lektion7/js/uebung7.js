/**
 * Uebung 7: Klassen
 */

/**
 * 1) Kreiere einen neuen Apfel
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================")

  class Apfel {
    constructor (farbe) {
      this.farbe = farbe
    }

  }

  //ToDo: füge ab hier deinen Code ein

  console.debug(apfel.farbe)
}

/**
 * 2) Schreibe deine Methode
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================")

  class Auto {
    constructor (farbe) {
      this.farbe = farbe
    }

    //ToDo: füge ab hier deinen Code ein
  }

  let bmw = new Auto("rot")

  bmw.hupen()
}

/**
 * 3) Rufe die Farbe und die Methode auf
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  class Pkw {
    constructor (farbe) {
      this.farbe = farbe
    }

    hupen() {
      console.debug("honk honk")
    }
  }

  let mini = new Pkw("blau")

  //ToDo: füge ab hier deinen Code ein
}

/**
 * 4) Schreibe den Konstruktor
 */
function aufgabe4() {
  console.debug("Aufgabe 4 ==========================");

  class Motorrad {
    //ToDo: füge ab hier deinen Code ein

    hupen() {
      console.debug("honk honk")
    }
  }

  let harley = new Motorrad(1980)

  console.debug(harley.baujahr)
}

/**
 * 5) Schreibe eine komplette Klasse und erstelle den Tesla
 */
function aufgabe5() {
  console.debug("Aufgabe 5 ==========================");

  //ToDo: füge ab hier deinen Code ein

  console.debug(tesla.farbe)
  tesla.hupen()
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
}
main()