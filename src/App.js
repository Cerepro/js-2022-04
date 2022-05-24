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
    let fantasy = Modell.gruppeHinzufuegen("Fantasy")
    let film1 = fantasy.artikelHinzufuegen("Der Dunkle Kristall")
    film1.gekauft = true
    fantasy.artikelHinzufuegen("Die Barbaren")
    let scifi = Modell.gruppeHinzufuegen("Science Fiction")
    let film2 = scifi.artikelHinzufuegen("Alita - Battle Angel")
    film2.gekauft = true
    scifi.artikelHinzufuegen("Mad Max - Fury Road")
    let dokus = Modell.gruppeHinzufuegen("Dokumentationen")
    let film3 = dokus.artikelHinzufuegen("Endgame - Blaupause für die Globale Versklavung")
    film3.gekauft = true
    dokus.artikelHinzufuegen("Die Kabale")
  }

  einkaufenAufZuKlappen() {
    let neuerZustand = !this.state.einkaufenAufgeklappt
    this.setState({einkaufenAufgeklappt: neuerZustand})
  }

  erledigtAufZuKlappen() {
    // ToDo: fertig programmieren
  }

  // ToDo: diese Methode als 'checkHandler' an GruppenTag und ArtikelTag durchreichen
  artikelChecken = (artikel) => {
    // artikel.gekauft 'umpolen'
    // 'aktion' abhängig von 'artikel.gekauft' auf "erledigt" oder "reaktiviert" setzen
    // App.informieren mit 'aktion'
    // 'state' aktualisieren
  }

  setAktiveGruppe(gruppe) {
    // ToDo:
  }

  render() {
    let nochZuKaufen = []
    if (this.state.einkaufenAufgeklappt == true) {
      for (const gruppe of Modell.gruppenListe) {
        nochZuKaufen.push(<GruppenTag
          key={gruppe.id}
          gruppe={gruppe}
          gekauft={false}
          aktiveGruppeHandler={() => this.setAktiveGruppe(gruppe)}/>)
      }
    }


    let schonGekauft = []
    // ToDo: Bedingung  mit 'erledigtAufgeklappt' programmieren
    for (const gruppe of Modell.gruppenListe) {
      schonGekauft.push(<GruppenTag
        key={gruppe.id}
        gruppe={gruppe}
        gekauft={true}/>)
    }

    return (
      <div id="container">
        {/* ToDo: füge hier drunter Deinen HTML-Code ein */}
        <header>
          <h1>Watchlist</h1>
          <label
            className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon mdc-text-field--no-label">
            <span className="mdc-text-field__ripple"></span>
            <input className="mdc-text-field__input" type="search"
                   id="artikelEingabe" placeholder="Artikel hinzufügen"/>
            <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing"
               role="button">add_circle</i>
            <span className="mdc-line-ripple"></span>
          </label>
        </header>
        <hr/>

        <main>
          <section>
            <h2>Noch zu kaufen
              <i onClick={() => this.einkaufenAufZuKlappen()} className="material-icons">
                {this.state.einkaufenAufgeklappt ? 'expand_more' : 'expand_less'}
              </i>
            </h2>
            <dl>
              {nochZuKaufen}
            </dl>
          </section>
          <hr/>
          <section>
            <h2>Schon gekauft
              {/* ToDo: füge hier drunter Deinen Code ein */}
              <i className="material-icons">
                expand_less
              </i>
            </h2>
            <dl>
              {schonGekauft}
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
