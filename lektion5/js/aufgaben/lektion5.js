/**
 * Lektion 5: Schleifen
 */

/**
 * 1) Schreibe ein Array `artikelListe`, fülle es und geb es auf der Konsole mithilfe einer Schleife aus
 */
function artikelAuflisten () {
  // ToDo: füge ab hier deinen Code ein
  let artikelListe = ["Brokkoli", "Reis", "Streukäse"]
  for (let artikel of artikelListe) {
    console.debug("Artikel: ", artikel)
  }

}

/**
 * 2) Erstelle die Arrays `milchListe`, `gemüseListe` und `getreideListe`, fülle diese, füge sie der gruppenListe hinzu und
 * gebe sie auf der Konsole aus
 */
function allesAuflisten () {
  let gruppenListe = []

  let gemueseListe = ["Brokkoli", "Zwiebeln", "Salat"]
  let getreideListe = ["Reis", "Nudeln", "Quinoa"]
  let milchListe = ["Streukäse", "Sahne", "Joghurt"]


  gruppenListe.push(gemueseListe)

  gruppenListe.push(getreideListe)

  gruppenListe.push(milchListe)

  console.debug(gruppenListe.length)
  for (let i = 0; i < gruppenListe.length; i++) {
    console.debug("Gruppe #", i, gruppenListe[i])
  }
}

/**
 * 3) Erstelle ein befülltes Array `gemueseListe`, entferne diese Elemente aus dem Array und gebe es vor und nach dem Entfernen
 * auf der Konsole aus
 */
function artikelEntfernen () {

  let gemueseListe = ["Brokkoli", "Zwiebeln", "Salat"]
  let gruppenListe = []

  gruppenListe.push(gemueseListe)


  console.debug(gemueseListe)
  let abbruch = gemueseListe.length

  for (let i = 0; i < abbruch; i++) {
    gemueseListe.splice(0, 1)
    console.debug(gemueseListe)
  }
  console.debug(gemueseListe)
}

/**
 * 4) Schreibe die Sortieren-Funktion
 */
function sortieren () {
  let gruppenListe = []
  let gemueseListe = ["Brokkoli", "Zwiåebeln", "Salat"]
  let getreideListe = ["Reis", "Nudeln", "Quinoa"]
  let milchListe = ["Streukäse", "Sahne", "Joghurt"]
  gruppenListe.push(gemueseListe, getreideListe, milchListe)
  console.debug("Gruppenliste vorher")
  for (let i = 0; i < gruppenListe.length; i++) {
    console.debug(gruppenListe[i])
  }
  for (let artikelListe of gruppenListe) {
    artikelListe.sort()
  }
  gruppenListe.sort()
  console.debug("Gruppenliste nachher:", gruppenListe)
}

export {
  artikelAuflisten, allesAuflisten, artikelEntfernen, sortieren
}