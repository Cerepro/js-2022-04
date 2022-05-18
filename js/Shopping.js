import Gruppe from "./Gruppe.js";
import {gruppeFinden, gruppenListe} from "../lektion6/loesung/loesung6.js";

class Shopping {
  gruppenListe
  aktiveGruppe
  meldungenAusgeben

  constructor() {
    this.gruppenListe = []
    this.aktiveGruppe = null
    this.meldungenAusgeben = true
  }

  gruppeFinden(suchName, meldungenAusgeben) {
    for (let gruppe of this.gruppenListe) {
      if (gruppe.name == suchName) {
        return gruppe
      }
    }
    console.debug("Gruppe", suchName, "nicht gefunden")
    return null
  }

  gruppeHinzufuegen(name) {
    // gruppeFinden
    let vorhandeneGruppe = this.gruppeFinden(name)
    if (vorhandeneGruppe == null) {
      let neueGruppe = new Gruppe(name, this.gruppenListe.length)
      this.gruppenListe.push(neueGruppe)
      this.informieren("[App Gruppe\"" + name + "\"angelegt]")
      return neueGruppe
    } else {
      this.informieren("[App Gruppe\"" + name + "\"schon vorhanden]")
    }
  }
  gruppeUmbenennen(alterName, neuerName) {
    let vorhandeneGruppe = gruppeFinden(alterName)
    if (vorhandeneGruppe != null) {
      let index = gruppenListe.indexOf(alterName)
      gruppenListe[index] = neuerName
      console.debug("Gruppe von \"" + alterName + "\" nach \"" + neuerName + "\" umbenannt")
    }
  }


  gruppeEntfernen(gruppenName) {
    let entfernGruppe = gruppeFinden(gruppenName)
    if (entfernGruppe != null) {
      let index = gruppenListe.indexOf(entfernGruppe)
      this.gruppenListe.splice(index, 1)
      console.debug("[App] Gruppe \"" + gruppenName + "\" entfernt")
    } else {
      console.warn("Gruppe \"" + gruppenName + "\" konnte NICHT entfernt werden")
    }
  }
  informieren(nachricht, istWarnung = false) {
    if (this.meldungenAusgeben) {
      if (istWarnung) {
        console.log(nachricht)
      } else {
        console.debug(nachricht)
        // ToDo: Speichern
      }
    }
  }
}

export default Shopping
