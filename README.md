# ShortScript

Custom interpreted language focused on minimal syntax

## Prerequisites

To build and run the interpreter, you need to have `antlr4` installed on your system and present on `PATH`. It is advised to follow [the official documentation](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md).

For additional features (such us grammar testing), you also need to install `antlr4-tools`, using [the official documentation](https://github.com/antlr/antlr4-tools/blob/master/README.md).

## Development

[`ShortScript.g4`](./ShortScript.g4) file contains the whole grammar of the language.

## Testing

### Grammar

To run tests on bare grammar, use the appropriate script:
```shell
npm run test:grammar
```

Test cases are located inside [`examples`](./examples/) directory.