# ShortScript

Custom interpreted language focused on minimal syntax

## Assumptions of the language
-  interpreted
-  statically typed
-  basic arithmetic and logic operations
-  functions
-  object-oriented, including inheritance
-  minimal syntax

## Tokens
<!--👉[Here](./ShortScript.g4)👈 -->

```g4
SemiColon                  : ';';
Comma                      : ',';
Assign                     : '=';
QuestionMark               : '?';
Colon                      : ':';
Dot                        : '.';
Range                      : Dot Dot;
RangeInclude               : Dot Dot Assign;

Arrow                      : '=>';
LongArrow                  : '==>';
InheritArrow               : '<==';

// Logic operations
LessThan                   : '<';
MoreThan                   : '>';
LessThanEquals             : '<=';
MoreThanEquals             : '>=';
Equals                     : '==';
NotEquals                  : '!=';
And                        : '&&';
Or                         : '||';
Not                        : '!' ;

// Arithmetic operations
Plus                       : '+';
Minus                      : '-';
Multiply                   : '*';
Divide                     : '/';
Modulus                    : '%';
Power                      : '**';
PlusPlus                   : '++';
MinusMinus                 : '--';
MultiplyAssign             : '*=';
DivideAssign               : '/=';
ModulusAssign              : '%=';
PlusAssign                 : '+=';
MinusAssign                : '-=';

// Types
NumberTypeLiteral: 'n';
BooleanTypeLiteral: 'b';
StringTypeLiteral: 's';
VoidTypeLiteral: 'v';

// Brackers
OpenBracket                : '[';
CloseBracket               : ']';
OpenParen                  : '(';
CloseParen                 : ')';
OpenBrace                  : '{';
CloseBrace                 : '}';

// Literals
NullLiteral                : 'null';
BooleanLiteral             : 'true' | 'false';
StringLiteral              : '\'' ~['\r\n]* '\'';
IntegerLiteral             : '0' | '-'? [1-9] [0-9]*;
FloatLiteral
    : IntegerLiteral '.' [0-9]+
    | '.' [0-9]+
    ;



Whitespace: [ \t\n\r\f]+ -> skip ;

MultiLineComment  : '/*' .*? '*/'             -> channel(HIDDEN);
SingleLineComment : '//' ~[\r\n\u2028\u2029]* -> channel(HIDDEN); // line terminators


// Keywords
Break                      : 'br';
Continue                   : 'co';
Return                     : 'r';
Loop                       : 'l';
WhileLoop                  : 'w';
Function                   : 'f';
If                         : 'if';
Else                       : 'e';
Class                      : 'c';
This                       : 't';
Super                      : '^';

Print                      : 'print';


Identifier: [a-zA-Z_][a-zA-Z_0-9]*;
```

## Grammar
<!--👉[Here](./ShortScript.g4)👈-->

