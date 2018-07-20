import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DetailRecord } from '../models/Record';

@Component({
	selector: 'step-by-step',
	templateUrl: './step-by-step.component.html',
	styleUrls: ['./step-by-step.component.css']
})
export class StepByStepComponent {
	@Input() detailRecords: DetailRecord[];
}
