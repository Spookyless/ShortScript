import { useEffect, useState } from 'react';
import './App.css';
import './syntax.css';
import { runInterpreter } from "./ShortScript";
import Editor from 'react-simple-code-editor';
import { useDebounce } from 'use-debounce';
import { CharStreams } from "antlr4ts";
import { ShortScriptLexer } from './ShortScript/antlr/ShortScriptLexer';
import { LineError } from './ShortScript/helpers/LineError';

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
  const [text, setText] = useState(`n f Fibonacci(n num){
  if(num<=0){
      r 0
  }
  e if(num==1){
      r 1
  }

  n num1 = 0
  n num2 = 1
      
  l(num - 1){
      n temp = num1
      num1 = num2
      num2 = temp + num2
      print(num2)
  }    

  r num2
}

print('Wynik:')
print(Fibonacci(7))
  `);
  const [code] = useDebounce(text, 1000);
  const [output, setOutput] = useState('');
  const [autoRun, setAutoRun] = useState(false);
  const [errorLines, setErrorLines] = useState<number[]>([]);

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
        </div>
        <div className='ide'>
          <div className='editor-container'>
            <Editor
              className='editor'
              value={text}
              onValueChange={code => setText(code)}
              highlight={code => addLineNumbers(highlightErrors(highlight(code), errorLines))}
              padding={10}
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
