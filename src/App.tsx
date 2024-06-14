import { useEffect, useState } from 'react';
import './App.css';
import './syntax.css';
import { runInterpreter } from "./ShortScript";
import Editor from 'react-simple-code-editor';
import { useDebounce } from 'use-debounce';
import { CharStreams } from "antlr4ts";
import { ShortScriptLexer } from './ShortScript/antlr/ShortScriptLexer';
import { LineError } from './ShortScript/helpers/LineError';
import { examples } from './examples';

const addLineNumbers = (code: string) => code.split("\n")
  .map((line, i) => `<span class='line-number'>${i + 1}</span>${line}`)
  .join("\n");

const highlightErrors = (code: string, errorLines: number[]) => code.split("\n")
  .map((line, i) => errorLines.includes(i + 1) ? `<span class='error-line'>${line}</span>` : line)
  .join("\n");

const highlight = (code: string) => {
  let highlightedCode = code;

  const chars = CharStreams.fromString(highlightedCode);
  const lexer = new ShortScriptLexer(chars);
  lexer.removeErrorListeners();

  const tokenList = lexer.getAllTokens();

  let offset = 0;

  for (const token of tokenList) {
    const tokenName = ShortScriptLexer["_SYMBOLIC_NAMES"][token.type];
    const tokenText = token.text;

    if (tokenName && tokenText) {
      const tokenClass = tokenName.toLowerCase();

      // Insert the highlighted span
      const span = `<span class="token ${tokenClass}">${tokenText}</span>`;
      const index = token.startIndex + offset;
      highlightedCode = highlightedCode.slice(0, index) + span + highlightedCode.slice(index + tokenText.length);

      offset += span.length - tokenText.length;
    }
  }

  return highlightedCode;
};

function App() {
  const [text, setText] = useState('');
  const [code] = useDebounce(text, 1000);
  const [output, setOutput] = useState('');
  const [autoRun, setAutoRun] = useState(false);
  const [errorLines, setErrorLines] = useState<number[]>([]);
  const [selectedExample, setSelectedExample] = useState<keyof typeof examples>(Object.keys(examples)[0] as keyof typeof examples);

  const interpret = (text: string) => {
    const result = runInterpreter(text);

    setErrorLines((result.filter(m => m instanceof LineError) as LineError[]).map(e => e.line));
    return result.map(m => m instanceof LineError ? m.toString() : m).join("\n");
  }

  const handleRun = () => {
    setOutput(interpret(text));
  }

  useEffect(() => {
    if (!autoRun) { return; }

    setOutput(interpret(code));
  }, [autoRun, code]);

  useEffect(() => {
    setText(examples[selectedExample]);
  }, [selectedExample]);

  return (
    <div className="app">
      <h1>ShortScript</h1>
      <div className='environment'>
        <div className="settings">
          <button
            onClick={() => handleRun()}
          >Run code</button>
          <button
            className={autoRun ? "active" : ""}
            onClick={() => setAutoRun(state => !state)}
          >Auto run</button>
          <select onChange={(e) => setSelectedExample(e.target.value as keyof typeof examples)}>
            {Object.keys(examples).map(key => <option key={key} value={key}>{key}</option>)}
          </select>
        </div>
        <div className='ide'>
          <div className='editor-container'>
            <Editor
              className='editor'
              value={text}
              onValueChange={code => setText(code)}
              highlight={code => addLineNumbers(highlightErrors(highlight(code), errorLines))}
              padding={10}
              onKeyDown={(event) => {
                if (event.ctrlKey && event.key === 'Enter') {
                  event.preventDefault()
                  handleRun();
                }
              }}
            />
          </div>
          <pre className='output'>
            {output}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;
