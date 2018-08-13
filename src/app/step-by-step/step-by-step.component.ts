import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DetailRecord, Respondent } from '../models';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { CalculatorService } from '../calculator.service';
import { BenefitRuleService } from '../benefit-rule.service';

@Component({
	selector: 'step-by-step',
	templateUrl: './step-by-step.component.html',
	styleUrls: ['./step-by-step.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class StepByStepComponent implements OnInit {
	@Input() respondent_id: number;
	respondent: Respondent;
	detail_record: DetailRecord;

	constructor(
		private benefitRuleService: BenefitRuleService,
		private calculatorService: CalculatorService,
		private route: ActivatedRoute,
    	private location: Location,
    	private router: Router) { }

	ngOnInit() {
		let respondent_id: number = +this.route.snapshot.paramMap.get('respondent');
		this.calculatorService.getRespondent(respondent_id)
			.subscribe(respondent => this.respondent = respondent);
		this.calculatorService.stepByStep(respondent_id)
			.subscribe(detail_record => {
				console.log(detail_record);
				this.detail_record = detail_record
			});
	}

	scrollToTop() {
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
	}

	goBack() {
		this.location.back();
	}
}
