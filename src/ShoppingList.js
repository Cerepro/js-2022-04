import React from 'react'
import GruppenTag from './components/GruppenTag'

class ShoppingList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      //füge hier deinen HTML-Code ein
      <div id="container">
        {/* ToDo: füge hier drunter Deinen HTML-Code ein */}
        Füge hier Deinen HTML-Code ein<br/>
        <GruppenTag/>
      </div>
    )
  }
}

export default ShoppingList
