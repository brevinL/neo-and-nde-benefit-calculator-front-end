import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation} from '@angular/core';
import { CurrencyPipe, Location } from '@angular/common';
import { Router } from '@angular/router';
import { Respondent, Record, DetailRecord, Relationship } from '../models';

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
	relationship: Relationship;
	private selectedId: number;

	constructor(
		private benefitRuleService: BenefitRuleService,
		private calculatorService: CalculatorService,
    	private route: ActivatedRoute,
    	private location: Location,
    	private router: Router) { }

	ngOnInit() {
		let relationship_id: number = +this.route.snapshot.paramMap.get('relationship');

		this.benefitRuleService.getRelationship(relationship_id)
			.subscribe(relationship => {
				this.relationship = relationship;
			})

				// this.calculatorService.summary(relationship.object_id1)
				// 	.subscribe(record => {
				// 		this.records.push(record);
				// 	});
				// this.calculatorService.summary(relationship.object_id2)
				// 	.subscribe(record => this.records.push(record));

	}

	// get beneficiary_record() { return this.records.find(record => record.person_id == this.relationship.object_id1); }
	// get spouse_record() { return this.records.find(record => record.person_id == this.relationship.object_id2); }

	goBack() {
		this.location.back();
	}

	viewStepByStep(respondent_id: number) {
		this.router.navigate(['/step-by-step', {respondent: respondent_id}])
	}
}