import React from 'react'
import Modell from '../model/Shopping'

class GruppenDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gruppenListe: this.props.gruppenListe
    }
  }

  gruppeHinzufuegen() {
    // ToDo: implementieren
  }

  gruppeEntfernen(name) {
    // ToDo: implementieren
  }

  render() {
    const gruppenListe = []
    for (let gruppe of this.state.gruppenListe) {
      gruppenListe.push(
        <dt className="inaktiv" key={gruppe.id}>
          <span>{gruppe.name}</span>
          <i className="material-icons">drive_file_rename_outline</i>
          <i className="material-icons"
             onClick={() => this.gruppeEntfernen(gruppe.name)}>delete</i>
        </dt>
      )
    }

    return (
      <div className="mdc-dialog mdc-dialog--open">
        <div className="mdc-dialog__container">
          <div className="mdc-dialog__surface"
               role="alertdialog"
               aria-modal="true"
               aria-labelledby="my-dialog-title"
               aria-describedby="my-dialog-content">
            <h2 className="mdc-dialog__title" id="my-dialog-title">Gruppen bearbeiten</h2>

            <div className="mdc-dialog__content" id="my-dialog-content">
              <label
                className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon mdc-text-field--no-label">
                <span className="mdc-text-field__ripple"></span>
                <input className="mdc-text-field__input" type="search"
                       id="eingabe" placeholder="Gruppe hinzufügen"
                       onKeyPress={e => (e.key == 'Enter') ? this.gruppeHinzufuegen() : ''}/>
                <span className="mdc-line-ripple"></span>
                <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing"
                   tabIndex="0" role="button"
                   onClick={() => this.gruppeHinzufuegen()}>add_circle</i>
              </label>

              <dl className="mdc-deprecated-list">
                {gruppenListe}
              </dl>
            </div>
            <div className="mdc-dialog__actions">
              <button type="button" className="mdc-button mdc-dialog__button"
                      onClick={this.props.onDialogClose}>
                <div className="mdc-button__ripple"></div>
                <span className="mdc-button__label">Schließen</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mdc-dialog__scrim"></div>
      </div>
    )
  }
}

export default GruppenDialog
