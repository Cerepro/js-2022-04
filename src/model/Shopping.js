import Gruppe from './Gruppe.js'

/**
 * Diese Klasse steuert das Modell der App
 *
 * @property {Gruppe[]} gruppenListe      - enthält die Artikelgruppen
 * @property {Gruppe}   aktiveGruppe      - enthält die aktuell ausgewählte Gruppe
 * @property {boolean}  meldungenAusgeben - steuert, ob eine Meldung ausgegeben werden soll oder nicht
*/
class Shopping {
  gruppenListe = []
  aktiveGruppe = null
  meldungenAusgeben = true

  /**
   * Sucht eine Gruppe nach ihrem Namen und liefert sie als Objekt zurück
   * @param {String} name - Name der gesuchten Gruppe
   * @param {Boolean} meldungAusgeben - steuert, ob eine Meldung ausgegeben wird
   * @returns {Gruppe|null} gefundeneGruppe - die gefundene Gruppe; `null`, wenn nichts gefunden wurde
   */
  gruppeFinden(suchName, meldungAusgeben) {
    for (let gruppe of this.gruppenListe) {
      if (gruppe.name == suchName) {
        return gruppe
      }
    }
    // nichts gefunden, meldung ausgeben
    if (meldungAusgeben) {
      this.informieren("[App] Gruppe \"" + name + "\" nicht gefunden", true)
    }
    return null
  }

  /**
   * Fügt eine Gruppe in der Gruppenliste hinzu
   * @param {String} name - Name der neuen Gruppe
   * @returns {Gruppe} neueGruppe - die neu hinzugefügte Gruppe
   */
  gruppeHinzufuegen(name) {
    // gruppeFinden
    let vorhandeneGruppe = this.gruppeFinden(name)
    if (!vorhandeneGruppe) {
      let neueGruppe = new Gruppe(name, this.gruppenListe.length)
      this.gruppenListe.push(neueGruppe)
      this.aktiveGruppe = neueGruppe
      this.informieren("[App] Gruppe \"" + name + "\" hinzugefügt")
      return neueGruppe
    } else {
      this.informieren("[App] Gruppe \"" + name + "\" existiert schon!", true)
    }
  }

  /**
   * Entfernt die Gruppe mit dem `name`
   * @param {String} name - Name der zu löschenden Gruppe
   */
  gruppeEntfernen(name) {
    // gruppe 'name' finden
    let loeschGruppe = this.gruppeFinden(name)
    if (loeschGruppe) {
      // wenn gefunden, dann index ermitteln
      let index = this.gruppenListe.indexOf(loeschGruppe)
      // mit splice aus der gruppenListe löschen
      this.gruppenListe.splice(index, 1)
      // informieren über erfolg
      this.informieren("[App] Gruppe \"" + name + "\" entfernt"
      )
    } else {
      this.informieren("[App] Gruppe \"" + name + "\" konnte NICHT entfernt werden!", true)
    }
    // ansonsten warnung ausgeben
  }

    /**
   * Benennt die Gruppe `alterName` um
   * @param {String} alterName - Name der umzubenennenden Gruppe
   * @param {String} neuerName - der neue Name der Gruppe
   */
  gruppeUmbenennen(alterName, neuerName) {
    // suchGruppe finden
    let suchGruppe = this.gruppeFinden(alterName, true)
    // wenn gefunden, dann suchGruppe umbenenen
    if (suchGruppe) {
      suchGruppe.name = neuerName
      // erfolgsmedung ausgeben
      this.informieren("[App] Gruppe \"" + alterName + "\" umbenannt in \"" + neuerName + "\"")
    }
  }

  /**
   * Gibt die Gruppen mit Artikeln auf der Konsole aus
   */
  allesAuflisten() {
    console.debug("Einkaufsliste")
    console.debug("--------------------")
    for (const gruppe of this.gruppenListe) {
      console.debug("[" + gruppe.name + "]")
      gruppe.artikelAuflisten(false)
    }
  }

  /**
   * Gibt eine Meldung aus und speichert den aktuellen Zustand im LocalStorage
   * @param {String} nachricht - die auszugebende Nachricht
   * @param {boolean} istWarnung - steuert, ob die {@link nachricht} als Warnung ausgegeben wird
   */
  informieren(nachricht, istWarnung = false) {
    if (this.meldungenAusgeben) {
      if (istWarnung) {
        console.log(nachricht)
      } else {
        console.debug(nachricht)
        // Todo: Speichern
      }
    }
  }
}

const Modell = new Shopping()

export default Modell
