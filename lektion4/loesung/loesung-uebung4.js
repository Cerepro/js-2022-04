/**
 * Uebung 4: Bedingungen
 */

/**
 * 1) Hier hast du deine erste If Bedingung erstellt. Zuallererst wurde eine Variable erstellt. Diese hat den Wert gruen
 * als String (Wort). In der if bedingung checken wir in der runden Klammer nach dem if, ob die Variable ampel auch wirklich
 * gruen entspricht. Ist dies der Fall, wird der folgende Code in den geschweiften Klammern ausgeführt. Dies ist in
 * unserem Fall das gewohnte console.debug(). Es gibt aus, dass man jetzt fahren darf!
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================");

  let ampel = "gruen";

  if (ampel == "gruen") {
    console.debug("Du darfst fahren!");
  }
}

/**
 * 2) Diese if-Bedingung funktioniert fast genauso wie die if-Bedingung aus Aufgabe 1. Hier ist jedoch ein kleiner
 * Unterschied! Diesmal schauen wir, ob die Ampel NICHT grün ist mit dem !== Vergleich. Da unsere Ampel hier auf rot gesetzt
 * ist, trifft unser Vergleich zu! Die Ampel ist NICHT grün, weswegen der folgende Code ausgeführt wird!
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================");

  let ampel = "rot";

  if (ampel !== "gruen") {
    console.debug("Du musst halten!");
  }
}

/**
 * 3) Weiterführend haben wir jetzt auch noch eine else-Bedingung. Diese wird immer genutzt, wenn unsere if Bedingung nicht
 * zutrifft. Unsere Ampel ist grün, weswegen die if-Bedingung zutrifft und dieser Code ausgeführt wird. Wäre dies nicht
 * der Fall, dann würde unser else ausgeführt werden!
 * Du kannst dir mal den Spass machen und der Ampel anstelle von gruen einen anderen Wert geben. Egal was du schreibst
 * (und welchen Typ deine Variable dann hat), es wird immer das else ausgeführt!
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  let ampel = "gruen";

  if (ampel == "gruen") {
    console.debug("Du darfst fahren!");
  }
  else {
    console.debug("Du musst halten!");
  }
}

/**
 * 4) In dieser Aufgabe hast du deinen ersten Switch "Kalender" erstellt. Vorgegeben ist die Variable tag als 5, weswegen
 * du am Ende bei Freitag rauskommen solltest. Nach dem Schlüsselwort switch wird in die Runde Klammer deine Variable geschrieben.
 * Nun gibt es cases (auf Deutsch Fälle), welche dann auf den Fall der Variable zugreifen. Bei uns ist es also Fall 5. Dieser
 * gibt dann aus, dass wir Freitag haben! Wichtig zu bemerken sind noch die break abschnitte, welche quasi den Fall schließen.
 * Final ist auch noch ein default Fall vorhanden. Dieser greift, wenn keiner unserer Fälle zutrifft.
 * Auch hier kannst du, wenn du magst, die Variable tag verändern und schauen, wann welcher Case verwendet wird!
 */
function aufgabe4() {
  console.debug("Aufgabe 4 ==========================");

  let tag = 5;

  switch(tag) {
    case 1:
      console.debug("Heute ist Montag!");
      break;
    case 2:
      console.debug("Heute ist Dienstag!");
      break;
    case 3:
      console.debug("Heute ist Mittwoch!");
      break;
    case 4:
      console.debug("Heute ist Donnerstag!");
      break;
    case 5:
      console.debug("Heute ist Freitag!");
      break;
    case 6:
      console.log("Heute ist Samstag!");
      break;
    case 7:
      console.debug("Heute ist Sonntag!");
      break;
    default:
      console.debug("Die Woche hat genau 7 Tage!");
  }
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