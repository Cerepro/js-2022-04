import {
    artikelAuflisten, allesAuflisten, artikelEntfernen, sortieren
} from "../js/aufgaben/lektion5.js"

function teste_artikelAuflisten() {
    console.debug("Aufgabe 1 ----------------------")
    console.debug("Artikel auflisten:")
    artikelAuflisten()
}

function teste_allesAuflisten() {
    console.debug("\nAufgabe 2 ----------------------")
    console.debug("Alles auflisten:")
    allesAuflisten()
}

function teste_artikelEntfernen() {
    console.debug("\nAufgabe 3 ----------------------")
    console.debug("Artikel entfernen:")
    artikelEntfernen()
}

function teste_sortieren() {
    console.debug("\nAufgabe 4 ----------------------")
    console.debug("Artikel sortieren:")
    sortieren()
}

function main(){
    console.debug("[Lektion 5] ============================")
    teste_artikelAuflisten()
    teste_allesAuflisten()
    teste_artikelEntfernen()
    teste_sortieren()
}

main()


