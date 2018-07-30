import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Record, DetailRecord } from '../models';

@Component({
	selector: 'summary',
	templateUrl: './summary.component.html',
	styleUrls: ['./summary.component.css'],
	providers: [CurrencyPipe]
})
export class SummaryComponent {
	@Input() records: Record[];
	@Output() viewStepByStep = new EventEmitter<boolean>();

	constructor() { }

	clickedStepByStepBtn() {
		this.viewStepByStep.emit(true);
	}
}