import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation} from '@angular/core';
import { CurrencyPipe, Location } from '@angular/common';
import { Respondent, Record, DetailRecord, Relationship } from '../models';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CalculatorService } from '../calculator.service';
import { BenefitRuleService } from '../benefit-rule.service';

@Component({
	selector: 'record',
	templateUrl: './record.component.html',
	styleUrls: ['./record.component.css'],
	providers: [CurrencyPipe],
	encapsulation: ViewEncapsulation.None
})
export class RecordComponent implements OnInit {
	@Input() respondent_id: number;
	record: Record;

	constructor(
		private benefitRuleService: BenefitRuleService,
		private calculatorService: CalculatorService) { }

	ngOnInit() {
		this.calculatorService.summary(this.respondent_id)
			.subscribe(record => {
				this.record = record;
			})
	}
}