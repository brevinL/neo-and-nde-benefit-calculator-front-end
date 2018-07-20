import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '../shared/question.service';
import { QuestionControlService } from '../shared/question-control.service';
import { Record, Respondent, Money, Role, Relationship, RelationshipType } from '../models';
import { CalculatorService } from '../calculator.service';

@Component({
	selector: 'calculator',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css'],
	providers: [QuestionService, QuestionControlService],
	encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
	questions: any[];
	form: FormGroup;
	records: Record[];

	current: number;

	constructor(
		private fb: FormBuilder, 
		private questionService: QuestionService, 
		private qcs: QuestionControlService,
		private calculatorService: CalculatorService) { }

	ngOnInit() {
		this.questions = this.questionService.questions;
		this.form = this.buildForm();
		this.current = 0;
	}

	buildForm(): FormGroup {
		return this.fb.group({
			people: this.fb.array([
				this.initPerson(Role.BENEFICIARY),
				this.initPerson(Role.SPOUSE)
			])
		});
	}

	get people(): FormArray { return this.form.get('people') as FormArray; }

	initPerson(role: string): FormGroup { 
		let formGroup = this.qcs.toFormGroup(this.questions);
		formGroup.addControl('role', this.fb.control(role));
		return formGroup;
	}

	scrollToTop() {
		window.scrollTo(0, 0);
	}

	previous(): void {
		this.scrollToTop();
		this.current--;
	}

	next(): void {
		this.scrollToTop();
		this.current++;
	}

	onSubmit(): void {
		let respondents: Respondent[] = this.prepareToSaveRespondents();
		let relationships: Relationship[] = this.prepareToSaveRelationships();
		this.calculatorService.summary(respondents, relationships).subscribe(
			records => this.records = records
		);
	}

	prepareToSaveRespondents(): Respondent[] {
		const formModel = this.form.value;
		const respondents: Respondent[] = formModel.people.map((person, index) => { 
			return new Respondent({
				id: index,
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

	prepareToSaveRelationships(): Relationship[] {
		const formModel = this.form.value;
		const nonBeneficiaryModels = formModel.people.filter(person => person.role != Role.BENEFICIARY);
		const relationships: Relationship[] = nonBeneficiaryModels.map((nonBeneficiary, index) => { 
			return new Relationship({
				person1_id: 0, 
				person2_id: index, 
				relationship_type: nonBeneficiary.role == Role.SPOUSE? RelationshipType.MARRIED : undefined
			}); 
		});
		return relationships;
	}
}
