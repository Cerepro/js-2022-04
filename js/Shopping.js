class Shopping {
  gruppenListe = []
  aktiveGruppe = null
  meldungenAusgeben = true
  einkaufenAufgeklappt = true
  erledigtAufgeklappt = false
  STORAGE_KEY = "einkauflisteDaten"
  SORTIERUNGEN = {
    "Eigene": this.sortiereIndex, "Aufsteigend": this.sortiereAufsteigend, "Absteigend": this.sortiereAbsteigend
  }
  /**
   * Lektion 6: Funktionen
   */

// TODO: Füge hier die Funktionen `gruppeFinden`, `gruppeHinzufuegen`, `gruppeUmbenennen` und `gruppeEntfernen` hinzu

  gruppeFinden(gruppeName) {
    let gefundeneGruppe = this.gruppenListe.indexOf(gruppeName)
    if (gefundeneGruppe > -1) {
      return this.gruppenListe[gefundeneGruppe]
    } else {
      console.warn("Gruppe \"" + gruppeName + "\" nicht gefunden")
      return null
    }
  }
  gruppeHinzufuegen(name) {
    const gleicheGruppen = this.gruppenListe.indexOf(name)
    // keine Gruppe mit diesem Namen vorhanden
    if (gleicheGruppen == -1) {
      let neueGruppe = name
      this.gruppenListe.push(neueGruppe)
      // aktiveGruppe = neueGruppe
      console.debug("[App] Gruppe \"" + neueGruppe + "\" hinzugefügt")
      return neueGruppe
    } else {
      console.warn("Gruppe \"" + name + "\" existiert schon!")
    }
  }
  gruppeUmbenennen(alterName, neuerName) {
    let vorhandeneGruppe = gruppeFinden(alterName)
    if (vorhandeneGruppe != null) {
      let index = this.gruppenListe.indexOf(alterName)
      this.gruppenListe[index] = neuerName
      console.debug("Gruppe von \"" + alterName + "\" nach \"" + neuerName + "\" umbenannt")
    }
  }
  gruppeEntfernen(gruppenName) {
    let entfernGruppe = gruppeFinden(gruppenName)
    if (entfernGruppe != null) {
      let index = this.gruppenListe.indexOf(entfernGruppe)
      this.gruppenListe.splice(index, 1)
      console.debug("[App] Gruppe \"" + gruppenName + "\" entfernt")
    } else {
      console.warn("Gruppe \"" + gruppenName + "\" konnte NICHT entfernt werden")
    }

  }
}

// const App = Shopping()
// export {App}

export {Shopping}