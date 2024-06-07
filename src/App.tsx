import React, {useState} from 'react';
import './App.css';
import {runInterpreter} from "./ShortScript";

function App() {
  const [text, setText] = useState('');
  const [output, setOutput] = useState('');

  const handleChange = (event:  React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    // console.log(text)
    setOutput(runInterpreter(text))
  }

  return (
      <div className="App">
        <div className="input-container">
          <textarea value={text} onChange={handleChange}/>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className="output-container">
          <textarea value={output} disabled={true}/>
        </div>
      </div>
  );
}

export default App;
