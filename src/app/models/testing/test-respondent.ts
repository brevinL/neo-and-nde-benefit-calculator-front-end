import { Respondent } from '../respondent';

export function getRespondents(): Respondent[] {
	return  [
		{
			'id': 1,
			'year_of_birth': 1954, 
			'years_of_covered_earnings': 15,
			'annual_covered_earning': {'amount': 30000},
			'years_of_non_covered_earnings': 25,
			'annual_non_covered_earning': {'amount': 40000},
			'fraction_of_non_covered_aime_to_non_covered_pension': 0.67,
			'early_retirement_reduction': 0.00,
			'delay_retirement_credit': 0.00,
			'survivor_early_retirement_reduction': 0.00,
			'spousal_early_retirement_reduction': 0.00
		}
	]
}