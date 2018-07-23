import { DetailRecord } from '..';

export function getDetailRecords(): DetailRecord[] {
	let response = [{"person_id":1,"average_indexed_monthly_covered_earning_instructions":[{"description":"Get indexed yearly earnings","expressions":["indexed yearly earnings = $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00"]},{"description":"Sort indexed yearly earnings in descending order","expressions":["indexed yearly earnings = $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00"]},{"description":"Get highest 35 indexed yearly earnings","expressions":["highest 35 indexed yearly earnings = $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00, $30,000.00"]},{"description":"Get average indexed yearly earning","expressions":["average indexed yearly earning = sum of highest 35 indexed yearly earnings / number of highest indexed yearly earnings","average indexed yearly earning = $450,000.00 / 35","average indexed yearly earning = $12,857.14"]},{"description":"Divide average indexed yearly earning by 12","expressions":["average indexed monthly earning = average indexed yearly earning / 12","average indexed monthly earning = $12,857.14 / 12","average indexed monthly earning = $1,071.43"]}],"basic_primary_insurance_amount_instructions":[{"description":"Get average indexed monthly earning","expressions":["average indexed monthly earning = $1,071.43"]},{"description":"Initalize total primary insurance amount to 0","expressions":["primary insurance amount = $0.00"]},{"description":"Add 90.0 percent his/her average indexed monthly earning up to $856.00 to total primary insurance amount","expressions":["primary insurance amount = primary insurance amount + max($0.00, factor x ( min(average indexed monthly earning, minimum dollar amount threshold) - maximum dollar amount threshold ))","primary insurance amount = max($0.00, $0.00 + 0.9 x ( min($1,071.43, $856.00) - $0.00 ))","primary insurance amount = $770.40"]},{"description":"Add 32.0 percent his/her average indexed monthly earning between $856.00 and $5,157.00 to total primary insurance amount","expressions":["primary insurance amount = primary insurance amount + max($0.00, factor x ( min(average indexed monthly earning, minimum dollar amount threshold) - maximum dollar amount threshold ))","primary insurance amount = max($0.00, $770.40 + 0.32 x ( min($1,071.43, $5,157.00) - $856.00 ))","primary insurance amount = $839.34"]},{"description":"Add 15.0 percent his/her average indexed monthly earning above $5,157.00 to total primary insurance amount","expressions":["primary insurance amount = primary insurance amount + max($0.00, factor x ( min(average indexed monthly earning, minimum dollar amount threshold) - maximum dollar amount threshold ))","primary insurance amount = max($0.00, $839.34 + 0.15 x ( min($1,071.43, $0.00) - $5,157.00 ))","primary insurance amount = $839.34"]},{"description":"Round total primary insurance amount to the next lower multiple of $0.10 if it is not already a multiple of $0.10","expressions":["primary insurance amount = floor(primary insurance amount * 10) / 10","primary insurance amount = floor($839.34 * 10) / 10","primary insurance amount = $839.30"]}],"wep_primary_insurance_amount_instructions":[{"description":"Get average indexed monthly earning","expressions":["average indexed monthly earning = $1,071.43"]},{"description":"Initalize total primary insurance amount to 0","expressions":["primary insurance amount = $0.00"]},{"description":"Add 40.0 percent his/her average indexed monthly earning up to $856.00 to total primary insurance amount","expressions":["primary insurance amount = primary insurance amount + max($0.00, factor x ( min(average indexed monthly earning, minimum dollar amount threshold) - maximum dollar amount threshold ))","primary insurance amount = max($0.00, $0.00 + 0.4 x ( min($1,071.43, $856.00) - $0.00 ))","primary insurance amount = $342.40"]},{"description":"Add 32.0 percent his/her average indexed monthly earning between $856.00 and $5,157.00 to total primary insurance amount","expressions":["primary insurance amount = primary insurance amount + max($0.00, factor x ( min(average indexed monthly earning, minimum dollar amount threshold) - maximum dollar amount threshold ))","primary insurance amount = max($0.00, $342.40 + 0.32 x ( min($1,071.43, $5,157.00) - $856.00 ))","primary insurance amount = $411.34"]},{"description":"Add 15.0 percent his/her average indexed monthly earning above $5,157.00 to total primary insurance amount","expressions":["primary insurance amount = primary insurance amount + max($0.00, factor x ( min(average indexed monthly earning, minimum dollar amount threshold) - maximum dollar amount threshold ))","primary insurance amount = max($0.00, $411.34 + 0.15 x ( min($1,071.43, $0.00) - $5,157.00 ))","primary insurance amount = $411.34"]},{"description":"Round total primary insurance amount to the next lower multiple of $0.10 if it is not already a multiple of $0.10","expressions":["primary insurance amount = floor(primary insurance amount * 10) / 10","primary insurance amount = floor($411.34 * 10) / 10","primary insurance amount = $411.30"]}],"average_indexed_monthly_non_covered_earning_instructions":[{"description":"Get indexed yearly earnings","expressions":["indexed yearly earnings = $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00"]},{"description":"Sort indexed yearly earnings in descending order","expressions":["indexed yearly earnings = $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00"]},{"description":"Get highest 35 indexed yearly earnings","expressions":["highest 35 indexed yearly earnings = $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00, $40,000.00"]},{"description":"Get average indexed yearly earning","expressions":["average indexed yearly earning = sum of highest 35 indexed yearly earnings / number of highest indexed yearly earnings","average indexed yearly earning = $1,000,000.00 / 35","average indexed yearly earning = $28,571.43"]},{"description":"Divide average indexed yearly earning by 12","expressions":["average indexed monthly earning = average indexed yearly earning / 12","average indexed monthly earning = $28,571.43 / 12","average indexed monthly earning = $2,380.95"]}],"monthly_non_covered_pension_instructions":[{"description":"Get average indexed monthly non covered earning","expressions":["average indexed monthly non covered earning = $2,380.95"]},{"description":"Get fraction of non covered AIME to non covered pension","expressions":["fraction of non covered AIME to non covered pension = 0.67"]},{"description":"Multiply average indexed monthly non covered earning with the fraction that was coverted from non covered AIME to non covered pension","expressions":["monthly_non_covered_pension = average indexed monthly non covered earning x fraction of non covered AIME to non covered pension","monthly_non_covered_pension = $2,380.95 x 0.67","monthly_non_covered_pension = $1,595.24"]}],"wep_reduction_instructions":[{"description":"Get WEP's primary insurance amount","expressions":["WEP's primary insurance amount = primary insurance amount","WEP's primary insurance amount = $411.30"]},{"description":"Get monthly non covered pension","expressions":["monthly non covered pension = $1,595.24"]},{"description":"Get primary insurance amount","expressions":["primary insurance amount = $839.30"]},{"description":"Find Windfall Elimination Provision reduction","expressions":["WEP reduction = min(monthly non covered pension x 1/2, max(primary insurance amount - WEP's primary insurance amount, 0))","WEP reduction = min($1,595.24 x 1/2, max($839.30 - $411.30, 0))","WEP reduction = min($797.62, max($428.00, 0)","WEP reduction = min($797.62, $428.00)","WEP reduction = $428.00"]}],"final_primary_insurance_amount_instructions":[{"description":"Get primary insurance amount","expressions":["primary insurance amount = $839.30"]},{"description":"Get windfall elimination provision amount","expressions":["windfall elimination provision amount = $428.00"]},{"description":"Recalculate primary insurance amount by reducing the primary insurance amount with the windfall elimination provision amount","expressions":["primary insurance amount  = primary insurance amount - windfall elimination provision","primary insurance amount  = $839.30 - $428.00","primary insurance amount = $411.30"]}],"delay_retirement_credit_instructions":[{"description":"Get normal retirement age","expressions":["normal retirement age = 66.0"]},{"description":"Get delayed retirement age","expressions":["delayed retirement age = 70.0"]},{"description":"Determine if person is eligible for delay retirement credit","expressions":["normal retirement age < delayed retirement age?","66.0 < 70.0?","True"]},{"description":"Get delay retirement age limit","expressions":["delay retirement age limit = 70"]},{"description":"Capped retirement age if retirement age is greater than delay retirement age limit","expressions":["retirement age = min(delay retirement age limit, retirement age)","retirement age = min(70, 70.0)","retirement age = 70"]},{"description":"Determine number of years delayed","expressions":["number of years delayed = retirement age + 1 - normal retirement agenumber of years delayed = 70 + 1 - 66.0","number of years delayed = 5.0"]},{"description":"Determine number of years delayed","expressions":["delay retirement benefit percentage increase = number of years delayed * monthly percent rate of increase","delay retirement benefit percentage increase = 5.0 * 8.00%","delay retirement benefit percentage increase = 40.00%"]},{"description":"Get respondent's delay retirement credit","expressions":["respondent's delay retirement credit = 0.00%"]},{"description":"Cap Delay Retirement Credit","expressions":["delay retirement credit = min(max delay retirement credit, respondent's delay retirement credit","delay retirement credit = min(40.00%, 0.00%)","delay retirement credit = 0.00%"]}],"early_retirement_reduction_instructions":[{"description":"Get normal retirement age","expressions":["normal retirement age = 66.0"]},{"description":"Get early retirement age","expressions":["early retirement age = 62.0"]},{"description":"Determine if person is eligible for early retirement benefit reduction","expressions":["normal retirement age > early retirement age?","66.0 > 62.0?","True"]},{"description":"Determine number of months before normal retirement age","expressions":["number of months before normal retirement age = | early retirement age - normal retirement age | * 12","number of months before normal retirement age = | 62.0 - 66.0 | * 12","number of months before normal retirement age = 4.0 * 12","number of months before normal retirement age = 48.0"]},{"description":"Set early retirement benefit percentage reduction to zero","expressions":["early retirement benefit percentage reduction = 0.00%"]},{"description":"For each month (up to 36.0 months) before normal retirement age, add 5/9 of 1.00% to early retirement benefit percentage reduction","expressions":["early retirement benefit percentage reduction = early retirement benefit percentage reduction + min(number of months before normal retirement age, 36.0) x 5/9 of 1.00%","early retirement benefit percentage reduction = 0.00% + min(48.0, 36.0) x 5/9 x 1.00%","early retirement benefit percentage reduction = 0.00% + 36.0 x 5/9 x 1.00%","early retirement benefit percentage reduction = 20.00%"]},{"description":"Update number of months before normal retirement age","expressions":["number of months before normal retirement age = 48.0 - 36.0","number of months before normal retirement age = 12.0"]},{"description":"For each month before normal retirement age, add 5/12 of 1.00% to early retirement benefit percentage reduction","expressions":["early retirement benefit percentage reduction = early retirement benefit percentage reduction + min(number of months before normal retirement age, infinity) x 5/12 of 1.00%","early retirement benefit percentage reduction = 20.00% + min(12.0, infinity) x 5/12 x 1.00%","early retirement benefit percentage reduction = 20.00% + 12.0 x 5/12 x 1.00%","early retirement benefit percentage reduction = 25.00%"]},{"description":"Get respondent's early retirement reduction","expressions":["respondent's early retirement reduction = 0.00%"]},{"description":"Cap Delay Retirement Credit","expressions":["early retirement reduction = min(max early retirement reduction, respondent's early retirement reduction","early retirement reduction = min(25.00%, 0.00%)","early retirement reduction = 0.00%"]}],"benefit_instructions":[{"description":"Get delay retirement credit","expressions":["delay retirement credit = 0.00%"]},{"description":"Get early retirement reduction","expressions":["early retirement reduction = 0.00%"]},{"description":"Get primary insurance amount","expressions":["primary insurance amount = $411.30"]},{"description":"Calculate benefit","expressions":["benefit = primary insurance amount x (1 + (delay retirement credit + early retirement reduction))","benefit = $411.30 x (1 + (0.00% + 0.00%))","benefit = $411.30 x 100.00%","benefit = $411.30"]}],"government_pension_offset_instructions":[{"description":"Get monthly non covered pension","expressions":["monthly non covered pension = $1,595.24"]},{"description":"Get offset","expressions":["offset = 2/3"]},{"description":"Multiply the monthly non covered pension with the offset","expressions":["government pension offset = monthly non covered pension x offset","government pension offset = $1,595.24 x 2/3","government pension offset = $1,063.49"]}],"spousal_insurance_benefit_instructions":[{"description":"Get spousal' primary insurance amount","expressions":["spousal's primary insurance amount = $1,829.80"]},{"description":"Calculate the maximum entitlement to spousal insurance benefit","expressions":["maximum benefit entitlement = spousal's primary insurance amount x maximum benefit entitlement factor","maximum benefit entitlement = $1,829.80 x 1/2","maximum benefit entitlement = $914.90"]},{"description":"Get primary insurance amount","expressions":["primary insurance amount = $839.30"]},{"description":"Determine if person is entitled to spousal insurance benefit","expressions":["primary insurance amount < maximum benefit entitlement?","$839.30 < $914.90?","True"]},{"description":"Set spousal insurance benefit to maximum benefit entitlement","expressions":["spousal insurance benefit = maximum benefit entitlement","spousal insurance benefit = $914.90"]},{"description":"Subtract the primary insurance amount from spousal insurance benefit","expressions":["spousal insurance benefit = spousal insurance benefit - primary insurance amount","spousal insurance benefit = $914.90 - $839.30","spousal insurance benefit = $75.60"]},{"description":"Get government pension offset","expressions":["government pension offset = $1,063.49"]},{"description":"Subtract the government pension offset from spousal insurance benefit","expressions":["spousal insurance benefit = spousal insurance benefit - government pension offset","spousal insurance benefit = $75.60 - $1,063.49","spousal insurance benefit = $-987.89"]}],"survivor_insurance_benefit_instructions":null},{"person_id":2,"average_indexed_monthly_covered_earning_instructions":[{"description":"Get indexed yearly earnings","expressions":["indexed yearly earnings = $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00"]},{"description":"Sort indexed yearly earnings in descending order","expressions":["indexed yearly earnings = $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00"]},{"description":"Get highest 35 indexed yearly earnings","expressions":["highest 35 indexed yearly earnings = $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00, $50,000.00"]},{"description":"Get average indexed yearly earning","expressions":["average indexed yearly earning = sum of highest 35 indexed yearly earnings / number of highest indexed yearly earnings","average indexed yearly earning = $1,750,000.00 / 35","average indexed yearly earning = $50,000.00"]},{"description":"Divide average indexed yearly earning by 12","expressions":["average indexed monthly earning = average indexed yearly earning / 12","average indexed monthly earning = $50,000.00 / 12","average indexed monthly earning = $4,166.67"]}],"basic_primary_insurance_amount_instructions":[{"description":"Get average indexed monthly earning","expressions":["average indexed monthly earning = $4,166.67"]},{"description":"Initalize total primary insurance amount to 0","expressions":["primary insurance amount = $0.00"]},{"description":"Add 90.0 percent his/her average indexed monthly earning up to $856.00 to total primary insurance amount","expressions":["primary insurance amount = primary insurance amount + max($0.00, factor x ( min(average indexed monthly earning, minimum dollar amount threshold) - maximum dollar amount threshold ))","primary insurance amount = max($0.00, $0.00 + 0.9 x ( min($4,166.67, $856.00) - $0.00 ))","primary insurance amount = $770.40"]},{"description":"Add 32.0 percent his/her average indexed monthly earning between $856.00 and $5,157.00 to total primary insurance amount","expressions":["primary insurance amount = primary insurance amount + max($0.00, factor x ( min(average indexed monthly earning, minimum dollar amount threshold) - maximum dollar amount threshold ))","primary insurance amount = max($0.00, $770.40 + 0.32 x ( min($4,166.67, $5,157.00) - $856.00 ))","primary insurance amount = $1,829.81"]},{"description":"Add 15.0 percent his/her average indexed monthly earning above $5,157.00 to total primary insurance amount","expressions":["primary insurance amount = primary insurance amount + max($0.00, factor x ( min(average indexed monthly earning, minimum dollar amount threshold) - maximum dollar amount threshold ))","primary insurance amount = max($0.00, $1,829.81 + 0.15 x ( min($4,166.67, $0.00) - $5,157.00 ))","primary insurance amount = $1,829.81"]},{"description":"Round total primary insurance amount to the next lower multiple of $0.10 if it is not already a multiple of $0.10","expressions":["primary insurance amount = floor(primary insurance amount * 10) / 10","primary insurance amount = floor($1,829.81 * 10) / 10","primary insurance amount = $1,829.80"]}],"wep_primary_insurance_amount_instructions":[{"description":"Get average indexed monthly earning","expressions":["average indexed monthly earning = $4,166.67"]},{"description":"Initalize total primary insurance amount to 0","expressions":["primary insurance amount = $0.00"]},{"description":"Add 90.0 percent his/her average indexed monthly earning up to $856.00 to total primary insurance amount","expressions":["primary insurance amount = primary insurance amount + max($0.00, factor x ( min(average indexed monthly earning, minimum dollar amount threshold) - maximum dollar amount threshold ))","primary insurance amount = max($0.00, $0.00 + 0.9 x ( min($4,166.67, $856.00) - $0.00 ))","primary insurance amount = $770.40"]},{"description":"Add 32.0 percent his/her average indexed monthly earning between $856.00 and $5,157.00 to total primary insurance amount","expressions":["primary insurance amount = primary insurance amount + max($0.00, factor x ( min(average indexed monthly earning, minimum dollar amount threshold) - maximum dollar amount threshold ))","primary insurance amount = max($0.00, $770.40 + 0.32 x ( min($4,166.67, $5,157.00) - $856.00 ))","primary insurance amount = $1,829.81"]},{"description":"Add 15.0 percent his/her average indexed monthly earning above $5,157.00 to total primary insurance amount","expressions":["primary insurance amount = primary insurance amount + max($0.00, factor x ( min(average indexed monthly earning, minimum dollar amount threshold) - maximum dollar amount threshold ))","primary insurance amount = max($0.00, $1,829.81 + 0.15 x ( min($4,166.67, $0.00) - $5,157.00 ))","primary insurance amount = $1,829.81"]},{"description":"Round total primary insurance amount to the next lower multiple of $0.10 if it is not already a multiple of $0.10","expressions":["primary insurance amount = floor(primary insurance amount * 10) / 10","primary insurance amount = floor($1,829.81 * 10) / 10","primary insurance amount = $1,829.80"]}],"average_indexed_monthly_non_covered_earning_instructions":[{"description":"Get indexed yearly earnings","expressions":["indexed yearly earnings = "]},{"description":"Sort indexed yearly earnings in descending order","expressions":["indexed yearly earnings = "]},{"description":"Get highest 35 indexed yearly earnings","expressions":["highest 35 indexed yearly earnings = "]},{"description":"Get average indexed yearly earning","expressions":["average indexed yearly earning = sum of highest 35 indexed yearly earnings / number of highest indexed yearly earnings","average indexed yearly earning = 0 / 35","average indexed yearly earning = 0.0"]},{"description":"Divide average indexed yearly earning by 12","expressions":["average indexed monthly earning = average indexed yearly earning / 12","average indexed monthly earning = 0.0 / 12","average indexed monthly earning = 0.0"]}],"monthly_non_covered_pension_instructions":[{"description":"Get average indexed monthly non covered earning","expressions":["average indexed monthly non covered earning = $0.00"]},{"description":"Get fraction of non covered AIME to non covered pension","expressions":["fraction of non covered AIME to non covered pension = 0.67"]},{"description":"Multiply average indexed monthly non covered earning with the fraction that was coverted from non covered AIME to non covered pension","expressions":["monthly_non_covered_pension = average indexed monthly non covered earning x fraction of non covered AIME to non covered pension","monthly_non_covered_pension = $0.00 x 0.67","monthly_non_covered_pension = $0.00"]}],"wep_reduction_instructions":[{"description":"Get WEP's primary insurance amount","expressions":["WEP's primary insurance amount = primary insurance amount","WEP's primary insurance amount = $1,829.80"]},{"description":"Get monthly non covered pension","expressions":["monthly non covered pension = $0.00"]},{"description":"Get primary insurance amount","expressions":["primary insurance amount = $1,829.80"]},{"description":"Find Windfall Elimination Provision reduction","expressions":["WEP reduction = min(monthly non covered pension x 1/2, max(primary insurance amount - WEP's primary insurance amount, 0))","WEP reduction = min($0.00 x 1/2, max($1,829.80 - $1,829.80, 0))","WEP reduction = min($0.00, max($0.00, 0)","WEP reduction = min($0.00, $0.00)","WEP reduction = $0.00"]}],"final_primary_insurance_amount_instructions":[{"description":"Get primary insurance amount","expressions":["primary insurance amount = $1,829.80"]},{"description":"Get windfall elimination provision amount","expressions":["windfall elimination provision amount = $0.00"]},{"description":"Recalculate primary insurance amount by reducing the primary insurance amount with the windfall elimination provision amount","expressions":["primary insurance amount  = primary insurance amount - windfall elimination provision","primary insurance amount  = $1,829.80 - $0.00","primary insurance amount = $1,829.80"]}],"delay_retirement_credit_instructions":[{"description":"Get normal retirement age","expressions":["normal retirement age = 66.0"]},{"description":"Get delayed retirement age","expressions":["delayed retirement age = 70.0"]},{"description":"Determine if person is eligible for delay retirement credit","expressions":["normal retirement age < delayed retirement age?","66.0 < 70.0?","True"]},{"description":"Get delay retirement age limit","expressions":["delay retirement age limit = 70"]},{"description":"Capped retirement age if retirement age is greater than delay retirement age limit","expressions":["retirement age = min(delay retirement age limit, retirement age)","retirement age = min(70, 70.0)","retirement age = 70"]},{"description":"Determine number of years delayed","expressions":["number of years delayed = retirement age + 1 - normal retirement agenumber of years delayed = 70 + 1 - 66.0","number of years delayed = 5.0"]},{"description":"Determine number of years delayed","expressions":["delay retirement benefit percentage increase = number of years delayed * monthly percent rate of increase","delay retirement benefit percentage increase = 5.0 * 8.00%","delay retirement benefit percentage increase = 40.00%"]},{"description":"Get respondent's delay retirement credit","expressions":["respondent's delay retirement credit = 0.00%"]},{"description":"Cap Delay Retirement Credit","expressions":["delay retirement credit = min(max delay retirement credit, respondent's delay retirement credit","delay retirement credit = min(40.00%, 0.00%)","delay retirement credit = 0.00%"]}],"early_retirement_reduction_instructions":[{"description":"Get normal retirement age","expressions":["normal retirement age = 66.0"]},{"description":"Get early retirement age","expressions":["early retirement age = 62.0"]},{"description":"Determine if person is eligible for early retirement benefit reduction","expressions":["normal retirement age > early retirement age?","66.0 > 62.0?","True"]},{"description":"Determine number of months before normal retirement age","expressions":["number of months before normal retirement age = | early retirement age - normal retirement age | * 12","number of months before normal retirement age = | 62.0 - 66.0 | * 12","number of months before normal retirement age = 4.0 * 12","number of months before normal retirement age = 48.0"]},{"description":"Set early retirement benefit percentage reduction to zero","expressions":["early retirement benefit percentage reduction = 0.00%"]},{"description":"For each month (up to 36.0 months) before normal retirement age, add 5/9 of 1.00% to early retirement benefit percentage reduction","expressions":["early retirement benefit percentage reduction = early retirement benefit percentage reduction + min(number of months before normal retirement age, 36.0) x 5/9 of 1.00%","early retirement benefit percentage reduction = 0.00% + min(48.0, 36.0) x 5/9 x 1.00%","early retirement benefit percentage reduction = 0.00% + 36.0 x 5/9 x 1.00%","early retirement benefit percentage reduction = 20.00%"]},{"description":"Update number of months before normal retirement age","expressions":["number of months before normal retirement age = 48.0 - 36.0","number of months before normal retirement age = 12.0"]},{"description":"For each month before normal retirement age, add 5/12 of 1.00% to early retirement benefit percentage reduction","expressions":["early retirement benefit percentage reduction = early retirement benefit percentage reduction + min(number of months before normal retirement age, infinity) x 5/12 of 1.00%","early retirement benefit percentage reduction = 20.00% + min(12.0, infinity) x 5/12 x 1.00%","early retirement benefit percentage reduction = 20.00% + 12.0 x 5/12 x 1.00%","early retirement benefit percentage reduction = 25.00%"]},{"description":"Get respondent's early retirement reduction","expressions":["respondent's early retirement reduction = 0.00%"]},{"description":"Cap Delay Retirement Credit","expressions":["early retirement reduction = min(max early retirement reduction, respondent's early retirement reduction","early retirement reduction = min(25.00%, 0.00%)","early retirement reduction = 0.00%"]}],"benefit_instructions":[{"description":"Get delay retirement credit","expressions":["delay retirement credit = 0.00%"]},{"description":"Get early retirement reduction","expressions":["early retirement reduction = 0.00%"]},{"description":"Get primary insurance amount","expressions":["primary insurance amount = $1,829.80"]},{"description":"Calculate benefit","expressions":["benefit = primary insurance amount x (1 + (delay retirement credit + early retirement reduction))","benefit = $1,829.80 x (1 + (0.00% + 0.00%))","benefit = $1,829.80 x 100.00%","benefit = $1,829.80"]}],"government_pension_offset_instructions":[{"description":"Get monthly non covered pension","expressions":["monthly non covered pension = $0.00"]},{"description":"Get offset","expressions":["offset = 2/3"]},{"description":"Multiply the monthly non covered pension with the offset","expressions":["government pension offset = monthly non covered pension x offset","government pension offset = $0.00 x 2/3","government pension offset = $0.00"]}],"spousal_insurance_benefit_instructions":[{"description":"Get spousal' primary insurance amount","expressions":["spousal's primary insurance amount = $839.30"]},{"description":"Calculate the maximum entitlement to spousal insurance benefit","expressions":["maximum benefit entitlement = spousal's primary insurance amount x maximum benefit entitlement factor","maximum benefit entitlement = $839.30 x 1/2","maximum benefit entitlement = $419.65"]},{"description":"Get primary insurance amount","expressions":["primary insurance amount = $1,829.80"]},{"description":"Determine if person is entitled to spousal insurance benefit","expressions":["primary insurance amount < maximum benefit entitlement?","$1,829.80 < $419.65?","False"]},{"description":"Set spousal insurance benefit to zero","expressions":["spousal insurance benefit = $0.00"]}],"survivor_insurance_benefit_instructions":null}];
	let records: DetailRecord[] = [];
	for(let person of response){
		records.push(new DetailRecord(person));
	}
	return records;
}