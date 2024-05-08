grammar ShortScript;

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
GreaterThanEquals          : '>=';
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
// Whitespace: [\s]+ -> skip ;

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


Identifier: [a-zA-Z_][a-zA-Z_0-9]*;

// ========== Productions ==========

program
    : sourceElement+ EOF
    ;

sourceElement
    : statement
    | expression
    ;

statement
    : conditional
    | functionDefinition
    ;

expression
    : Identifier
    | literal
    | entityCall
    | OpenParen expression CloseParen
    | expression binaryOperator expression
    | unaryLogicOperator expression
    | unaryArithmeticOperator expression
    | expression unaryArithmeticOperator
    | assignmentExpression
    | variableDefinition assignment expression
    | variableDefinition
    ;


// ========== If / ElseIf / Else ==========
conditional
    : If conditionalHead conditionalBody
      (Else If conditionalHead conditionalBody)*
      (Else conditionalBody)?
    ;

conditionalHead
    : OpenParen expression CloseParen
    ;

conditionalBody
    : OpenBrace sourceElement* CloseBrace
    ;


// ========== assignment ==========

assignmentExpression
    : Identifier assignment expression
    ;

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
    | GreaterThanEquals
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
    ;

dictionaryLiteral
    : OpenBrace ((expression Colon expression Comma)* (expression Colon expression))? CloseBrace
    ;

// ========== Loops ==========

loopStatement
    : loopHead loopBody
    ;

loopHead
    : nLoopHead
    | forLoopHead
    | whileLoopHead
    ;

loopBody
    : (sourceElement | Break | Continue)*
    ;

nLoopHead
    : Loop OpenParen expression CloseParen 
    ;

forLoopHead
    : Loop Assign expression Range expression 
    | Loop Assign expression RangeInclude expression 
    ;

whileLoopHead
    : WhileLoop OpenParen expression CloseParen
    ;

// ========== function ==========
entityCall
    : Identifier OpenParen (expression (Comma expression)*)? CloseParen
    ;

functionDefinition
: type Function Identifier
    OpenParen 
        (variableDefinition (Comma variableDefinition)*)? 
    CloseParen 
    OpenBrace 
        sourceElement*
        (Return expression?)?
    CloseBrace
;


// ========== Classes ==========

classDefinition
    : Class Identifier (InheritArrow Identifier)?
        OpenBracket
            (variableDefinition | functionDefinition)*
        CloseBracket
    ;