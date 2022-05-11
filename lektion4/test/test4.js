import {
    artikel_Gekauft, artikel_Hinzufuegen, gruppe_Hinzufuegen, einkaufsliste_Vorhanden, zusatz_indexOf
} from "../js/lektion4.js"

function teste_artikelGekauft() {
    console.debug("\nAufgabe 1 ----------------------")
    console.debug("Artikel kaufen:")
    artikel_Gekauft()
}

function teste_artikelHinzufuegen() {
    console.debug("\nAufgabe 2 ----------------------")
    console.debug("Artikel hinzufügen:")
    artikel_Hinzufuegen()
}

function teste_gruppeHinzufuegen() {
    console.debug("\nAufgabe 3 ----------------------")
    console.debug("Gruppe hinzufügen:")
    gruppe_Hinzufuegen()
}

function teste_einkaufslisteVorhanden() {
    console.debug("\nAufgabe 4 ----------------------")
    console.debug("Milchprodukte finden:")
    einkaufsliste_Vorhanden()
}

function teste_zusatzIndexOf () {
    console.debug("\nZusatzaufgabe --------------------------")
    console.debug("Enthält die Einkaufsliste \"Tomaten\"?")
    zusatz_indexOf()
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
    console.debug("[Tag 5] ============================")
    teste_artikelGekauft()
    teste_artikelHinzufuegen()
    teste_gruppeHinzufuegen()
    teste_einkaufslisteVorhanden()
    teste_zusatzIndexOf()
}

main()