import { Component, ViewEncapsulation } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Record, DetailRecord, Respondent, Money, Role, Relationship, RelationshipType } from './models';
import { CalculatorService } from './calculator.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {
	title = 'Non-Covered Earnings Offset and Non-Covered Dual Entitlement Benefit Calculations';
	forms: FormArray;
	records: Record[];
	detailRecords: DetailRecord[];

	constructor(private calculatorService: CalculatorService) { }

	onSubmit(forms: FormArray): void {
		this.forms = forms;

		let respondents: Respondent[] = this.prepareToSaveRespondents(forms);
		let relationships: Relationship[] = this.prepareToSaveRelationships(forms);
		this.calculatorService.summary(respondents, relationships).subscribe(
			records => {
				this.records = records;
			});
	}

	prepareToSaveRespondents(forms: FormArray): Respondent[] {
		const formModel = forms.value;
		const respondents: Respondent[] = formModel.map((person, index) => { 
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

	//look into cartesian product if you want to generate all possible pairs 
	//iff there are various type of inputted people
	prepareToSaveRelationships(forms: FormArray): Relationship[] {
		const relationships: Relationship[] = [
			new Relationship({
				person1_id: 0, 
				person2_id: 1, 
				relationship_type: RelationshipType.MARRIED
			}) 
		];

		return relationships;
	}

	viewStepByStep(detailRecords: DetailRecord[]) {
		let respondents: Respondent[] = this.prepareToSaveRespondents(this.forms);
		let relationships: Relationship[] = this.prepareToSaveRelationships(this.forms);
		this.calculatorService.stepByStep(respondents, relationships).subscribe(
			detailRecords => {
				this.detailRecords = detailRecords;
			});
	}
}
