// Generated from ShortScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ShortScriptLexer extends Lexer {
	public static readonly SemiColon = 1;
	public static readonly Comma = 2;
	public static readonly Assign = 3;
	public static readonly QuestionMark = 4;
	public static readonly Colon = 5;
	public static readonly Dot = 6;
	public static readonly Range = 7;
	public static readonly RangeInclude = 8;
	public static readonly Arrow = 9;
	public static readonly LongArrow = 10;
	public static readonly InheritArrow = 11;
	public static readonly LessThan = 12;
	public static readonly MoreThan = 13;
	public static readonly LessThanEquals = 14;
	public static readonly MoreThanEquals = 15;
	public static readonly Equals = 16;
	public static readonly NotEquals = 17;
	public static readonly And = 18;
	public static readonly Or = 19;
	public static readonly Not = 20;
	public static readonly Plus = 21;
	public static readonly Minus = 22;
	public static readonly Multiply = 23;
	public static readonly Divide = 24;
	public static readonly Modulus = 25;
	public static readonly Power = 26;
	public static readonly PlusPlus = 27;
	public static readonly MinusMinus = 28;
	public static readonly MultiplyAssign = 29;
	public static readonly DivideAssign = 30;
	public static readonly ModulusAssign = 31;
	public static readonly PlusAssign = 32;
	public static readonly MinusAssign = 33;
	public static readonly NumberTypeLiteral = 34;
	public static readonly BooleanTypeLiteral = 35;
	public static readonly StringTypeLiteral = 36;
	public static readonly VoidTypeLiteral = 37;
	public static readonly OpenBracket = 38;
	public static readonly CloseBracket = 39;
	public static readonly OpenParen = 40;
	public static readonly CloseParen = 41;
	public static readonly OpenBrace = 42;
	public static readonly CloseBrace = 43;
	public static readonly NullLiteral = 44;
	public static readonly BooleanLiteral = 45;
	public static readonly StringLiteral = 46;
	public static readonly IntegerLiteral = 47;
	public static readonly FloatLiteral = 48;
	public static readonly Whitespace = 49;
	public static readonly MultiLineComment = 50;
	public static readonly SingleLineComment = 51;
	public static readonly Break = 52;
	public static readonly Continue = 53;
	public static readonly Return = 54;
	public static readonly Loop = 55;
	public static readonly WhileLoop = 56;
	public static readonly Function = 57;
	public static readonly If = 58;
	public static readonly Else = 59;
	public static readonly Class = 60;
	public static readonly This = 61;
	public static readonly Super = 62;
	public static readonly Identifier = 63;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"SemiColon", "Comma", "Assign", "QuestionMark", "Colon", "Dot", "Range", 
		"RangeInclude", "Arrow", "LongArrow", "InheritArrow", "LessThan", "MoreThan", 
		"LessThanEquals", "MoreThanEquals", "Equals", "NotEquals", "And", "Or", 
		"Not", "Plus", "Minus", "Multiply", "Divide", "Modulus", "Power", "PlusPlus", 
		"MinusMinus", "MultiplyAssign", "DivideAssign", "ModulusAssign", "PlusAssign", 
		"MinusAssign", "NumberTypeLiteral", "BooleanTypeLiteral", "StringTypeLiteral", 
		"VoidTypeLiteral", "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
		"OpenBrace", "CloseBrace", "NullLiteral", "BooleanLiteral", "StringLiteral", 
		"IntegerLiteral", "FloatLiteral", "Whitespace", "MultiLineComment", "SingleLineComment", 
		"Break", "Continue", "Return", "Loop", "WhileLoop", "Function", "If", 
		"Else", "Class", "This", "Super", "Identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "','", "'='", "'?'", "':'", "'.'", undefined, undefined, 
		"'=>'", "'==>'", "'<=='", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", 
		"'&&'", "'||'", "'!'", "'+'", "'-'", "'*'", "'/'", "'%'", "'**'", "'++'", 
		"'--'", "'*='", "'/='", "'%='", "'+='", "'-='", "'n'", "'b'", "'s'", "'v'", 
		"'['", "']'", "'('", "')'", "'{'", "'}'", "'null'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'br'", "'co'", 
		"'r'", "'l'", "'w'", "'f'", "'if'", "'e'", "'c'", "'t'", "'^'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SemiColon", "Comma", "Assign", "QuestionMark", "Colon", "Dot", 
		"Range", "RangeInclude", "Arrow", "LongArrow", "InheritArrow", "LessThan", 
		"MoreThan", "LessThanEquals", "MoreThanEquals", "Equals", "NotEquals", 
		"And", "Or", "Not", "Plus", "Minus", "Multiply", "Divide", "Modulus", 
		"Power", "PlusPlus", "MinusMinus", "MultiplyAssign", "DivideAssign", "ModulusAssign", 
		"PlusAssign", "MinusAssign", "NumberTypeLiteral", "BooleanTypeLiteral", 
		"StringTypeLiteral", "VoidTypeLiteral", "OpenBracket", "CloseBracket", 
		"OpenParen", "CloseParen", "OpenBrace", "CloseBrace", "NullLiteral", "BooleanLiteral", 
		"StringLiteral", "IntegerLiteral", "FloatLiteral", "Whitespace", "MultiLineComment", 
		"SingleLineComment", "Break", "Continue", "Return", "Loop", "WhileLoop", 
		"Function", "If", "Else", "Class", "This", "Super", "Identifier",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ShortScriptLexer._LITERAL_NAMES, ShortScriptLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ShortScriptLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ShortScriptLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "ShortScript.g4"; }

	// @Override
	public get ruleNames(): string[] { return ShortScriptLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ShortScriptLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ShortScriptLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ShortScriptLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02A\u0162\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
		"\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16" +
		"\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03!\x03" +
		"!\x03!\x03\"\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'" +
		"\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x03" +
		"-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\xFC\n.\x03" +
		"/\x03/\x07/\u0100\n/\f/\x0E/\u0103\v/\x03/\x03/\x030\x030\x050\u0109\n" +
		"0\x030\x030\x070\u010D\n0\f0\x0E0\u0110\v0\x050\u0112\n0\x031\x031\x03" +
		"1\x061\u0117\n1\r1\x0E1\u0118\x031\x031\x061\u011D\n1\r1\x0E1\u011E\x05" +
		"1\u0121\n1\x032\x062\u0124\n2\r2\x0E2\u0125\x032\x032\x033\x033\x033\x03" +
		"3\x073\u012E\n3\f3\x0E3\u0131\v3\x033\x033\x033\x033\x033\x034\x034\x03" +
		"4\x034\x074\u013C\n4\f4\x0E4\u013F\v4\x034\x034\x035\x035\x035\x036\x03" +
		"6\x036\x037\x037\x038\x038\x039\x039\x03:\x03:\x03;\x03;\x03;\x03<\x03" +
		"<\x03=\x03=\x03>\x03>\x03?\x03?\x03@\x03@\x07@\u015E\n@\f@\x0E@\u0161" +
		"\v@\x03\u012F\x02\x02A\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v" +
		"\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19" +
		"\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14" +
		"\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02" +
		"\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I" +
		"\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x02" +
		"1a\x022c\x023e\x024g\x025i\x026k\x027m\x028o\x029q\x02:s\x02;u\x02<w\x02" +
		"=y\x02>{\x02?}\x02@\x7F\x02A\x03\x02\t\x05\x02\f\f\x0F\x0F))\x03\x023" +
		";\x03\x022;\x05\x02\v\f\x0E\x0F\"\"\x05\x02\f\f\x0F\x0F\u202A\u202B\x05" +
		"\x02C\\aac|\x06\x022;C\\aac|\x02\u016D\x02\x03\x03\x02\x02\x02\x02\x05" +
		"\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03" +
		"\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03" +
		"\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03" +
		"\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03" +
		"\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02" +
		"\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02" +
		"\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03" +
		"\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02" +
		"\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02" +
		"?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02" +
		"\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02" +
		"\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03" +
		"\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02" +
		"\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02" +
		"a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02" +
		"\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02" +
		"\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03" +
		"\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02" +
		"\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x03\x81\x03\x02\x02" +
		"\x02\x05\x83\x03\x02\x02\x02\x07\x85\x03\x02\x02\x02\t\x87\x03\x02\x02" +
		"\x02\v\x89\x03\x02\x02\x02\r\x8B\x03\x02\x02\x02\x0F\x8D\x03\x02\x02\x02" +
		"\x11\x90\x03\x02\x02\x02\x13\x94\x03\x02\x02\x02\x15\x97\x03\x02\x02\x02" +
		"\x17\x9B\x03\x02\x02\x02\x19\x9F\x03\x02\x02\x02\x1B\xA1\x03\x02\x02\x02" +
		"\x1D\xA3\x03\x02\x02\x02\x1F\xA6\x03\x02\x02\x02!\xA9\x03\x02\x02\x02" +
		"#\xAC\x03\x02\x02\x02%\xAF\x03\x02\x02\x02\'\xB2\x03\x02\x02\x02)\xB5" +
		"\x03\x02\x02\x02+\xB7\x03\x02\x02\x02-\xB9\x03\x02\x02\x02/\xBB\x03\x02" +
		"\x02\x021\xBD\x03\x02\x02\x023\xBF\x03\x02\x02\x025\xC1\x03\x02\x02\x02" +
		"7\xC4\x03\x02\x02\x029\xC7\x03\x02\x02\x02;\xCA\x03\x02\x02\x02=\xCD\x03" +
		"\x02\x02\x02?\xD0\x03\x02\x02\x02A\xD3\x03\x02\x02\x02C\xD6\x03\x02\x02" +
		"\x02E\xD9\x03\x02\x02\x02G\xDB\x03\x02\x02\x02I\xDD\x03\x02\x02\x02K\xDF" +
		"\x03\x02\x02\x02M\xE1\x03\x02\x02\x02O\xE3\x03\x02\x02\x02Q\xE5\x03\x02" +
		"\x02\x02S\xE7\x03\x02\x02\x02U\xE9\x03\x02\x02\x02W\xEB\x03\x02\x02\x02" +
		"Y\xED\x03\x02\x02\x02[\xFB\x03\x02\x02\x02]\xFD\x03\x02\x02\x02_\u0111" +
		"\x03\x02\x02\x02a\u0120\x03\x02\x02\x02c\u0123\x03\x02\x02\x02e\u0129" +
		"\x03\x02\x02\x02g\u0137\x03\x02\x02\x02i\u0142\x03\x02\x02\x02k\u0145" +
		"\x03\x02\x02\x02m\u0148\x03\x02\x02\x02o\u014A\x03\x02\x02\x02q\u014C" +
		"\x03\x02\x02\x02s\u014E\x03\x02\x02\x02u\u0150\x03\x02\x02\x02w\u0153" +
		"\x03\x02\x02\x02y\u0155\x03\x02\x02\x02{\u0157\x03\x02\x02\x02}\u0159" +
		"\x03\x02\x02\x02\x7F\u015B\x03\x02\x02\x02\x81\x82\x07=\x02\x02\x82\x04" +
		"\x03\x02\x02\x02\x83\x84\x07.\x02\x02\x84\x06\x03\x02\x02\x02\x85\x86" +
		"\x07?\x02\x02\x86\b\x03\x02\x02\x02\x87\x88\x07A\x02\x02\x88\n\x03\x02" +
		"\x02\x02\x89\x8A\x07<\x02\x02\x8A\f\x03\x02\x02\x02\x8B\x8C\x070\x02\x02" +
		"\x8C\x0E\x03\x02\x02\x02\x8D\x8E\x05\r\x07\x02\x8E\x8F\x05\r\x07\x02\x8F" +
		"\x10\x03\x02\x02\x02\x90\x91\x05\r\x07\x02\x91\x92\x05\r\x07\x02\x92\x93" +
		"\x05\x07\x04\x02\x93\x12\x03\x02\x02\x02\x94\x95\x07?\x02\x02\x95\x96" +
		"\x07@\x02\x02\x96\x14\x03\x02\x02\x02\x97\x98\x07?\x02\x02\x98\x99\x07" +
		"?\x02\x02\x99\x9A\x07@\x02\x02\x9A\x16\x03\x02\x02\x02\x9B\x9C\x07>\x02" +
		"\x02\x9C\x9D\x07?\x02\x02\x9D\x9E\x07?\x02\x02\x9E\x18\x03\x02\x02\x02" +
		"\x9F\xA0\x07>\x02\x02\xA0\x1A\x03\x02\x02\x02\xA1\xA2\x07@\x02\x02\xA2" +
		"\x1C\x03\x02\x02\x02\xA3\xA4\x07>\x02\x02\xA4\xA5\x07?\x02\x02\xA5\x1E" +
		"\x03\x02\x02\x02\xA6\xA7\x07@\x02\x02\xA7\xA8\x07?\x02\x02\xA8 \x03\x02" +
		"\x02\x02\xA9\xAA\x07?\x02\x02\xAA\xAB\x07?\x02\x02\xAB\"\x03\x02\x02\x02" +
		"\xAC\xAD\x07#\x02\x02\xAD\xAE\x07?\x02\x02\xAE$\x03\x02\x02\x02\xAF\xB0" +
		"\x07(\x02\x02\xB0\xB1\x07(\x02\x02\xB1&\x03\x02\x02\x02\xB2\xB3\x07~\x02" +
		"\x02\xB3\xB4\x07~\x02\x02\xB4(\x03\x02\x02\x02\xB5\xB6\x07#\x02\x02\xB6" +
		"*\x03\x02\x02\x02\xB7\xB8\x07-\x02\x02\xB8,\x03\x02\x02\x02\xB9\xBA\x07" +
		"/\x02\x02\xBA.\x03\x02\x02\x02\xBB\xBC\x07,\x02\x02\xBC0\x03\x02\x02\x02" +
		"\xBD\xBE\x071\x02\x02\xBE2\x03\x02\x02\x02\xBF\xC0\x07\'\x02\x02\xC04" +
		"\x03\x02\x02\x02\xC1\xC2\x07,\x02\x02\xC2\xC3\x07,\x02\x02\xC36\x03\x02" +
		"\x02\x02\xC4\xC5\x07-\x02\x02\xC5\xC6\x07-\x02\x02\xC68\x03\x02\x02\x02" +
		"\xC7\xC8\x07/\x02\x02\xC8\xC9\x07/\x02\x02\xC9:\x03\x02\x02\x02\xCA\xCB" +
		"\x07,\x02\x02\xCB\xCC\x07?\x02\x02\xCC<\x03\x02\x02\x02\xCD\xCE\x071\x02" +
		"\x02\xCE\xCF\x07?\x02\x02\xCF>\x03\x02\x02\x02\xD0\xD1\x07\'\x02\x02\xD1" +
		"\xD2\x07?\x02\x02\xD2@\x03\x02\x02\x02\xD3\xD4\x07-\x02\x02\xD4\xD5\x07" +
		"?\x02\x02\xD5B\x03\x02\x02\x02\xD6\xD7\x07/\x02\x02\xD7\xD8\x07?\x02\x02" +
		"\xD8D\x03\x02\x02\x02\xD9\xDA\x07p\x02\x02\xDAF\x03\x02\x02\x02\xDB\xDC" +
		"\x07d\x02\x02\xDCH\x03\x02\x02\x02\xDD\xDE\x07u\x02\x02\xDEJ\x03\x02\x02" +
		"\x02\xDF\xE0\x07x\x02\x02\xE0L\x03\x02\x02\x02\xE1\xE2\x07]\x02\x02\xE2" +
		"N\x03\x02\x02\x02\xE3\xE4\x07_\x02\x02\xE4P\x03\x02\x02\x02\xE5\xE6\x07" +
		"*\x02\x02\xE6R\x03\x02\x02\x02\xE7\xE8\x07+\x02\x02\xE8T\x03\x02\x02\x02" +
		"\xE9\xEA\x07}\x02\x02\xEAV\x03\x02\x02\x02\xEB\xEC\x07\x7F\x02\x02\xEC" +
		"X\x03\x02\x02\x02\xED\xEE\x07p\x02\x02\xEE\xEF\x07w\x02\x02\xEF\xF0\x07" +
		"n\x02\x02\xF0\xF1\x07n\x02\x02\xF1Z\x03\x02\x02\x02\xF2\xF3\x07v\x02\x02" +
		"\xF3\xF4\x07t\x02\x02\xF4\xF5\x07w\x02\x02\xF5\xFC\x07g\x02\x02\xF6\xF7" +
		"\x07h\x02\x02\xF7\xF8\x07c\x02\x02\xF8\xF9\x07n\x02\x02\xF9\xFA\x07u\x02" +
		"\x02\xFA\xFC\x07g\x02\x02\xFB\xF2\x03\x02\x02\x02\xFB\xF6\x03\x02\x02" +
		"\x02\xFC\\\x03\x02\x02\x02\xFD\u0101\x07)\x02\x02\xFE\u0100\n\x02\x02" +
		"\x02\xFF\xFE\x03\x02\x02\x02\u0100\u0103\x03\x02\x02\x02\u0101\xFF\x03" +
		"\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0104\x03\x02\x02\x02\u0103" +
		"\u0101\x03\x02\x02\x02\u0104\u0105\x07)\x02\x02\u0105^\x03\x02\x02\x02" +
		"\u0106\u0112\x072\x02\x02\u0107\u0109\x07/\x02\x02\u0108\u0107\x03\x02" +
		"\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A" +
		"\u010E\t\x03\x02\x02\u010B\u010D\t\x04\x02\x02\u010C\u010B\x03\x02\x02" +
		"\x02\u010D\u0110\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010E\u010F" +
		"\x03\x02\x02\x02\u010F\u0112\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02" +
		"\u0111\u0106\x03\x02\x02\x02\u0111\u0108\x03\x02\x02\x02\u0112`\x03\x02" +
		"\x02\x02\u0113\u0114\x05_0\x02\u0114\u0116\x070\x02\x02\u0115\u0117\t" +
		"\x04\x02\x02\u0116\u0115\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118" +
		"\u0116\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u0121\x03\x02" +
		"\x02\x02\u011A\u011C\x070\x02\x02\u011B\u011D\t\x04\x02\x02\u011C\u011B" +
		"\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02" +
		"\u011E\u011F\x03\x02\x02\x02\u011F\u0121\x03\x02\x02\x02\u0120\u0113\x03" +
		"\x02\x02\x02\u0120\u011A\x03\x02\x02\x02\u0121b\x03\x02\x02\x02\u0122" +
		"\u0124\t\x05\x02\x02\u0123\u0122\x03\x02\x02\x02\u0124\u0125\x03\x02\x02" +
		"\x02\u0125\u0123\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0127" +
		"\x03\x02\x02\x02\u0127\u0128\b2\x02\x02\u0128d\x03\x02\x02\x02\u0129\u012A" +
		"\x071\x02\x02\u012A\u012B\x07,\x02\x02\u012B\u012F\x03\x02\x02\x02\u012C" +
		"\u012E\v\x02\x02\x02\u012D\u012C\x03\x02\x02\x02\u012E\u0131\x03\x02\x02" +
		"\x02\u012F\u0130\x03\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u0130\u0132" +
		"\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0132\u0133\x07,\x02\x02" +
		"\u0133\u0134\x071\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0136\b3\x03" +
		"\x02\u0136f\x03\x02\x02\x02\u0137\u0138\x071\x02\x02\u0138\u0139\x071" +
		"\x02\x02\u0139\u013D\x03\x02\x02\x02\u013A\u013C\n\x06\x02\x02\u013B\u013A" +
		"\x03\x02\x02\x02\u013C\u013F\x03\x02\x02\x02\u013D\u013B\x03\x02\x02\x02" +
		"\u013D\u013E\x03\x02\x02\x02\u013E\u0140\x03\x02\x02\x02\u013F\u013D\x03" +
		"\x02\x02\x02\u0140\u0141\b4\x03\x02\u0141h\x03\x02\x02\x02\u0142\u0143" +
		"\x07d\x02\x02\u0143\u0144\x07t\x02\x02\u0144j\x03\x02\x02\x02\u0145\u0146" +
		"\x07e\x02\x02\u0146\u0147\x07q\x02\x02\u0147l\x03\x02\x02\x02\u0148\u0149" +
		"\x07t\x02\x02\u0149n\x03\x02\x02\x02\u014A\u014B\x07n\x02\x02\u014Bp\x03" +
		"\x02\x02\x02\u014C\u014D\x07y\x02\x02\u014Dr\x03\x02\x02\x02\u014E\u014F" +
		"\x07h\x02\x02\u014Ft\x03\x02\x02\x02\u0150\u0151\x07k\x02\x02\u0151\u0152" +
		"\x07h\x02\x02\u0152v\x03\x02\x02\x02\u0153\u0154\x07g\x02\x02\u0154x\x03" +
		"\x02\x02\x02\u0155\u0156\x07e\x02\x02\u0156z\x03\x02\x02\x02\u0157\u0158" +
		"\x07v\x02\x02\u0158|\x03\x02\x02\x02\u0159\u015A\x07`\x02\x02\u015A~\x03" +
		"\x02\x02\x02\u015B\u015F\t\x07\x02\x02\u015C\u015E\t\b\x02\x02\u015D\u015C" +
		"\x03\x02\x02\x02\u015E\u0161\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02" +
		"\u015F\u0160\x03\x02\x02\x02\u0160\x80\x03\x02\x02\x02\u0161\u015F\x03" +
		"\x02\x02\x02\x0F\x02\xFB\u0101\u0108\u010E\u0111\u0118\u011E\u0120\u0125" +
		"\u012F\u013D\u015F\x04\b\x02\x02\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ShortScriptLexer.__ATN) {
			ShortScriptLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ShortScriptLexer._serializedATN));
		}

		return ShortScriptLexer.__ATN;
	}

}
