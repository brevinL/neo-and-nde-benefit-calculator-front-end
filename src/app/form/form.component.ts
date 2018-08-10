import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '../shared/question.service';
import { QuestionControlService } from '../shared/question-control.service';
import { Record, DetailRecord, Respondent, Money, Role, Relationship, RelationshipType } from '../models';
import { CalculatorService } from '../calculator.service';
import { BenefitRuleService } from '../benefit-rule.service';

@Component({
	selector: 'calculator-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css'],
	encapsulation: ViewEncapsulation.None,
	providers: [ BenefitRuleService, CalculatorService ]
})
export class FormComponent implements OnInit {
	questions: any[];
	respondents: FormArray;
	currentForm: FormGroup;
	currentPage: number = 0; 

	constructor(
		private fb: FormBuilder, 
		private questionService: QuestionService, 
		private qcs: QuestionControlService,
		private calculatorService: CalculatorService,
		private benefitRuleService: BenefitRuleService,
		private router: Router) { }

	ngOnInit() {
		this.scrollToTop();
		this.questions = this.questionService.questions;
		this.respondents = this.buildRespondentForms();
		this.currentForm = this.respondents.at(0) as FormGroup;
	}

	buildRespondentForms(): FormArray {
		return this.fb.array([
			this.initPerson(),
			this.initPerson()
		]);
	}

	initPerson(): FormGroup { 
		let formGroup = this.qcs.toFormGroup(this.questions);
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
		let respondents: Respondent[] = this.prepareToSaveRespondents(this.respondents);
		this.calculatorService.addRespondents(respondents)
			.subscribe(respondents => {
				let relationship: Relationship = this.prepareToSaveRelationship(respondents as Respondent[]);
				this.benefitRuleService.addRelationship(relationship)
					.subscribe(relationship => this.router.navigate(['/summary', {respondent: respondents[0].id}]))
			});
	}

	prepareToSaveRespondents(forms: FormArray): Respondent[] {
		const formModel = forms.value;
		const respondents: Respondent[] = formModel.map((person) => { 
			return new Respondent({
				year_of_birth: 1954,
				years_of_covered_earnings: person.years_of_covered_earnings as number,
				annual_covered_earning: new Money(person.annual_covered_earning as number),
				years_of_non_covered_earnings: person.years_of_non_covered_earnings as number,
				annual_non_covered_earning: new Money(person.annual_non_covered_earning as number),
				fraction_of_non_covered_aime_to_non_covered_pension: person.fraction_of_non_covered_aime_to_non_covered_pension as number,
				early_retirement_reduction: person.early_retirement_reduction as number,
				delay_retirement_credit: person.delay_retirement_credit as number,
				survivor_early_retirement_reduction: person.survivor_early_retirement_reduction as number,
				spousal_early_retirement_reduction: person.spousal_early_retirement_reduction as number
			});
		});
		return respondents;
	}

	//take care of content_object dynamically
	prepareToSaveRelationship(respondents: Respondent[]): Relationship {
		const relationship: Relationship = new Relationship({
				content_object1: `/api/neo-and-nde-benefit-calculator/respondent/${respondents[0].id}/`,
				content_object2: `/api/neo-and-nde-benefit-calculator/respondent/${respondents[1].id}/`,
				object_id1: respondents[0].id, 
				object_id2: respondents[1].id, 
				relationship_type: RelationshipType.MARRIED
			});

		return relationship;
	}
}
