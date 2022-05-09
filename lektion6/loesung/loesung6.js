/**
 * Lektion 6: Funktionen
 */

/**
 * Hier wächst das View-Model für unsere Einkaufsliste
 */

// Variablen für die Einkaufsliste
let gruppenListe = ["Obst & Gemüse", "Getreideprodukte", "Milchprodukte", "Hülsenfrüchte"]
let aktiveGruppe = null


/**
 * Diese Funktion sucht innerhalb der `gruppenListe` nach einem Element mit dem Namen `gruppenName`.
 * Wenn so ein Element in der Liste existiert, dann gibt sie dieses Element zurück.
 * Ansonsten gibt sie eine Warnmeldung aus und liefert null zurück.
 */
function gruppeFinden(gruppenName) {
    let gefundeneGruppe = gruppenListe.indexOf(gruppenName)
    if (gefundeneGruppe > -1) {
        return gruppenListe[gefundeneGruppe]
    } else {
        console.warn("Gruppe \"" + gruppenName + "\" nicht gefunden")
        return null
    }
}

/**
 * Diese Funktion fügt zur `gruppenListe` ein neues Element mit dem Namen `name` hinzu.
 * Die `aktiveGruppe` wird mit der neuen Gruppe gefüllt
 * und die neue Gruppe als Rückgabewert zurückgegeben.
 * Wenn eine Gruppe mit diesem `name` bereits existiert, dann wird eine Warnmeldung ausgegeben
 * und null zurückgegeben.
 */
function gruppeHinzufuegen(name) {
    const gleicheGruppen = gruppenListe.indexOf(name)
    // keine Gruppe mit diesem Namen vorhanden
    if (gleicheGruppen == -1) {
        let neueGruppe = name
        gruppenListe.push(neueGruppe)
        aktiveGruppe = neueGruppe
        console.debug("[App] Gruppe \"" + neueGruppe + "\" hinzugefügt")
        return neueGruppe
    } else {
        console.warn("Gruppe \"" + name + "\" existiert schon!")
    }
}

/**
 * Diese Funktion sucht eine vorhandene Gruppe mit dem Namen `alterName`
 * (mithilfe von `gruppeFinden()`) und benennt sie in `neuerName` um.
 * Danach gibt sie eine Erfolgsmeldung auf der Konsole aus.
 */
function gruppeUmbenennen(alterName, neuerName) {
    let vorhandeneGruppe = gruppeFinden(alterName)
    if (vorhandeneGruppe != null) {
        let index = gruppenListe.indexOf(alterName)
        gruppenListe[index] = neuerName
        console.debug("Gruppe von \"" + alterName + "\" nach \"" + neuerName + "\" umbenannt")
    }
}

/**
 * Diese Funktion sucht eine vorhandene Gruppe mit dem Namen `gruppenName`
 * (mithilfe von `gruppeFinden()`) und löscht sie aus der `gruppenListe`.
 * Anschließend gibt sie eine Erfolgsmeldung auf der Konsole aus.
 * Wenn keine Gruppe mit `gruppenName` gefunden wird,
 * gibt sie eine Warnmeldung auf der Konsole aus.
 */
function gruppeEntfernen(gruppenName) {
    let entfernGruppe = gruppeFinden(gruppenName)
    if (entfernGruppe != null) {
        let index = gruppenListe.indexOf(entfernGruppe)
        gruppenListe.splice(index, 1)
        console.debug("[App] Gruppe \"" + gruppenName + "\" entfernt")
    } else {
        console.warn("Gruppe \"" + gruppenName + "\" konnte NICHT entfernt werden")
    }
}

export {
    gruppenListe, aktiveGruppe,
    gruppeFinden, gruppeHinzufuegen, gruppeUmbenennen, gruppeEntfernen
}