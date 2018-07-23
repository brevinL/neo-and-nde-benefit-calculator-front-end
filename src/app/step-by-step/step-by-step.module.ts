import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepByStepComponent } from './step-by-step.component';
import { StepByStepRoutingModule } from './step-by-step-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	imports: [
		CommonModule,
		StepByStepRoutingModule,
		NgbModule
	],
	declarations: [StepByStepComponent],
	exports: [StepByStepComponent]
})
export class StepByStepModule { }
