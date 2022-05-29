/**
 * Lektion 6: Funktionen
 */

// Variablen für die Einkaufsliste
let gruppenListe = ["Obst & Gemüse", "Getreideprodukte", "Milchprodukte", "Hülsenfrüchte"]
let aktiveGruppe = 3


// TODO: Füge hier die Funktionen `gruppeFinden`, `gruppeHinzufuegen`, `gruppeUmbenennen` und `gruppeEntfernen` hinzu
function gruppeFinden(gruppenName) {

  let gruppenIndex = gruppenListe.indexOf(gruppenName)

  if (gruppenIndex > -1) {
    return gruppenName

  } else {
    console.warn("Gruppe", gruppenName, "nicht gefunden")
    return null
  }


}


function gruppeHinzufuegen(name) {
  let gleicheGruppe = gruppenListe.indexOf(name)
  let neueGruppe = name
  if (gleicheGruppe === -1) {
    gruppenListe.push(name)
    console.log("Gruppe", name, "wurde hinzugefuegt!")
    return (gleicheGruppe);
  } else {
    console.warn("Gruppe", gruppenName, "existiert bereits!")
    return null
  }
}

function gruppeUmbenennen(alterName, neuerName) {
  let vorhandeneGruppe = gruppeFinden(alterName)
  if (vorhandeneGruppe != null) {
    let index = gruppenListe.indexOf(alterName)
    gruppenListe.splice(index, 1, neuerName)

    console.debug("Gruppe wurde von", alterName, "nach", neuerName, "unbekannt")
  }

}

function gruppeEntfernen(gruppenName) {
  let entfernGruppe = gruppeFinden(gruppenName)
  if (entfernGruppe != null) {
    let index = gruppenListe.indexOf(gruppenName)
    gruppenListe.splice(index, 1)
    console.debug("Gruppe", gruppenName, "wurde entfernt")
  } else {
    console.debug("Gruppe", gruppenName, "konnte NICHT entfernt werden"
    )
  }


}


export {
  gruppenListe, aktiveGruppe,
  gruppeFinden, gruppeHinzufuegen, gruppeUmbenennen, gruppeEntfernen
}