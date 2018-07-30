import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
import { Record, DetailRecord } from './models';

@Injectable()
export class RecordService {

	// Observable string sources
	private recordSource = new Subject<Record[]>();
	private detailRecordSource = new Subject<DetailRecord[]>();

	// Observable string streams
	record$ = this.recordSource.asObservable();
	detailRecord$ = this.detailRecordSource.asObservable();

	// Service message commands
	getRecords(records: Record[]) {
		this.recordSource.next(records);
	}

	getDetailRecords(detailRecords: DetailRecord[]) {
		this.detailRecordSource.next(detailRecords);
	}
}