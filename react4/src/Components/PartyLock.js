import React from "react";

class PartyLock extends React.Component{
    label = ""
    constructor(props) {
        super(props)
         this.label = this.props.locked ? "Name is locked" : "Name is not locked"
    }

    render() {
        return (
            /*  Aufgabe 5
             * ToDo: Schreibe ein onChange-Event für diesen Button, sodass die Funktion handleLock ausgeführt wird.
             *  Diese wurde als Prop übergeben.
             */
            <div>
                <label>{this.props.locked ? "Party name is locked" : "Party name is not locked"}
                 <input type={"checkbox"}/>
                </label>
            </div>
        )
    }
}

export default PartyLock