import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput';

function toCelsius(fahrenheit) {
    return (fahrenheit-32)*5/9;
}

function toFahrenheit(celcius) {
    return (celcius*9/5)+32;
}

function tryConvert(temperature,convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return ''; 
    }
    const output = convert(input);
    const rounded = Math.round(output*1000)/1000;
    return rounded.toString()
}

function BoilingVerdict(props) {
    if(props.celcius>=100) {
        return <p>The water would boil</p>
    }
    else {
        return <p>Water will not boil</p>
    }   
}   

class CalculateTemparature extends Component {
    constructor(props) {
        super(props);
        this.state={
            temperature:'',
            scale:'c'
        }
        this.handleCelciusChange = this.handleCelciusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelciusChange(temperature) {
        this.setState({
            scale:'c',
            temperature
        })
    }

    handleFahrenheitChange(temperature) {
        this.setState({
            scale:'f',
            temperature
        })
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celcius = scale==='f' ? tryConvert(temperature,toCelsius):temperature ;
        const fahrenheit = scale==='c' ? tryConvert(temperature,toFahrenheit):temperature;
        return (
            <div>
                <TemperatureInput 
                    scale="c"
                    temperature={celcius}
                    onTemperatureChange={this.handleCelciusChange}
                />
                <TemperatureInput 
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict celcius={parseFloat(celcius)}/>
            </div>
        )
    }
}
export default  CalculateTemparature;