//https://angular.io/guide/http#testing-http-requests
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { CalculatorService } from './calculator.service';
import { Respondent, Record } from './models';
import { getMoney, getRespondents, getRecords } from './models/testing';
import { asyncData, asyncError } from '../testing/async-observable-helpers';

describe('CalculatorService Test Case', () => {
	let nanbcService: CalculatorService;

	beforeEach(() => {
		const spy = jasmine.createSpyObj('CalculatorService', ['summary']);
		TestBed.configureTestingModule({
			providers: [ CalculatorService ]
		});
		nanbcService = TestBed.get(CalculatorService);
	});

	describe('summary method should responded with an array of records', () => {
		let respondents: Respondent[];
		let records: Record[];

		beforeEach(() => { 
			respondents = getRespondents();
			records = getRecords();
		});

		it('should return expected records', () => {
			nanbcService.summary(respondents).subscribe(response => {
				expect(response).toBe(records, 'should return expected records')
			}, fail);

			const expectedResponse = new HttpResponse(
				{ status: 200, statusText: 'OK', body: records });
			req.event(expectedResponse);
		});
 	});
});
