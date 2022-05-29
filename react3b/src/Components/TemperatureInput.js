import React from 'react';

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        /* ToDO: Verwende hier die props, um den beiden Konstanten einen von den props abhängenden
            Wert zu geben */

        const temperature = this.props.temperature
        const scale = this.props.scale
        return (
            <fieldset>
                <legend>Enter temperature in {scale}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default TemperatureInput