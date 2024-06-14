# ShortScript

Custom interpreted language focused on minimal syntax

## Language features
- [x] interpreted
- [ ] statically typed
- [x] supports most common arithmetic and logic operations
- [x] functions and QoL loops
- [x] object-oriented
- [ ] inheritance
- [x] minimal syntax

## Grammar

[`ShortScript.g4`](./ShortScript.g4) contains the whole grammar of the language.

## Technologies used
- [ANTLR4](https://www.antlr.org/)
- [ANTLR4 for Javascript](https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md)
- Other packages, listed in [package.json](./package.json)

## IDE Features
![image](https://github.com/Spookyless/ShortScript/assets/63966121/19792c50-50fb-409b-a1f8-5e54b322a43a)

- Toolbar with following options:
  - `Run code` - allows you to run your code
  - `Auto run` - automatically runs the code if you're not typing
  - Dropdown list allows you select sample programs
- Syntax highlighting for ShortScript
- Error highlighting when running the code

## Example

More examples, for both grammar and working programs, can be found in [`examples`](./examples/) directory

### Input
```
n f fib(n num){
  if(num <= 0){
    r 0
  }
  
  if(num == 1){
    r 1
  }

  r fib(num - 1) + fib(num - 2) 
}
  
print('Result: ' + fib(8))
```

### Output
```
Result: 21
```

### Parse tree
![image](https://github.com/Spookyless/ShortScript/assets/63966121/3af59cfe-db6f-47ab-802c-a11371152003)


## Running ShortScript IDE

### Prerequisites

To build and run the interpreter, you need to have `antlr4` installed on your system and present on `PATH`. It is advised to follow [the official documentation](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md).

For additional features (such us grammar testing), you also need to install `antlr4-tools`, using [the official documentation](https://github.com/antlr/antlr4-tools/blob/master/README.md).

Application requires NodeJS `>=20.9.0` to run smoothly. Running ShortScript on other versions of Node might lead to errors.

### Setup and building sources

1. Clone the repository
```shell
git clone https://github.com/Spookyless/ShortScript.git
cd ShortScript
```

2. Install dependencies
```shell
npm install
```

### Running the application

4. Start the development server
```shell
npm run dev
```

5. ...or, build the application and start the production version:
```shell
npm build
npm start
```

New tab in your default browser should open (usually on `localhost:3000`). When development server is ready, you'll have a full access to ShortScript IDE.

## Testing

All tests suites can be launched using a single script:
```shell
npm test
```

If you want more granular control over what tests are run, you can execute specified stages (found in [`package.json`](./package.json)):
```shell
npm run test:grammar
```

Test cases are located inside [`examples/grammar`](./examples/grammar) directory.

## Authors

- [@MBrosik](https://github.com/MBrosik)
- [@Spookyless](https://github.com/Spookyless)
- [@rubikon02](https://github.com/rubikon02)

## License

ShortScript is licensed under MIT License, more information can be found in the [`LICENSE.md`](./LICENSE.md) file