import { Injectable, Inject, Optional } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Respondent, Relationship, IRecord, Record, IDetailRecord, DetailRecord } from './models';
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

	summary(respondents: Respondent[], relationships: Relationship[]): Observable<Record[]> {
		let request = JSON.stringify({'respondents': respondents, 'relationships': relationships});
		return this.http.post(`${API_URL}/${this.url}/summary/`, request, headersConfig)
			.pipe(
				map((response: {"records": IRecord[]}) => response.records.map((record) => new Record(record)))
			);
	}

	stepByStep(respondents: Respondent[], relationships: Relationship[]): Observable<DetailRecord[]> {
		let request = JSON.stringify({'respondents': respondents, 'relationships': relationships});
		return this.http.post(`${API_URL}/${this.url}/stepByStep/`, request, headersConfig)
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
