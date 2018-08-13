import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryComponent } from './summary.component';
import { SummaryRoutingModule } from './summary-routing.module';

import { CalculatorService } from '../calculator.service';
import { BenefitRuleService } from '../benefit-rule.service';

import { RecordComponent } from '../record/record.component';

@NgModule({
	imports: [
		CommonModule,
		SummaryRoutingModule

	],
	declarations: [SummaryComponent, RecordComponent],
	exports: [SummaryComponent],
	providers: [CalculatorService, BenefitRuleService]
})
export class SummaryModule { }
