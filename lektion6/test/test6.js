import { gruppenListe, aktiveGruppe,
    gruppeFinden, gruppeHinzufuegen, gruppeUmbenennen, gruppeEntfernen } from "../js/lektion6.js"

/**
 * Testet `gruppeFinden()` mit verschiedenen 'gruppenName'
 */
function teste_gruppeFinden() {
    console.debug("Aufgabe 1 ----------------------");
    console.debug("Gruppe finden:");

    let gruppe1 = gruppeFinden("Obst & Gemüse")
    console.debug("gruppe1: " + gruppe1)

    let gruppe2 = gruppeFinden("Getreideprodukte")
    console.debug("gruppe2: " + gruppe2)

    let gruppe3 = gruppeFinden("Getränke")
    console.debug("gruppe3: " + gruppe3)
}

/**
 * Testet `gruppeHinzufuegen()` mit verschiedenen `name`.
 */
function teste_gruppeHinzufuegen() {
    console.debug("\nAufgabe 2 ----------------------");
    console.debug("Gruppe hinzufügen:");

    // ToDo: füge ab hier deinen Code ein
    console.debug("gruppenListe vorher: " + gruppenListe)

    gruppeHinzufuegen("Knabberkram")
    console.debug("gruppenListe nachher:" + gruppenListe)

    let knabberGruppe = gruppeFinden("Knabberkram")
    console.debug("knabberGruppe: ", knabberGruppe)
}

/**
 * Teste `gruppeUmbenennen()` mit einer vorhandenen Gruppe, z.B. "Milchprodukte".
 * Gib anschließend die `gruppenListe` auf der Konsole aus, um zu überprüfen,
 * ob die richtige Gruppe umbenannt wurde.
 */
function teste_gruppeUmbenennen() {
    console.debug("\nAufgabe 3 ----------------------");
    console.debug("Gruppe umbenennen:");

    // ToDo: füge ab hier deinen Code ein
    gruppeHinzufuegen("bebidas")
    console.debug("gruppenListe vorher: " + gruppenListe)

    gruppeUmbenennen("bebidas", "Getränke")
    console.debug("gruppenListe nachher:" + gruppenListe)
}

/**
 * Teste die Funktion `gruppeUmbenennen()` mit einer NICHT vorhandenen Gruppe.
 * Wenn Du in `gruppeUmbenennen()` `gruppeFinden()` verwendet hast,
 * sollte eine Warnmeldung auf der Konsole ausgegeben werden.
 */
function teste_gruppeUmbenennen_Fehler() {
    console.debug("\nGruppe umbenennen mit Fehler:");

    // ToDo: füge ab hier deinen Code ein
    gruppeUmbenennen("bebidas", "Getränke")
}

/**
 * Teste `gruppeEntfernen()`, indem du zuerst eine neue Gruppe (z.B. Süßigkeiten) hinzufügst.
 * Gib die geänderte `gruppenListe` auf der Konsole aus.
 * Die neue Gruppe sollte darin auftauchen.
 * Entferne anschließend die gerade hinzugefügte Gruppe mit `gruppeEntfernen("Süßigkeiten")`.
 * Wenn Du nun die `gruppenListe` auf der Konsole ausgibst, sollte "Süßigkeiten" entfernt sein.
 */
function teste_gruppeEntfernen() {
    console.debug("\nAufgabe 4 ----------------------");
    console.debug("Gruppe entfernen:");

    // ToDo: füge ab hier deinen Code ein
    gruppeHinzufuegen("Süßigkeiten")
    console.debug("gruppenListe vorher: " + gruppenListe)

    gruppeEntfernen("Süßigkeiten")
    console.debug("gruppenListe nachher:" + gruppenListe)
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
    console.debug("[Lektion 6] ============================")
    teste_gruppeFinden()
    teste_gruppeHinzufuegen()
    teste_gruppeUmbenennen()
    teste_gruppeUmbenennen_Fehler()
    teste_gruppeEntfernen()
}
main()