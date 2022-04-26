/**
 * Uebung 1: Variablen
 */

/**
 * 1) Hier haben wir eine Variable mit dem Schlüsselwort let erstelt. Anschließend haben wir ihr den String (Typ für Worte)
 * Spanien in der gleichen Zeile verpasst. Somit hat unser Variable land nun den Wert Spanien!
 */
let land = "Spanien";

/**
 * 2) Die äußere Funktion "aufgabe2" ist dafür da, dass beim Starten des Programms auch auf deinen Code zugegriffen wird.
 * Hiermit musst du dich noch nicht beschäftigen. Funktionen kommen später im Kurs dran. Das Gleiche gilt für die Funktion
 * console.debug. Nur zum Verständnis: Diese sorgt dafür, dass das geforderte auch wirklich ausgegeben wird.
 * Da wir in dem unteren console.debug unsere Variable eingegeben haben, wird hier automatisch vom Code erkannt, das der
 * gespeicherte Name abgerufen werden soll. Deshalb steht hier dann in der Konsole Spanien!
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================");
  console.debug(land);
}

/**
 * 3) Hier erstellen wir ganz einfach drei Variablen in einer Zeile Code. Wichtig ist hier wieder das Schlüsselwort let.
 * WICHTIG: Vergesse nicht, dass diese Variablen noch keinen Wert haben. Bisher existieren sie einfach. Das kannst du dir
 * wie ein leeres Glas vorstellen!
 */
let stadt, berg, fluss;

/**
 * 4) Hier geben wir nun den einzelnen Variablen Werte. Diese sind wieder vom Typ String (Worte). Um bei dem Beispiel von
 * Aufgabe 3 zu bleiben: Stell dir vor, dass dies nun einfach der Vorgang ist, bei dem man Wasser in das Glas füllt!
 * Ignoriere wieder einfach die gegebenen Funktionen. Diese musst du noch nicht selber schreiben oder verstehen! Diese erfüllen
 * noch den gleichen Zweck wie in Aufgabe 2.
 */
function aufgabe4() {
  console.debug("Aufgabe 4 ==========================");

  stadt = "Berlin";
  berg = "Mount Everest";
  fluss = "Nil";

  console.debug(stadt,", ", berg,", ", fluss);
}

/**
 * 5) Genau wie bei unseren anderen Aufgaben, musst du hier den Variablen entsprechende Werte geben. Wie du siehst, benutzen
 * wir hier auch ein paar andere Typen, allerdings funktioniert unsere Programmierweise nach wie vor gleich!
 */
function aufgabe5() {
  console.debug("Aufgabe 5 ==========================");

  let name = "Elon Musk";
  let alter = 50;
  let groesseInMeter = 1.88;
  let amLeben = true;

  console.debug(name);
  console.debug(alter);
  console.debug(groesseInMeter);
  console.debug(amLeben);
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  aufgabe2();
  aufgabe4();
  aufgabe5();
}
main();