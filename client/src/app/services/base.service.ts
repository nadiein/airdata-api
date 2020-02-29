import { Observable, of } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

export class ServiceBase {

    constructor(
        protected http: HttpClient
    ) { }

    headers =  new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json, text/plain, */*'
    })

    options = {
        withCredentials: true,
        headers: this.headers
    }

    //static lastSearchUrl:string;

    handleBusinessError(message:string, details:any) {
        console.error(message + '. Reason: ' + details); // TODO: show toastr
        return null;
    }

    protected handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error); // TODO: show toastr
          return of(result as T);
        }
    }

}