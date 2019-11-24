import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'some-auth-token-if-we-set'
  })
};

export interface windowSingle {
  name: string,
  id: number,
  windowAll: number,
  uValue: number,
  area: number,
  materials: string,
  bridgeValue: number,
  protected: boolean
}
export interface property {
  name: string,
  country: string,
  era: number
}

@Injectable()

export class APIService {

  constructor(private http: HttpClient) { }

  //BaseURL will need updated when moving from Localhost
  baseURL = "http://localhost:3000"
  propertyUrl: string = this.baseURL + "/homeProperties";
  //GET METHODS

  //Returns all single windows
  getAllWindowSingle() {
    return this.http.get(`${this.baseURL}/windowSingle`).pipe(catchError(this.handleError));
  }

  //Returns single window with ID
  getWindowSingle(id: number) {
    return this.http.get(`${this.baseURL}/windowSingle/${id}`).pipe(catchError(this.handleError));
  }

  // POST METHODS 

  //Inserts single window
  addWindowSingle(singleWindow: windowSingle): Observable<windowSingle> {
    return this.http.post<windowSingle>(`${this.baseURL}/windowSingle`, singleWindow, { 
      headers: new HttpHeaders({ 'Content-Type': 'application/json', }) 
    }).pipe(catchError(this.handleError));
  }

  //Inserts property
  addProperty(property: property): Observable<property>{
    return this.http.post<property>(this.propertyUrl, property, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }


  // UPDATE METHODS


  // DELETE METHODS



  //Error Handling
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}