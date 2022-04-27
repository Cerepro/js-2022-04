/**
 * Uebung 3: Maps
 */

/**
 * 1) Hier hast du deine erste Map erstellt! Die map wird, wie bei einer Variablen, mit dem Schlüsselwort let kreiert.
 * Anschließend möchtest du 4 verschiedene Werte in deiner Map speichern. Diese haben jeweils einen Schlüssel (z.B. art:)
 * und dann einen Wert (z.B. Salami). Wie du siehst, müssen nicht alle Werte innerhalb der Map den gleichen Wert haben!
 * Am Ende wird dann in der Konsole die Gesamte map mit Schlüsseln (keys) und Werten (values) ausgegeben.
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================");

  let pizza = {
    art: "Salami",
    belag: "Käse und Salami",
    skala: 8,
    gerneIsst: true
  }

  console.debug(pizza)
}

/**
 * 2) Hier wurden die Map auf bekannte Weise erstellt. In den console.debug Funktionen haben wir nun auf verschiedene
 * Aspekte der map zugegriffen. Object.keys(ghibli) greift auf die keys der map zu. Ebenso greift values auf die values
 * und entries auf die Eintraege der map zu.
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================");

  let ghibli = {
    name: "Studio Ghibli",
    gruendung: 1985,
    medium: "Anime"
  }

  console.debug(Object.keys(ghibli))
  console.debug(Object.values(ghibli))
  console.debug(Object.entries(ghibli))
}

/**
 * 3) Hier hast du, wie in den beiden vorherigen Aufgaben, eine map erstellt. Lass dich von der for ausgabe weiter unten
 * nicht irritieren. Zu den Schleifen kommen wir in Kapitel 5.
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  let kuenstler = {
    vorname: "Stan",
    nachname: "Lee",
    geboren: 1922,
    gestorben: 2018,
    taetigkeit: "Autor",
    lieblingsWerk: "Amazing Fanatsy #15",
    quote: "With great power there must also come great responsibility!"
  }

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