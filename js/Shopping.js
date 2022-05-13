import Gruppe from "./src/model/Gruppe.js";

class Shopping {
  gruppenListe = []
  aktiveGruppe = null
  meldungenAusgeben = true

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

const App = new Shopping()
let früchte = App.gruppeHinzufuegen("Früchte")
console.debug(früchte)
let früchte2 = App.gruppeHinzufuegen("Früchte")

let früchteGruppe = App.gruppeFinden("früchte")
console.debug(früchteGruppe)


export default App