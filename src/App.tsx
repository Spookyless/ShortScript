import React, { useState } from 'react';
import './App.css';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import { runInterpreter } from "./ShortScript";
import { FormLabel } from '@mui/joy';

function App() {
  const [text, setText] = useState('');
  const [line, setLine] = useState('');
  const [output, setOutput] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    setLine(event.target.value.split("\n").map((el, ind) => ind+1).join("\n"))
  };

  const handleSubmit = () => {    
    const messages = runInterpreter(text)
    setOutput(messages[0].length != 0 ? messages[0] : messages[1])
  }

  return (
    <div className="App">
      <FormLabel
        className="app-title"
        sx={
          { color: "white", fontSize: 50, marginBottom: 5, marginTop: 2 }
        }
      >
        ShortScript
      </FormLabel>
      <div className='parser-container'>
        <div className="input-container">
          <div className='textarea-input-container'>
            <Textarea
              value={line}
              sx={{ height: 600, backgroundColor:"transparent", color:"white"}}
              variant="soft"
            />
            <Textarea
              value={text}
              onChange={handleChange}
              sx={{ height: 600, whiteSpace: "nowrap" }}
              variant="soft"

            />
          </div>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
        <div className="output-container">
          <Textarea
            value={output}
            disabled={true}
            sx={{ height: 600 }}
            variant="soft"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
