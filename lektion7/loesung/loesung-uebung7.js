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

  let apfel = new Apfel("rot")

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

    hupen() {
      console.debug("honk honk")
    }
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

  console.debug(mini.farbe)
  mini.hupen()
}

/**
 * 4) Schreibe den Konstruktor
 */
function aufgabe4() {
  console.debug("Aufgabe 4 ==========================");

  class Motorrad {
    constructor (baujahr) {
      this.baujahr = baujahr
    }

    hupen() {
      console.debug("honk honk")
    }
  }

  let harley = new Motorrad(1980)

  console.debug(harley.baujahr)
}

/**
 * 5) Schreibe eine komplette Klasse
 */
function aufgabe5() {
  console.debug("Aufgabe 5 ==========================");

  class Elektroauto {
    constructor (farbe) {
      this.farbe = farbe
    }

    hupen() {
      console.debug("honk honk")
    }
  }

  let tesla = new Elektroauto("grau")

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