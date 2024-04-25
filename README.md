# ShortScript

## Prerequisites

Install antlr4 following the [official documentation](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md)

## Usage

Grammar of ShortScript is contained in [`ShortScript.g4`](./ShortScript.g4) file, with entry point `TBD`.

Using `antlr4-parse` you can parse sample programs, included in [`/examples`](./examples/) directory.

```
antlr4-parse ShortScript.g4 <entry_point_TBD> -gui examples/assignment.ss
```