import React from 'react'
import GruppenTag from './components/GruppenTag'

class ShoppingList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.debug(App.gruppenListe)
    let filmArray = []
    for (const gruppe of App.gruppenliste) {
      filmArray.push(<)

    }
    return (
      //füge hier deinen HTML-Code ein
      <div id="container">
        {/* ToDo: füge hier drunter Deinen HTML-Code ein */}

        <header>
          <h1>Einkaufsliste 2</h1>
          <nav>
            <input type="text" placeholder="Artikel hinzufügen"/>
            <button className="material-icons" >add_circle</button>
          </nav>
        </header>

        <hr/>

        <main>
          <section>
            <h2>Einkaufen
              <i className="material-icons">expand_less</i>
            </h2>
            <dl>
              <dt>Obst & Gemüse
                <i className="material-icons">expand_less</i>
              </dt>
              <dd><label><input type="checkbox"/> Brokkoli</label></dd>
              <dt >Getreideprodukte
                <i className="material-icons">expand_less</i>
              </dt>
              <dd><label><input type="checkbox"/> Reis</label></dd>
              <dt >Milchprodukte
                <i className="material-icons">expand_less</i>
              </dt>
            </dl>
          </section>
          <hr/>
          <section>
            <h2>Erledigt
              <i className="material-icons">expand_less</i>
            </h2>
            <dl>
              <dt >Hülsenfrüchte
                <i className="material-icons">expand_less</i>
              </dt>
              <dd><label><input type="checkbox"/> <s>Tofu</s></label></dd>
            </dl>
          </section>
          <hr/>
        </main>
        <footer>
          <nav>
            <button>
              <span className="material-icons">bookmark_add</span> Gruppen
            </button>
            <button>
              <span className="material-icons">sort</span> Sortieren
            </button>
            <button>
              <span className="material-icons">settings</span> Einstellungen
            </button>
          </nav>
        </footer>
      </div>
    )
  }
}

export default ShoppingList