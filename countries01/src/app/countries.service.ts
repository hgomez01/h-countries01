import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

// import { Observable, of } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';

import { Country } from './country.model';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// }

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl = 'https://restcountries.eu/rest/v2/'

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    const url = `${this.baseUrl}regionalbloc/cais`;
    // const url = `${this.baseUrl}/`;
    return this.http.get(url).pipe(
      map((data: any[]) => data.map((item: any) => new Country(
        item.name,
        item.falg,
        item.capital,
        item.population,
      ))),
    );
   }
  
  // private extractData(res: Response) {
  //   let body = res;
  //   return body || { };

  // public name: string,
  //   public flag: string,
  //   public capital: string,
  //   public population: number,
  // }


  // getCentralAmericaCountries(): Observable<Country[]> {
  //   const url = `${this.baseUrl}regionalbloc/cais`;
  //   return this.http.get<Country[]>(url).pipe(
  //     catchError(this.handleError('getCountries', []))
  //   );
  // }

  // getProducts(): Observable<any> {
  //   const  url = `${this.baseUrl}regionalbloc/cais`;
  //   return this.http.get(url).pipe(
  //     map(this.extractData));
  // }


//   getUsers(): Observable<Country[]> {
//     const url = `${this.baseUrl}regionalbloc/cais`;
//     return this.http.get<Country[]>(url);
// }


// getOrders(): Promise<Country[]> {
//   const url = `${this.baseUrl}regionalbloc/cais`;
//   return this.http
//     .get<Country[]>(url)
//     .toPromise()
//     .then(response => response);
// }

// private static _handleError(err: HttpErrorResponse | any) {
//   return Observable.throw(err.message || 'Error: Unable to complete request.');
// }


//   private handleError<T> (operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {

//       // TODO: send the error to remote logging infrastructure
//       console.error(error); // log to console instead

//       // TODO: better job of transforming error for user consumption
//       console.log(`${operation} failed: ${error.message}`);

//       // Let the app keep running by returning an empty result.
//       return of(result as T);
//     }
//   };
}
