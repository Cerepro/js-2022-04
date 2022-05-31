import React from 'react'

class GruppeBearbeitenTag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      newName: this.props.gruppe.name
    }
  }

  handleChange(event) {
    // ToDo: implementieren
  }

  gruppeUmbenennen(gruppe, event) {
    if (event && event.key != "Enter") return
    // ToDo: implementieren
  }

  render() {
    const gruppe = this.props.gruppe

    const viewTemplate = (
      <dt>
        <span>{gruppe.name}</span>
        <i className="material-icons"
           onClick={() => this.setState({isEditing: true})}>
          drive_file_rename_outline</i>
        <i className="material-icons"
           onClick={this.props.entfernenHandler}>delete</i>
      </dt>
    )
    const editTemplate = (
      <dt>
        <input type="search" value={this.state.newName} autoFocus={true}
               onChange={event => this.handleChange(event)}
               onKeyPress={event => this.gruppeUmbenennen(gruppe, event)}/>
        <i className="material-icons"
           onClick={() => this.setState({isEditing: false})}>cancel </i>
        <i className="material-icons"
           onClick={() => this.gruppeUmbenennen(gruppe)}>check_circle </i>
      </dt>
    )

    return (
      this.state.isEditing
        ? editTemplate
        : viewTemplate
    )
  }
}

export default GruppeBearbeitenTag
