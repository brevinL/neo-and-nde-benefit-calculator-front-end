import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Respondent, Record, DetailRecord } from '../models';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CalculatorService } from '../calculator.service';
import { BenefitRuleService } from '../benefit-rule.service';

@Component({
	selector: 'summary',
	templateUrl: './summary.component.html',
	styleUrls: ['./summary.component.css'],
	providers: [CurrencyPipe],
	encapsulation: ViewEncapsulation.None
})
export class SummaryComponent implements OnInit {
	respondent: Respondent;
	record: Record;
	private selectedId: number;

	constructor(
		private benefitRuleService: BenefitRuleService,
		private calculatorService: CalculatorService,
    	private route: ActivatedRoute) { }

	ngOnInit() {
		let respondent_id = +this.route.snapshot.paramMap.get('respondent');
		this.calculatorService.summary(respondent_id)
			.subscribe(record => this.record = record);
	}

	clickedStepByStepBtn() {
		// this.viewStepByStep.emit(true);
	}
}