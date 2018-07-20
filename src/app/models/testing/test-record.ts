import { Record } from '../record';

export function getRecords(): Record[] {
	return [ 
		{
			'person_id': 1,
			'year_of_birth': 1954,
			'earliest_retirement_age': 62,
			'normal_retirement_age': 66,
			'average_indexed_monthly_covered_earning': {'amount': 1071.43},
			'basic_primary_insurance_amount': {'amount': 839.30},
			'wep_primary_insurance_amount': {'amount': 411.30},
			'average_indexed_monthly_non_covered_earning': {'amount': 2380.95},
			'monthly_non_covered_pension': {'amount': 1595.24},
			'wep_reduction': {'amount': 428.00},
			'final_primary_insurance_amount': {'amount': 411.30},
			'delay_retirement_credit': 0.00,
			'early_retirement_reduction': 0.00,
			'benefit': {'amount': 411.30},
			'government_pension_offset': {'amount': 1063.49},
			'spousal_insurance_benefit': {'amount': 0.00},
			'survivor_insurance_benefit': {'amount': 355.01}
		},
		{
			'person_id': 1,
			'year_of_birth': 1954,
			'earliest_retirement_age': 62,
			'normal_retirement_age': 66,
			'average_indexed_monthly_covered_earning': {'amount': 1071.43},
			'basic_primary_insurance_amount': {'amount': 839.30},
			'wep_primary_insurance_amount': {'amount': 411.30},
			'average_indexed_monthly_non_covered_earning': {'amount': 2380.95},
			'monthly_non_covered_pension': {'amount': 1595.24},
			'wep_reduction': {'amount': 428.00},
			'final_primary_insurance_amount': {'amount': 411.30},
			'delay_retirement_credit': 0.00,
			'early_retirement_reduction': 0.00,
			'benefit': {'amount': 411.30},
			'government_pension_offset': {'amount': 1063.49},
			'spousal_insurance_benefit': {'amount': 0.00},
			'survivor_insurance_benefit': {'amount': 355.01}
		}
	];
}