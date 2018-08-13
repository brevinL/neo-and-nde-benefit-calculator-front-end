import { Instruction } from './Instruction';

interface ITask {
	instruction_set: Instruction[];
}

export class Task {
	instruction_set: Instruction[];

	constructor(obj: ITask) {
		this.instruction_set = obj.instruction_set.map(instruction => new Instruction(instruction));
	}
}