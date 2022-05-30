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
      ""
    )
    const editTemplate = (
      ""
    )

    return (
      this.state.isEditing
        ? editTemplate
        : viewTemplate
    )
  }
}

export default GruppeBearbeitenTag