```g4
program
    : sourceElement+
    ;

sourceElement
    : statement
    | expression
    ;

statement
    : conditional
    | functionDefinition
    | classDefinition
    | loopStatement
    | continueStatement
    | breakStatement
    ;

expression
    : OpenParen expression CloseParen # GroupExpression
    | Print arguments # PrintExpression
    | expression subscriptOperator # IdentifierSubscriptExpression
    | expression Dot Identifier arguments? # IdentifierDotExpression
    | Identifier OpenParen (expression (Comma expression)*)? CloseParen # IdentifierCallExpression 
    | entityCall #EntityCallExpression
    | literal # LiteralExpression
    | Super # SuperExpression
    | Identifier # IdentifierExpression

    // Operators
    | PlusPlus expression # PreIncrementExpression
    | MinusMinus expression # PreDecrementExpression
    | expression PlusPlus # PostIncrementExpression
    | expression MinusMinus # PostDecrementExpression
    | Minus expression # UnaryMinutExpression
    | Not expression # NotExpression
    | < assoc = right > left=expression Power right=expression #PowerExpression
    | left=expression op=(Multiply | Divide | Modulus) right=expression # MultiplicativeExpression
    | left=expression op=(Plus | Minus) right=expression # AdditiveExpression
    | left=expression op=(LessThan | LessThanEquals | MoreThan | MoreThanEquals) right=expression # RelationalExpression
    | left=expression op=(Equals | NotEquals) right=expression # EqualityExpression
    | left=expression And right=expression # LogicalAndExpression
    | left=expression Or right=expression # LogicalOrExpression

    // Rest
    | Identifier assignment expression # AssignmentExpression
    | variableDefinition assignment expression # VariableDefinitionWithAssignmentExpression
    | variableDefinition # VariableDefinitionExpression
    | Return expression? # ReturnExpression 
    ;

arguments
    : OpenParen (expression (Comma expression)*)? CloseParen
    ;


// ========== If / ElseIf / Else ==========
conditional
    : ifConditional
      (eifConditional)*
      (eConditional)?
    ;

ifConditional
    : If conditionalHead conditionalBody;

eifConditional
    : Else If conditionalHead conditionalBody;

eConditional
    : Else conditionalBody;

conditionalHead
    : OpenParen expression CloseParen
    ;

conditionalBody
    : OpenBrace sourceElement* CloseBrace
    ;


// ========== assignment ==========

assignment
    : Assign
    | MultiplyAssign
    | DivideAssign
    | ModulusAssign
    | PlusAssign
    | MinusAssign
    ;


// ========== operators ==========

binaryOperator
    : binaryLogicOperator
    | binaryArithmeticOperator
    ;

binaryLogicOperator
    : LessThan
    | MoreThan
    | LessThanEquals
    | MoreThanEquals
    | Equals
    | NotEquals
    | And
    | Or
    ;             

binaryArithmeticOperator
    : Plus
    | Minus
    | Multiply
    | Divide
    | Modulus
    | Power
    ;

unaryLogicOperator
    : Not
    ;

unaryArithmeticOperator
    : PlusPlus
    | MinusMinus
    ;

subscriptOperator
    : OpenBracket expression CloseBracket
    ;
    

// ========== Variables and types ==========


type
    : NumberTypeLiteral
    | BooleanTypeLiteral
    | StringTypeLiteral
    | VoidTypeLiteral
    | Identifier
    | type OpenBracket CloseBracket         // array
    | OpenBrace type Comma type CloseBrace  // dictionary
    ;

variableDefinition
    : type Identifier
    ;

literal
    : NullLiteral
    | BooleanLiteral
    | StringLiteral
    | IntegerLiteral
    | FloatLiteral
    | dictionaryLiteral
    | arrayLiteral
    ;

dictionaryLiteral
    : OpenBrace ((expression Colon expression Comma)* (expression Colon expression))? CloseBrace
    ;

arrayLiteral
    : OpenBracket (expression Comma)* expression? CloseBracket
    ;

// ========== Loops ==========

loopStatement
    : loopHead OpenBrace loopBody CloseBrace
    ;

loopHead
    : nLoopHead
    | forLoopHead
    | whileLoopHead
    ;

loopBody
    : sourceElement*
    ;

nLoopHead
    : Loop OpenParen expr=expression CloseParen 
    ;

forLoopHead
    : Loop OpenParen variableDefinition Assign left=expression (Range | RangeInclude) right=expression CloseParen
    ;

whileLoopHead
    : WhileLoop OpenParen expression CloseParen
    ;

breakStatement
    : Break
    ;

continueStatement
    : Continue
    ;

// ========== function ==========
entityCall
    : primaryExpression OpenParen (expression (Comma expression)*)? CloseParen
    ;

primaryExpression
    : Identifier subscriptOperator? (Dot expression)?
    | Super
    | literal
    | OpenParen expression CloseParen
    ;

functionDefinition
: type Function Identifier
    OpenParen 
        (variableDefinition (Comma variableDefinition)*)? 
    CloseParen 
    OpenBrace 
        sourceElement*        
    CloseBrace
;

// ========== Classes ==========

classDefinition
    : Class Identifier (InheritArrow Identifier)?
        OpenBrace
            (variableDefinitionInitialization | methodDefinition)*
            constructorDefinition?
            (variableDefinitionInitialization | methodDefinition)*
        CloseBrace
    ;

variableDefinitionInitialization
    : variableDefinition (assignment expression)?
    ;

constructorDefinition
    : Identifier Identifier (LongArrow | (Assign variableDefinition (Comma variableDefinition)* Arrow))
        OpenBrace
            (Super OpenParen (expression (Comma expression)*)? CloseParen)?
            methodBodyElement*
        CloseBrace
    ;

methodDefinition
    : type Function Identifier
        OpenParen
            (variableDefinition (Comma variableDefinition)*)?
        CloseParen
        OpenBrace
            methodBodyElement*
        CloseBrace
    ;

methodBodyElement
    : (statement | classExpression)
    ;

classExpression
    : expression # NormalExpression
    | This (Dot expression)? # ThisExpression
    | Super Dot expression # SuperDotExpression
    ;
```

[`ShortScript.g4`](./ShortScript.g4) file contains the whole grammar of the language.

## Scanner/parser generators used, external packages
- [ANTLR4](https://www.antlr.org/)
- [ANTLR4 dla Javascript](https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md)
- Other packages can be found in the [package.json](./package.json) file

## Example program

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
<!-- ![antlr4_parse_tree](https://github.com/Spookyless/ShortScript/assets/63966121/ca2f7381-6265-4d2a-bf67-376a7faccc17) -->
![image](https://github.com/Spookyless/ShortScript/assets/63966121/3af59cfe-db6f-47ab-802c-a11371152003)


## Prerequisites

To build and run the interpreter, you need to have `antlr4` installed on your system and present on `PATH`. It is advised to follow [the official documentation](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md).

For additional features (such us grammar testing), you also need to install `antlr4-tools`, using [the official documentation](https://github.com/antlr/antlr4-tools/blob/master/README.md).

## How to run web interface

### Type in console

```
git clone https://github.com/Spookyless/ShortScript.git
cd ShortScript
npm i
npm run build:grammar
npm run build:examples
npm run start
```

### Open link: http://localhost:3000

### How it looks
![image](https://github.com/Spookyless/ShortScript/assets/63966121/19792c50-50fb-409b-a1f8-5e54b322a43a)

## Testing

### Grammar

To run tests on bare grammar, use the appropriate script:
```shell
npm run test:grammar
```

Test cases are located inside [`examples`](./examples/) directory.
