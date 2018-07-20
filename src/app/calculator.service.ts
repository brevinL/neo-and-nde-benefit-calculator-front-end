import { Injectable, Inject, Optional } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Respondent, Relationship, IRecord, Record, } from './models';
import { Observable, of } from 'rxjs';

declare const _: any;

const headersConfig = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'access-control-allow-origin'
	})
};

@Injectable()
export class CalculatorService {
	private url: string = "api/neo-and-nde-benefit-calculator";

	constructor(private http: HttpClient,
	@Optional() @Inject(APP_BASE_HREF) origin: string) { 
		this.url = `${origin}/${this.url}`;
	}

	summary(respondents: Respondent[], relationships: Relationship[]): Observable<IRecord[]> {
		let request = JSON.stringify({'respondents': respondents, 'relationships': relationships});
		return this.http.post(`${this.url}/summary/`, request)
			.pipe(
				map((response: {"records": IRecord[]}) => {
				 	return response.records;
				})
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
