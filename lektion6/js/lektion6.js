/**
 * Lektion 6: Funktionen
 */

// Variablen für die Einkaufsliste
let gruppenListe = ["Obst & Gemüse", "Getreideprodukte", "Milchprodukte", "Hülsenfrüchte"]
let aktiveGruppe = 3


// TODO: Füge hier die Funktionen `gruppeFinden`, `gruppeHinzufuegen`, `gruppeUmbenennen` und `gruppeEntfernen` hinzu
function gruppeFinden(gruppenName){
    let gruppenIndex = gruppenListe.indexOf(gruppenName)
    if (gruppenIndex>=0){
        return gruppenName
    }
    else{
        console.debug("Gruppe \"" +gruppenName+"\" nicht gefunden")
        return null
    }

}
function gruppeHinzufuegen(gruppenName){
    let gruppenIndex = gruppenListe.indexOf(gruppenName)
    console.debug(gruppenIndex)
}
function gruppeUmbenennen(gruppenName){
    let gruppenIndex = gruppenListe.indexOf(gruppenName)
    console.debug(gruppenIndex)
}
function gruppeEntfernen(gruppenName){
    let gruppenIndex = gruppenListe.indexOf(gruppenName)
    console.debug(gruppenIndex)
}


export {
    gruppenListe, aktiveGruppe,
    gruppeFinden, gruppeHinzufuegen, gruppeUmbenennen, gruppeEntfernen
}