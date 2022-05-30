import React from "react"
import PartyButton from "./Components/PartyButton";
import PartyInput from "./Components/PartyInput";
import PartyLock from "./Components/PartyLock";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.handleInput = this.handleInput.bind(this)
        this.handleColor = this.handleColor.bind(this)
        this.handleLock = this.handleLock.bind(this)
        this.state = {
            color: 'black',
            headline: 'Halloween',
            partyIsLocked: false
        }
    }

    handleInput(newPartyName){
        if(!this.state.partyIsLocked) {
            this.setState({headline: newPartyName})
        }
    }

    handleColor(color){
        this.setState({color: color})
    }

    handleLock(){
        this.setState({partyIsLocked: !this.state.partyIsLocked})
    }

    render() {
        return (
            <div style={{color: this.state.color}}>
                <h1>React Übung 4: Event Handling</h1>
                <h2>Nächste Party: {this.state.headline}</h2>
                <PartyButton color={this.handleColor}/>
                <PartyInput headline={this.state.headline} handleInput={this.handleInput}/>
                <PartyLock handleLock={this.handleLock} locked={this.state.partyIsLocked}/>
            </div>
        )
    }
}

export default App;
