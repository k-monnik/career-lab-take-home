import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [textInput, setTextInput] = useState('');
  const [conversionMode, setConversionMode] = useState('lowercase');
  const [textOutput, setTextOutput] = useState('');

  const handleRadioChange = (e) => {
    setConversionMode(e.target.value);
  }

  const handleTextareaChange = (e) => {
    setTextInput(e.target.value);
  };

  let text = textInput;

  const result = () => {
    if (conversionMode === "lowercase") {
      let textLower = text.toLowerCase();
      return textLower;
    } else {
      if (conversionMode === "uppercase") {
        let textUpper = text.toUpperCase();
        return textUpper;
      }
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    setTextOutput(result);

  };

  return (
    <div className="App">
      <header>
        <h1>Career Lab text-case converter</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-control form-control__text">
          <label htmlFor="text">Text to be converted:</label>
          <textarea
            id="text"
            onChange={handleTextareaChange}
            value={textInput}
          />
        </div>
        <div className="form-control form-control__radio">
          <input
            type="radio"
            name="conversion"
            id="conversion-0"
            value="lowercase"
            checked={conversionMode === "lowercase"}
            onChange={handleRadioChange}
          />
          <label htmlFor="conversion-0">Convert text to lowercase</label>
        </div>
        <div className="form-control form-control__radio">
          <input
            type="radio"
            name="conversion"
            id="conversion-1"
            value="uppercase"
            checked={conversionMode === "uppercase"}
            onChange={handleRadioChange}
          />
          <label htmlFor="conversion-1">Convert text to uppercase</label>
        </div>
        <button className="button" type="submit">Submit</button>
        <div className="form-control form-control__text u-mt-3">
          <label htmlFor="result">Converted text:</label>
          <output id="result" className="result">{textOutput}</output>

        </div>
      </form>
    </div>
  );
}

export default App;
