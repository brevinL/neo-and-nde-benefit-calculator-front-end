import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DetailRecord } from '../models';
import { getDetailRecords } from '../models/testing';
@Component({
	selector: 'step-by-step',
	templateUrl: './step-by-step.component.html',
	styleUrls: ['./step-by-step.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class StepByStepComponent implements OnInit {
	@Input() detailRecords: DetailRecord[];
	currentRecord: DetailRecord;

	ngOnInit() {
		this.detailRecords = getDetailRecords();
		this.currentRecord = this.detailRecords[0];
	}

	scrollToTop() {
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
	}

	changeRecord(currentPage: number) {
		currentPage -= 1;
		this.currentRecord = this.detailRecords[currentPage];
		this.scrollToTop();
	}
}
