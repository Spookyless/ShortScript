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

Print                      : 'print';


Identifier: [a-zA-Z_][a-zA-Z_0-9]*;

// ========== Productions ==========

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
    | returnStatement
    ;

expression
    : OpenParen expression CloseParen # GroupExpression
    | Print arguments # PrintExpression
    | expression subscriptOperator # IdentifierSubscriptExpression
    | expression Dot Identifier arguments? # IdentifierDotExpression
    | Identifier OpenParen (expression (Comma expression)*)? CloseParen # IdentifierCallExpression  // TODO use arguments (required change in visitor)
//    | entityCall #EntityCallExpression
    | literal # LiteralExpression
    | (This | Identifier) (Dot Identifier)+ assignment expression # DotAssignmentExpression
    | This # ThisExpression
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
// Do zmiany
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

returnStatement
    : Return expression?
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
            sourceElement*
        CloseBrace
    ;

methodDefinition
    : type Function Identifier
        OpenParen
            (variableDefinition (Comma variableDefinition)*)?
        CloseParen
        OpenBrace
            sourceElement*
        CloseBrace
    ;