import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '../shared/question.service';
import { QuestionControlService } from '../shared/question-control.service';
import { Role } from '../models';
import { RecordService } from '../record.service';

@Component({
	selector: 'calculator-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
	questions: any[];
	respondents: FormArray;
	currentForm: FormGroup;
	currentPage: number = 0; 
	@Output() forms = new EventEmitter<FormArray>();

	constructor(
		private fb: FormBuilder, 
		private questionService: QuestionService, 
		private qcs: QuestionControlService,
		private recordService: RecordService) { }

	ngOnInit() {
		this.scrollToTop();
		this.questions = this.questionService.questions;
		this.respondents = this.buildRespondentForms();
		this.currentForm = this.respondents.at(0) as FormGroup;
	}

	buildRespondentForms(): FormArray {
		return this.fb.array([
			this.initPerson(Role.BENEFICIARY),
			this.initPerson(Role.SPOUSE)
		]);
	}

	initPerson(role: string): FormGroup { 
		let formGroup = this.qcs.toFormGroup(this.questions);
		formGroup.addControl('role', this.fb.control(role));
		return formGroup;
	}

	scrollToTop() {
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
	}

	changeForm(currentPage: number) {
		this.currentPage = currentPage - 1;
		this.currentForm = this.respondents.at(this.currentPage) as FormGroup;
		this.scrollToTop();
	}

	onSubmit(): void {
		this.forms.emit(this.respondents);
	}
}
