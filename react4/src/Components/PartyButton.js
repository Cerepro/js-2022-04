import React from "react";

class PartyButton extends React.Component{
    constructor(props) {
        super(props)
        this.startParty = this.startParty.bind(this)
    }

    render() {
        return (
            /*  Aufgabe 2
             * ToDo: Schreibe ein onClick Event für diesen Button, sodass die Funktion startParty() ausgeführt wird.
             */
            <div>
                 <button>START PARTY</button>
            </div>
        )
    }

    startParty() {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                document.body.style.backgroundColor = this.randomColor()
                this.props.color(this.randomColor())
            }, 500 * i)
        }
        setTimeout(() => {
            document.body.style.backgroundColor = "white"
            this.props.color("black")
        }, 5000)
    }

    randomColor(){
        return "#" + Math.floor(Math.random() * 16777215).toString(16)
    }
}

export default PartyButton