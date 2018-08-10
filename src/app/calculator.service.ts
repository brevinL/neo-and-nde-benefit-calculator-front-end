import { Injectable, Inject, Optional } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { IRespondent, Respondent, Relationship, IRecord, Record, IDetailRecord, DetailRecord } from './models';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';

const headersConfig = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

const API_URL = environment.apiUrl;

@Injectable()
export class CalculatorService {
	private url: string = `api/neo-and-nde-benefit-calculator`;

	constructor(private http: HttpClient) {}

	getRespondent(id): Observable<Respondent> {
		return this.http.get(`${API_URL}/${this.url}/respondent/?respondent=${id}`, headersConfig)
			.pipe(
				map((response: IRespondent) => new Respondent(response))
			);
	}

	addRespondents(respondents: Respondent[]) {
		let request = JSON.stringify(respondents);
		return this.http.post(`${API_URL}/${this.url}/respondent/`, request, headersConfig)
			.pipe(
				tap(_ => this.log(``)),
				catchError(this.handleError<Respondent[]>('addRespondents', []))
			);
	}

	summary(id: number): Observable<Record> {
		return this.http.get(`${API_URL}/${this.url}/record/summary/?respondent=${id}`, headersConfig)
			.pipe(
				map((response: IRecord) => new Record(response))
			);
	}

	stepByStep(respondent_id: number): Observable<DetailRecord[]> {
		return this.http.get(`${API_URL}/${this.url}/record/stepByStep/?respondent=${respondent_id}`, headersConfig)
			.pipe(
				map((response: {'detail_records': IDetailRecord[]}) => response.detail_records.map((detailRecord) => new DetailRecord(detailRecord)))
			);
	}

	/**
	* Handle Http operation that failed.
	* Let the app continue.
	* @param operation - name of the operation that failed
	* @param result - optional value to return as the observable result
	*/
	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// TODO: better job of transforming error for user consumption
			this.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}

	/** Log a HeroService message with the MessageService */
	private log(message: string) {
		//this.messageService.add('HeroService: ' + message);
	}
}
