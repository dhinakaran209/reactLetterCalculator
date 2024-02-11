import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {noOfLetters: 0}

  countLetters = event => {
    this.setState({noOfLetters: event.target.value.length})
  }

  render() {
    const {noOfLetters} = this.state

    return (
      <div className="bg-container">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
        <div className="letters-count-container">
          <h1 className="heading">Calculate the letters you Enter</h1>
          <label htmlFor="inputs" className="enter">
            Enter the phrase
          </label>
          <input
            id="inputs"
            type="input"
            className="input-field"
            onChange={this.countLetters}
          />
          <p className="result">No.of letters: {noOfLetters}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
