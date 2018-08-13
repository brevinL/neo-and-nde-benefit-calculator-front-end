import { Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Record } from '../models';
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

	constructor(private benefitRuleService: BenefitRuleService) { }

	ngOnInit() {
		this.benefitRuleService.getRecord(this.respondent_id)
			.subscribe(record => {
				this.record = record;
			})
	}
}