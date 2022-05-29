import React from 'react'
import GruppenTag from './components/GruppenTag'
import Modell from './model/Shopping'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.initialisieren()
    this.state = {
      aktiveGruppe: null,
      showGruppenDialog: false,
      showSortierDialog: false,
      einkaufenAufgeklappt: true,
      erledigtAufgeklappt: false
    }
  }

  initialisieren() {
    let staffel1 = Modell.gruppeHinzufuegen("Staffel1")
    let film1 = staffel1.artikelHinzufuegen("Mobiles Armee Chirurgie Hospital – Pilot\t")
    film1.gekauft = true
    staffel1.artikelHinzufuegen("Angebot, Nachfrage und Prestige")
    staffel1.artikelHinzufuegen("Das total verrückte Feldlazarett")
    staffel1.artikelHinzufuegen("Über alles geliebte Sklavin")
    staffel1.artikelHinzufuegen("Kennen Sie „Chirurgen in Uniform“?")
    staffel1.artikelHinzufuegen("Hilfe, einen Psychiater bitte!")
    staffel1.artikelHinzufuegen("Mein lieber, lieber John")
    staffel1.artikelHinzufuegen("Ach Henry, komm doch wieder")
    staffel1.artikelHinzufuegen("Der Dieb will nur das Beste")
    staffel1.artikelHinzufuegen("Eine richtige, schöne Gelbsucht")
    staffel1.artikelHinzufuegen("Lieber Papa, mir geht es gut")
    staffel1.artikelHinzufuegen("Ein Aufstand für Edwina")
    staffel1.artikelHinzufuegen("Noch so eine Liebesgeschichte")
    staffel1.artikelHinzufuegen("Nun danket alle Tuttle")
    staffel1.artikelHinzufuegen("Nur Leben in die Bude!")
    staffel1.artikelHinzufuegen("Hörst du die Kugeln? ")
    staffel1.artikelHinzufuegen("Nur Leben in die Bude!")
    staffel1.artikelHinzufuegen("Nur Leben in die Bude!")
    staffel1.artikelHinzufuegen("… und alles splitternackt")
    staffel1.artikelHinzufuegen("Jeder friert für sich allein")
    staffel1.artikelHinzufuegen("Ein Blindgänger hat’s in sich")
    staffel1.artikelHinzufuegen("Hier, bitte mal absaugen")
    staffel1.artikelHinzufuegen("Gier, Angst und noch mal Gier")
    staffel1.artikelHinzufuegen("Unter der Hand gesagt")
    staffel1.artikelHinzufuegen("Für manches nicht gut genug")

    let staffel2 = Modell.gruppeHinzufuegen("Staffel2")
    let film2 = staffel2.artikelHinzufuegen("Zerstritten stehen wir zusammen")
    film2.gekauft = true
    staffel2.artikelHinzufuegen("Das ist Fünf-Uhr-Charlie")

    let staffel3 = Modell.gruppeHinzufuegen("Staffel3")
    let film3 = staffel3.artikelHinzufuegen("Bauch rein - Brust raus")
    film3.gekauft = true
    staffel3.artikelHinzufuegen("Meuterei im Billigfilm")
  }

  einkaufenAufZuKlappen() {
    let neuerZustand = !this.state.einkaufenAufgeklappt
    this.setState({einkaufenAufgeklappt: neuerZustand})
  }

  erledigtAufZuKlappen() {
    this.setState({erledigtAufgeklappt: !this.state.erledigtAufgeklappt})
  }

  artikelChecken = (artikel) => {
    // ToDo: implementiere diese Methode
    // artikel.gekauft 'umpolen'
    artikel.gekauft = !artikel.gekauft
    // 'aktion' abhängig von 'artikel.gekauft' auf "erledigt" oder "reaktiviert" setzen
    let aktion
    if (artikel.gekauft == true){
      aktion = "erledigt"
    }else {
      aktion = "unerledigt"
    }
    // App.informieren mit 'aktion'
    Modell.informieren(`${artikel.name}"ist" ${aktion}`)
    // 'state' aktualisieren
    this.setState(this.state)
  }

  artikelHinzufuegen() {
    // ToDo: implementiere diese Methode
    let eingabe =document.getElementById("artikelEingabe")
    if (eingabe.value.trim().length > 0) {
      Modell.aktiveGruppe.artikelHinzufuegen(eingabe.value)
      this.setState(this.state)
    }
    eingabe.value = ""
    eingabe.focus()
  }

  setAktiveGruppe(gruppe) {
    Modell.aktiveGruppe = gruppe
    Modell.informieren("[App] Gruppe \"" + gruppe.name + "\" ist nun aktiv")
    this.setState({aktiveGruppe: Modell.aktiveGruppe})
  }

  render() {
    let nochNichtGesehen = []
    if (this.state.einkaufenAufgeklappt == true) {
      for (const gruppe of Modell.gruppenListe) {
        nochNichtGesehen.push(<GruppenTag
          key={gruppe.id}
          gruppe={gruppe}
          gekauft={false}
          aktiv={gruppe == this.state.aktiveGruppe}
          aktiveGruppeHandler={() => this.setAktiveGruppe(gruppe)}
          checkHandler={this.artikelChecken}/>)
      }
    }


    let schonGesehen = []
    if (this.state.erledigtAufgeklappt) {
      for (const gruppe of Modell.gruppenListe) {
        schonGesehen.push(<GruppenTag
          key={gruppe.id}
          gruppe={gruppe}
          gekauft={true}
          aktiveGruppeHandler={() => this.setAktiveGruppe(gruppe)}
          checkHandler={this.artikelChecken}/>)
      }
    }

    return (
      <div id="container">
        <header>
          <h1>Watchlist</h1>
          <label
            className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon mdc-text-field--no-label">
            <span className="mdc-text-field__ripple"></span>
            <input className="mdc-text-field__input" type="search"
                   id="artikelEingabe" placeholder="Artikel hinzufügen"
                   onKeyPress={e => (e.key == 'Enter') ? this.artikelHinzufuegen() : ''}/>
            <span className="mdc-line-ripple"></span>
            <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing"
               tabIndex="0" role="button"
               onClick={() => this.artikelHinzufuegen()}>add_circle</i>
          </label>

        </header>
        <hr/>

        <main>
          <section>
            <h2>Noch nicht gesehen
              <i onClick={() => this.einkaufenAufZuKlappen()} className="material-icons">
                {this.state.einkaufenAufgeklappt ? 'expand_more' : 'expand_less'}
              </i>
            </h2>
            <dl>
              {nochNichtGesehen}
            </dl>
          </section>
          <hr/>
          <section>
            <h2>Schon gesehen
              <i onClick={() => this.erledigtAufZuKlappen()} className="material-icons">
                {this.state.erledigtAufgeklappt ? 'expand_more' : 'expand_less'}
              </i>
            </h2>
            <dl>
              {schonGesehen}
            </dl>
          </section>
        </main>
        <hr/>

        <footer>
          <button className="mdc-button mdc-button--raised">
            <span className="material-icons">bookmark_add</span>
            <span className="mdc-button__ripple"></span> Gruppen
          </button>
          <button className="mdc-button mdc-button--raised">
            <span className="material-icons">sort</span>
            <span className="mdc-button__ripple"></span> Sort
          </button>
          <button className="mdc-button mdc-button--raised">
            <span className="material-icons">settings</span>
            <span className="mdc-button__ripple"></span> Setup
          </button>
        </footer>
      </div>
    )
  }
}

export default App
