import { Injectable } from '@angular/core';
import { ServiceBase } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const AIRDATA_ENDPOINT = 'https://api.waqi.info/feed/';
const TOKEN = '33f2806f6b6e887634054cd71851093461538d00';

@Injectable()
export class AirdataService extends ServiceBase {

    constructor(
        http: HttpClient) {
        super(http);
    }

    getAirdata(param:string):Observable<any> {
        return this.http.get(`${AIRDATA_ENDPOINT + '' + 'beijing' + '/?token=' + TOKEN}`).pipe(
            //tap(res => console.log('Inset loaded', res)),
            map(res => res['status'] === 'ok' ? Object.assign({}, res['data']) : null),
            catchError(this.handleError<any>('Error loading inset'))
        );
    }

}
