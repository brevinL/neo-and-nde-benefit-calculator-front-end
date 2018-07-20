import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryComponent } from './summary.component';
import { SummaryRoutingModule } from './summary-routing.module';

@NgModule({
	imports: [
		CommonModule,
		SummaryRoutingModule
	],
	declarations: [SummaryComponent],
	exports: [SummaryComponent]
})
export class SummaryModule { }
