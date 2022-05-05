/**
 * Lektion 5: Schleifen
 */

/**
 * Array `artikelListe` ausgeben
 */
function artikelAuflisten() {
    // ToDo: füge ab hier deinen Code ein
    let artikelListe = ["Brokkoli", "Reis", "Streukäse"]

    for (let i = 0; i < artikelListe.length; i++) {
        console.debug(artikelListe[i])
    }
}

/**
 * Gibt Array `gruppenListe` auf der Konsole aus
 */
function allesAuflisten() {
// ToDo: füge ab hier deinen Code ein
    let gruppenListe = []
    let gemueseListe = ["Brokkoli", "Zwiebeln", "Salat"]
    gruppenListe.push(gemueseListe)

    let getreideListe = ["Reis", "Nudeln", "Quinoa"]
    gruppenListe.push(getreideListe)

    let milchListe = ["Streukäse", "Sahne", "Joghurt"]
    gruppenListe.push(milchListe)

    for (let i = 0; i < gruppenListe.length; i++) {
        console.debug("Gruppe " + i + ": " + gruppenListe[i])
    }
}

/**
 * Entfernt mitHilfe von `pop()` alle Elemente in einem Array und gibt es bevor und nachher auf der Konsole aus
 */
function artikelEntfernen() {
    // ToDo: füge ab hier deinen Code ein
    let gemueseListe = ["Brokkoli", "Zwiebeln", "Salat"]

    console.debug("gemueseListe vorher: ", gemueseListe)
    for (let i = gemueseListe.length; i > 0 ; i--) {
        gemueseListe.pop()
    }
    console.debug("gemueseListe nachher: ", gemueseListe)
}

/**
 * Entfernt mitHilfe von `pop()` alle Elemente in einem Array und gibt es bevor und nachher auf der Konsole aus
 */
function sortieren() {
// ToDo: füge ab hier deinen Code ein
    let gruppenListe = []
    let gemueseListe = ["Brokkoli", "Zwiebeln", "Salat"]
    gruppenListe.push(gemueseListe)

    let getreideListe = ["Reis", "Nudeln", "Quinoa"]
    gruppenListe.push(getreideListe)

    let milchListe = ["Streukäse", "Sahne", "Joghurt"]
    gruppenListe.push(milchListe)

    console.debug("gruppenListe vorher: ", gruppenListe)
    for (let gruppe of gruppenListe) {
        gruppe.sort()
    }
    gruppenListe.sort()
    console.debug("gruppenListe nachher: ", gruppenListe)
}






export {
    artikelAuflisten, allesAuflisten, artikelEntfernen, sortieren
}