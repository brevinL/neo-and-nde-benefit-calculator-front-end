import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form.component';
import { SummaryModule } from '../summary/summary.module';
import { CalculatorService } from '../calculator.service';

@NgModule({
	imports: [ 
		CommonModule,
		SharedModule,
		FormsModule, 
		ReactiveFormsModule,
		FormRoutingModule,
		SummaryModule
	],
	declarations: [ 
		FormComponent
	],
	providers: [ CalculatorService ]
})
export class FormModule { }
