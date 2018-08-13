import { Expression } from './Expression';

interface IInstruction {
	description: string;
	expression_set: Expression[];
	order: number;
}

export class Instruction {
	description: string;
	expression_set: Expression[];
	order: number;

	constructor(obj: IInstruction) {
		this.description = obj.description;
		this.expression_set = obj.expression_set.map(expression => new Expression(expression));
		this.order = obj.order;
	}
}