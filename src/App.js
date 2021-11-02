
import React, { Component } from 'react';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: [],
      numberString: ""
    }

    this.inputNumber = this.inputNumber.bind(this);

  }
 
  inputNumber(x) {
    var numberArray = []
    var numbers = x.split(",");
    for (var i in numbers) {
      console.log(numbers)
      if (numbers[i]) {
        if (!isNaN(numbers[i])) {
          numberArray.push(numbers[i] * 2)
        } else {
          numberArray.push("Not a number")
        }
      } else {
        numberArray.push("")
      }

    }

    console.log(numberArray)

    this.setState({
      input: numberArray
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <div className="header-text">
            <div><p className="header-sub-text">Medirecords front end Code Challenge</p></div>
            <div><p className="header-sub-text2">Please try to implement following within one hour</p></div>
          </div>
          <div className="input-boxes">
            <div className="input-box">
              <p className="input-text">Input</p><br />
              <p> Array</p>
              <input className="input-field" type="text" onChange={(x) => this.inputNumber(x.target.value)} />
            </div>
            <div className="input-box">
              <p className="input-text">Output</p><br />
              <p>Double</p>
              <input className="input-field" type="text" disabled value={this.state.input} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;