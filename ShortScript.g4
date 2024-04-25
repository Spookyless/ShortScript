grammar ShortScript;

SemiColon                  : ';';
Comma                      : ',';
Assign                     : '=';
QuestionMark               : '?';
Colon                      : ':';
Dot                        : '.';

Arrow                      : '=>';
LongArrow                  : '==>';
InheritArrow               : '<=';

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
PlusPlus                   : '++';
MinusMinus                 : '--';
Power                      : '**';
MultiplyAssign             : '*=';
DivideAssign               : '/=';
ModulusAssign              : '%=';
PlusAssign                 : '+=';
MinusAssign                : '-=';

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

// TODO czy rozdzielamy na float i int?
DecimalLiteral:
    DecimalIntegerLiteral '.' [0-9]+
    | '.' [0-9]+
    | DecimalIntegerLiteral
;
fragment DecimalIntegerLiteral: '0' | [1-9] [0-9]*;


// TODO czy to upraszczamy? O co tu chodzi?
StringLiteral               : '\'' SingleStringCharacter* '\'';
fragment SingleStringCharacter: ~['\\\r\n] | '\\' EscapeSequence | LineContinuation;  // po \ może być ', ", \, itp
fragment EscapeSequence:
    CharacterEscapeSequence
    | '0' // no digit ahead! TODO
;
fragment LineContinuation: '\\' [\r\n\u2028\u2029]+;
fragment CharacterEscapeSequence: SingleEscapeCharacter | NonEscapeCharacter;
fragment SingleEscapeCharacter: ['"\\bfnrtv];
fragment NonEscapeCharacter: ~['"\\bfnrtv0-9xu\r\n];

// TODO za dużo dziwnych znaczków które niewiadomo co robią
WhiteSpaces: [\t\u000B\u000C\u0020\u00A0]+ -> channel(HIDDEN);
LineTerminator: [\r\n\u2028\u2029] -> channel(HIDDEN);

MultiLineComment  : '/*' .*? '*/'             -> channel(HIDDEN);
SingleLineComment : '//' ~[\r\n\u2028\u2029]* -> channel(HIDDEN);



// Keywords
Break                      : 'br';
Else                       : 'e';
Return                     : 'r';
Continue                   : 'co';
Loop                       : 'l';
Function                   : 'f'; // ?
This                       : 't';
If                         : 'if';
Class                      : 'c';
Super                      : 's';








// TODO czy id zadziała dopiero po wszystkich innych keywordach?
ID: [a-zA-Z_][a-zA-Z_0-9]* ;
// TODO coś takiego, czy bardziej jak w WhiteSpaces i LineTerminator?
WS: [ \t\n\r\f]+ -> skip ;




// program
//     : stat EOF
//     | def EOF
//     ;

// stat: ID '=' expr ';'
//     | expr ';'
//     ;

// def : ID '(' ID (',' ID)* ')' '{' stat* '}' ;

// expr: ID
//     | INT
//     | func
//     | 'not' expr
//     | expr 'and' expr
//     | expr 'or' expr
//     ;

// func : ID '(' expr (',' expr)* ')' ;