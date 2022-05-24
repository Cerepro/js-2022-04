import React from 'react'
import GruppenTag from './components/GruppenTag'
import App from './model/Shopping'


class ShoppingList extends React.Component {
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
    let fantasy = App.gruppeHinzufuegen("Gemüse")
    let film1 = fantasy.artikelHinzufuegen("Brokkoli")
    film1.gekauft = true
    fantasy.artikelHinzufuegen("Blumenkohl")
    let scifi = App.gruppeHinzufuegen("Getreide Produkte")
    let film2 = scifi.artikelHinzufuegen("Vollkorn Nudeln")
    film2.gekauft = true
    scifi.artikelHinzufuegen("Reis")
    let dokus = App.gruppeHinzufuegen("Getränke")
    let film3 = dokus.artikelHinzufuegen("Wasser")
    film3.gekauft = true
    dokus.artikelHinzufuegen("Rot Wein lieblich")
  }

  einkaufenAufZuKlappen() {
    let neuerZustand = !this.state.einkaufenAufgeklappt
    this.setState({einkaufenAufgeklappt: neuerZustand})
  }

  erledigtAufZuKlappen() {
    // ToDo: fertig programmieren
    let neuerZustand = !this.state.erledigtAufgeklappt
    this.setState({erledigtAufgeklappt: neuerZustand})
  }

  render() {
    let nochZuKaufen = []
    if (this.state.einkaufenAufgeklappt ) {
      for (const gruppe of App.gruppenListe) {
        nochZuKaufen.push(<GruppenTag
          key={gruppe.id}
          gruppe={gruppe}
          gekauft={false}/>)
      }
    }


    let schonGekauft = []
    // ToDo: Bedingung  mit 'erledigtAufgeklappt' programmieren
    if (this.state.erledigtAufgeklappt ) {
      for (const gruppe of App.gruppenListe) {
        schonGekauft.push(<GruppenTag
          key={gruppe.id}
          gruppe={gruppe}
          gekauft={true}/>)
      }
    }
    return (
      <div id="container">
        {/* ToDo: füge hier drunter Deinen HTML-Code ein */}
        <header>
          <h1>Einkaufsliste</h1>
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
              <i onClick={() => this.erledigtAufZuKlappen()} className="material-icons">
                {this.state.erledigtAufgeklappt ? `expand_more` : `expand_less`}
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

export default ShoppingList
