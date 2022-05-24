import React from 'react';
import TemperatureInput from "./TemperatureInput";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
        this.state = {temperature: '100', scale: 'c'}
    }

    handleCelsiusChange(temperature) {
        /* ToDO: Setze hier den State neu */

    }

    handleFahrenheitChange(temperature) {
        /* ToDO: Setze hier den State neu */

    }

    render() {
        /* ToDO: Verwende hier das Attribut scale aus dem State anstatt des festen Werts '0'*/
        const scale = '0';
        /* ToDO: Verwende hier das Attribut temperature aus dem State anstatt des festen Werts 0*/
        const temperature = 0;
        let celsius, fahrenheit = temperature

        /* ToDO: Ersetze hier 'true' durch die in der Aufgabe beschriebene Bedingung*/
        if(true){
            celsius = tryConvert(temperature, toCelsius)
        }else{
            fahrenheit = tryConvert(temperature, toFahrenheit)
        }

        return (
            <div>
                <TemperatureInput
                    scale="celsius"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale="fahrenheit"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
            </div>
        );
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default Calculator