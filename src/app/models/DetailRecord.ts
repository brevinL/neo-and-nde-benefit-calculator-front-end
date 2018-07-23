import { Money } from './Money';
import { Instruction } from './Instruction';

export interface IDetailRecord {
	person_id: number;
	// earliest_retirement_age_instructions: Instruction[];
	// normal_retirement_age_instructions: Instruction[];
	average_indexed_monthly_covered_earning_instructions: Instruction[];
	basic_primary_insurance_amount_instructions: Instruction[];
	wep_primary_insurance_amount_instructions: Instruction[];
	average_indexed_monthly_non_covered_earning_instructions: Instruction[];
	monthly_non_covered_pension_instructions: Instruction[];
	wep_reduction_instructions: Instruction[];
	final_primary_insurance_amount_instructions: Instruction[];
	delay_retirement_credit_instructions: Instruction[];
	early_retirement_reduction_instructions: Instruction[];
	benefit_instructions: Instruction[];
	government_pension_offset_instructions: Instruction[];
	spousal_insurance_benefit_instructions: Instruction[];
	survivor_insurance_benefit_instructions: Instruction[];
}

export class DetailRecord implements IDetailRecord {
	person_id: number;
	// earliest_retirement_age_instructions: Instruction[];
	// normal_retirement_age_instructions: Instruction[];
	average_indexed_monthly_covered_earning_instructions: Instruction[];
	basic_primary_insurance_amount_instructions: Instruction[];
	wep_primary_insurance_amount_instructions: Instruction[];
	average_indexed_monthly_non_covered_earning_instructions: Instruction[];
	monthly_non_covered_pension_instructions: Instruction[];
	wep_reduction_instructions: Instruction[];
	final_primary_insurance_amount_instructions: Instruction[];
	delay_retirement_credit_instructions: Instruction[];
	early_retirement_reduction_instructions: Instruction[];
	benefit_instructions: Instruction[];
	government_pension_offset_instructions: Instruction[];
	spousal_insurance_benefit_instructions: Instruction[];
	survivor_insurance_benefit_instructions: Instruction[];

	constructor(obj: IDetailRecord) {
		this.person_id = obj.person_id;
		// this.earliest_retirement_age_instructions = obj.earliest_retirement_age_instructions;
		// this.normal_retirement_age_instructions = obj.normal_retirement_age_instructions;
		this.average_indexed_monthly_covered_earning_instructions = obj.average_indexed_monthly_covered_earning_instructions;
		this.basic_primary_insurance_amount_instructions = obj.basic_primary_insurance_amount_instructions;
		this.wep_primary_insurance_amount_instructions = obj.wep_primary_insurance_amount_instructions;
		this.average_indexed_monthly_non_covered_earning_instructions = obj.average_indexed_monthly_non_covered_earning_instructions;
		this.monthly_non_covered_pension_instructions = obj.monthly_non_covered_pension_instructions;
		this.wep_reduction_instructions = obj.wep_reduction_instructions;
		this.final_primary_insurance_amount_instructions = obj.final_primary_insurance_amount_instructions;
		this.delay_retirement_credit_instructions = obj.delay_retirement_credit_instructions;
		this.early_retirement_reduction_instructions = obj.early_retirement_reduction_instructions;
		this.benefit_instructions = obj.benefit_instructions;
		this.government_pension_offset_instructions = obj.government_pension_offset_instructions;
		this.spousal_insurance_benefit_instructions = obj.spousal_insurance_benefit_instructions;
		this.survivor_insurance_benefit_instructions = obj.survivor_insurance_benefit_instructions;
	}

	get procedure() {
		return [
			{name: "Average Indexed Monthly Covered Earning", instructions: this.average_indexed_monthly_covered_earning_instructions, order: 1},
			{name: "Basic Primary Insurance Amount", instructions: this.basic_primary_insurance_amount_instructions, order: 2},
			{name: "Windfall Elimination Provision's Primary Insurance Amount", instructions: this.wep_primary_insurance_amount_instructions, order: 3},
			{name: "Average Indexed Monthly Non-Covered Earning", instructions: this.average_indexed_monthly_non_covered_earning_instructions, order: 4},
			{name: "Monthly Non-Covered Pension", instructions: this.monthly_non_covered_pension_instructions, order: 5},
			{name: "Windfall Elimination Provision's Reduction", instructions: this.wep_reduction_instructions, order: 6},
			{name: "Final Primary Insurance Amount", instructions: this.final_primary_insurance_amount_instructions, order: 7},
			{name: "Delay Retirement Credit", instructions: this.delay_retirement_credit_instructions, order: 8},
			{name: "Early Retirement Reduction", instructions: this.early_retirement_reduction_instructions, order: 9},
			{name: "Benefit", instructions: this.benefit_instructions, order: 10},
			{name: "Government Pension Offset", instructions: this.government_pension_offset_instructions, order: 11},
			{name: "Spousal Insurance Benefit", instructions: this.spousal_insurance_benefit_instructions, order: 12},
			{name: "Survivor Insurance Benefit", instructions: this.survivor_insurance_benefit_instructions, order: 13}
		];
	}
}