import React from 'react'
import ArtikelTag from './ArtikelTag'

class GruppenTag extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        {/* ToDo: füge hier drunter Deinen HTML-Code ein */}
        Füge hier Deinen GruppenTag-Code ein<br/>
        <ArtikelTag/>
        <ArtikelTag/>
        <ArtikelTag/>
      </React.Fragment>
    )
  }
}

export default GruppenTag
