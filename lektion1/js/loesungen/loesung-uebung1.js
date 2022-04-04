/**
 * Tag 1: Variablen & Datentypen
 */

/**
 * Schreibe String-Variablen und gib sie auf der JavaScript-Console aus
 */
function aufgabe1() {
    console.debug("Aufgabe 1 ==========================")
    let artikel1 = "Brokkoli"
    let artikel2 = "Reis"
    let artikel3 = "Streukäse"

    console.debug("artikel1 = " + artikel1)
    console.debug("artikel2 = " + artikel2)
    console.debug("artikel3 = " + artikel3)
}

/**
 * Schreibe Zahlen-Variablen und gib sie auf der JavaScript-Console aus
 */
function aufgabe2() {
    console.debug("\nAufgabe 2 ==========================")
    let anzahlEinkaufsArtikel = 3
    let anzahlErldigteArtikel = 1

    console.debug("anzahlEinkaufsArtikel = " + anzahlEinkaufsArtikel)
    console.debug("anzahlErldigteArtikel = " + anzahlErldigteArtikel)
}


/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
    aufgabe1()
    aufgabe2()
}
main()