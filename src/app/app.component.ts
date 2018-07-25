import { Component, ViewEncapsulation } from '@angular/core';
import { Record, DetailRecord } from './models';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {
	title = 'Non-Covered Earnings Offset and Non-Covered Dual Entitlement Benefit Calculations';
	records: Record[];
	detailRecords: DetailRecord[];

	onSubmit(records: Record[]) {
		this.records = records;
	}

	viewStepByStep(detailRecords: DetailRecord[]) {
		this.detailRecords = detailRecords;
	}
}
