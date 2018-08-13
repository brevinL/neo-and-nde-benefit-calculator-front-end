import { Instruction } from './Instruction';

interface ITask {
	instruction_set: Instruction[];
}

export class Task {
	instruction_set: Instruction[];

	constructor(obj: ITask) {
		if(obj.hasOwnProperty('instruction_set')) {
			obj.instruction_set.map(instruction => new Instruction(instruction)).sort((a,b) => a.order - b.order);
		} else {
			this.instruction_set = [];
		}
	}
}