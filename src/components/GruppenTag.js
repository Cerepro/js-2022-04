import React from 'react'
import ArtikelTag from './ArtikelTag'

class GruppenTag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aufgeklappt: true
    }
  }

  artikelEntfernen(name) {
    this.props.gruppe.artikelEntfernen(name)
    // this.props.aktiveGruppeHandler(this.props.gruppe)
    this.forceUpdate()
  }

  aufZuKlappen() {
    this.setState({aufgeklappt: !this.state.aufgeklappt})
  }

  render() {
    const gruppe = this.props.gruppe

    let gruppenHeader = ""
    if (this.props.gekauft == false) {
      gruppenHeader = (
        <dt className={this.props.aktiv ? "aktiv" : "inaktiv"}
            onClick={() => this.props.aktiveGruppeHandler(gruppe)}>
          <span>{gruppe.name}</span>
          <i className="material-icons"
             onClick={() => this.aufZuKlappen()}>
            {this.state.aufgeklappt ? 'expand_more' : 'expand_less'}
          </i>
        </dt>)
    }

    let artikelArray = []
    if (this.state.aufgeklappt) {
      for (const artikel of gruppe.artikelListe) {
        if (artikel.gekauft == this.props.gekauft) {
          artikelArray.push(
            <ArtikelTag artikel={artikel} key={artikel.id}
                        checkHandler={this.props.checkHandler}
                        deleteHandler={() => this.artikelEntfernen(artikel.name)}/>)
        }
      }
    }

    return (
      <React.Fragment>
        {gruppenHeader}
        {artikelArray}
      </React.Fragment>
    )
  }
}

export default GruppenTag
