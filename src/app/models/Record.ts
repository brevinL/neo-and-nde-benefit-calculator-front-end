import { Money } from './Money';
import { Instruction } from './Instruction';

export interface IRecord {
	person_id: number;
	year_of_birth: number;
	earliest_retirement_age: number;
	normal_retirement_age: number;
	average_indexed_monthly_covered_earning: Money;
	basic_primary_insurance_amount: Money;
	wep_primary_insurance_amount: Money;
	average_indexed_monthly_non_covered_earning: Money;
	monthly_non_covered_pension: Money;
	wep_reduction: Money;
	final_primary_insurance_amount: Money;
	delay_retirement_credit: number;
	early_retirement_reduction: number;
	benefit: Money;
	government_pension_offset: Money;
	spousal_insurance_benefit: Money;
	survivor_insurance_benefit: Money;
}

export class Record implements IRecord {
	public person_id: number;
	public year_of_birth: number;
	public earliest_retirement_age: number;
	public normal_retirement_age: number;
	public average_indexed_monthly_covered_earning: Money;
	public basic_primary_insurance_amount: Money;
	public wep_primary_insurance_amount: Money;
	public average_indexed_monthly_non_covered_earning: Money;
	public monthly_non_covered_pension: Money;
	public wep_reduction: Money;
	public final_primary_insurance_amount: Money;
	public delay_retirement_credit: number;
	public early_retirement_reduction: number;
	public benefit: Money;
	public government_pension_offset: Money;
	public spousal_insurance_benefit: Money;
	public survivor_insurance_benefit: Money;

	constructor(obj: IRecord) {
		this.person_id = obj.person_id;
		this.year_of_birth = obj.year_of_birth;
		this.earliest_retirement_age = obj.earliest_retirement_age;
		this.normal_retirement_age = obj.normal_retirement_age;
		this.average_indexed_monthly_covered_earning = obj.average_indexed_monthly_covered_earning;
		this.basic_primary_insurance_amount = obj.basic_primary_insurance_amount;
		this.wep_primary_insurance_amount = obj.wep_primary_insurance_amount;
		this.average_indexed_monthly_non_covered_earning = obj.average_indexed_monthly_non_covered_earning;
		this.monthly_non_covered_pension = obj.monthly_non_covered_pension;
		this.wep_reduction = obj.wep_reduction;
		this.final_primary_insurance_amount = obj.final_primary_insurance_amount;
		this.delay_retirement_credit = obj.delay_retirement_credit;
		this.early_retirement_reduction = obj.early_retirement_reduction;
		this.benefit = obj.benefit;
		this.government_pension_offset = obj.government_pension_offset;
		this.spousal_insurance_benefit = obj.spousal_insurance_benefit;
		this.survivor_insurance_benefit = obj.survivor_insurance_benefit;
	}
}

export interface IDetailRecord extends IRecord {
	earliest_retirement_age_instructions: Instruction[];
	normal_retirement_age_instructions: Instruction[];
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

export class DetailRecord extends Record implements IRecord {
	earliest_retirement_age_instructions: Instruction[];
	normal_retirement_age_instructions: Instruction[];
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
		super(obj);
		this.earliest_retirement_age_instructions = obj.earliest_retirement_age_instructions;
		this.normal_retirement_age_instructions = obj.normal_retirement_age_instructions;
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
}