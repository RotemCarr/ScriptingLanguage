export type NodeType =
//Statements
| "Program"
| "VariableDeclaration"
//Expressions
| "AssignmentExpr"
| "NumericLiteral"
| "Identifier" 
| "BinaryExpr" 

export interface Statement {
    kind: NodeType
}

export interface Program extends Statement {
    kind: "Program",
    body: Statement[]
}

export interface VariableDeclaration extends Statement {
    kind: "VariableDeclaration",
    constant: boolean,
    identifier: string,
    value?: Expression
}

export interface Expression extends Statement {}

export interface AssignmentExpr extends Expression {
    kind: "AssignmentExpr",
    assigned: Expression,
    value: Expression
}

export interface BinaryExpr extends Expression {
    kind: "BinaryExpr",
    left: Expression,
    right: Expression,
    operator: string
}

export interface Identifier extends Expression {
    kind: "Identifier",
    symbol: string
}

export interface NumericLiteral extends Expression {
    kind: "NumericLiteral",
    value: number
}
