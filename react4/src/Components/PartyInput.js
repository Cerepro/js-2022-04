import React from "react";

class PartyInput extends React.Component{
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onButtonClick = this.onButtonClick.bind(this)
        this.state = {
            input: ''
        }
    }

    onButtonClick(){
        console.log("Button wurde gedrückt")
        /* Aufgabe 4
         * ToDo: Führe die Funktion handleInput() aus, welche über die Props in diese Klasse übergeben wurde.
         *  Benutze als Argument das input-Attribut des States (wie in Zeile 8 gespeichert).
         */
    }

    onChange(event){
        this.setState({input: event.target.value})
    }

    render() {
        return (
            /* Aufgabe 3
             * ToDo: Schreibe für den unteren Button ein onClick-Event,
             *  sodass die Funktion onButtonClick ausgeführt wird.
             */
            <div>
                <input placeholder={this.props.headline} onChange={
                    (event) => this.onChange(event)}/>
                <button>Change Party Name</button>
            </div>
        )
    }




}

export default PartyInput