import {SourceElementContext} from "../antlr/ShortScriptParser";

export class FunctionValue {
    returnType: string;
    args: string[][];
    body: SourceElementContext[];

    constructor(
        returnType: string,
        args: string[][],
        body: SourceElementContext[]
    ) {
        this.returnType = returnType;
        this.args = args;
        this.body = body;
    }
}

export class Method {
    class: Class;
    returnType: string;
    args: string[][];
    body: SourceElementContext[];

    constructor(
        _class: Class,
        returnType: string,
        args: string[][],
        body: SourceElementContext[]
    ) {
        this.class = _class;
        this.returnType = returnType;
        this.args = args;
        this.body = body;
    }
}

export class Class {
    name: string;
    superclass?: Class;
    _constructor?: Method;
    fields: Record<string, any> = {};
    methods: Record<string, Method> = {};

    constructor(name: string) {
        this.name = name;
    }
}

export class ClassInstance {
    classPrototype: Class;
    fields: Record<string, any> = {};

    constructor(classPrototype: Class) {
        this.classPrototype = classPrototype;
        for (const key in classPrototype.fields) {
            this.fields[key] = JSON.parse(JSON.stringify(classPrototype.fields[key]));
        }
    }
}