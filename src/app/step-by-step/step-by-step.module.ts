import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepByStepComponent } from './step-by-step.component';
import { StepByStepRoutingModule } from './step-by-step-routing.module';

@NgModule({
	imports: [
		CommonModule,
		StepByStepRoutingModule
	],
	declarations: [StepByStepComponent],
	exports: [StepByStepComponent]
})
export class StepByStepModule { }
