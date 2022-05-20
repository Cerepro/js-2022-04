import React from 'react'

class ArtikelTag extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const artikel = this.props.artikel
    let artikelName = artikel.name
    if (artikel.gekauft) {
      artikelName = <s>{artikel.name}</s>
    }

    return (
      <React.Fragment>
        {/* ToDo: füge hier drunter Deinen HTML-Code ein */}
        <dd><label>
          <input type="checkbox"/>
          {artikelName}
        </label></dd>
      </React.Fragment>
    )
  }
}

export default ArtikelTag
