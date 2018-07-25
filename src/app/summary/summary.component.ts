import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Record } from '../models';
import { getRecords } from '../models/testing';

@Component({
	selector: 'summary',
	templateUrl: './summary.component.html',
	styleUrls: ['./summary.component.css'],
	providers: [CurrencyPipe]
})
export class SummaryComponent {
	@Input() records: Record[];

	constructor() { }
}