
export class Instruction {
	description: string;
	expressions: string[];

	constructor(description: string, expressions: string[]) {
		this.description = description;
		this.expressions = expressions;
	}
}