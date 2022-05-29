import {Gruppe} from "../../js/Gruppe.js"
import {Artikel} from "../../js/Artikel.js"
import {Shopping} from "../../js/Shopping.js"


function teste_artikelAuflisten() {
    console.debug("Aufgabe 1 ----------------------");
    console.debug("Artikel auflisten:");

    let saft = new Artikel("saft", 1)
    let wasser = new Artikel("wasser", 2)
    let cola = new Artikel("cola", 3)
    let alkoholfreieGetraenke = new Gruppe("Alkoholfreie Getränke", 1)
    alkoholfreieGetraenke.artikelListe = [saft, wasser, cola]
    alkoholfreieGetraenke.artikelAuflisten(false)
}

function teste_gruppeFinden() {
    console.debug("Aufgabe 2 ----------------------");
    console.debug("Gruppe finden:");

    let einkaufen = new Shopping()
    einkaufen.gruppeHinzufuegen("Obst & Gemüse")
    einkaufen.gruppeHinzufuegen("Getreideprodukte")
    einkaufen.gruppeHinzufuegen("Milchprodukte")

    // ToDo: füge ab hier deinen Code ein
    let gruppe1 = einkaufen.gruppeFinden("Obst & Gemüse")
    console.debug("gruppe1: ", gruppe1)

    let gruppe2 = einkaufen.gruppeFinden("Getreideprodukte")
    console.debug("gruppe2: ", gruppe2)

    let gruppe3 = einkaufen.gruppeFinden("Milchprodukte")
    console.debug("gruppe3: ", gruppe3)

    let gruppe4 = einkaufen.gruppeFinden("Brot")
}

function main() {
    console.debug("[Lektion 7] ============================")
    teste_artikelAuflisten()
    teste_gruppeFinden()

}
main()
