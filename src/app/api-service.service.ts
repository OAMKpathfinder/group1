import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { catchError } from "rxjs/operators";

export interface windowSingle {
  name: string;
  id: number;
  windowAll: number;
  uValue: number;
  area: number;
  materials: string;
  bridgeValue: number;
  protected: boolean;
}

export interface door {
  name: string;
  id: number;
  doors: number;
  uValue: number;
  area: number;
  materials: string;
  bridgeValue: number;
  protected: boolean;
}

export interface roofConstruction {
  id: number;
  properties: number;
  uValue: number;
  area: number;
  materials: string;
  protected: boolean;
}

@Injectable()
export class APIService {
  constructor(private http: HttpClient) {}

  //BaseURL will need updated when moving from Localhost
  baseURL = "http://localhost:3000";

  //GET METHODS

  //Returns all single windows
  getAllWindowSingle() {
    return this.http
      .get(`${this.baseURL}/windowSingle`)
      .pipe(catchError(this.handleError));
  }

  //Returns single window with ID
  getWindowSingle(id: number) {
    return this.http
      .get(`${this.baseURL}/windowSingle/${id}`)
      .pipe(catchError(this.handleError));
  }

  getDoors() {
    return this.http
      .get(`${this.baseURL}/doors`)
      .pipe(catchError(this.handleError));
  }

  getDoor(id: number) {
    return this.http
      .get(`${this.baseURL}/door/${id}`)
      .pipe(catchError(this.handleError));
  }

  getRoofies() {
    return this.http
      .get(`${this.baseURL}/roofConstruction`)
      .pipe(catchError(this.handleError));
  }

  getRoof(id: number) {
    return this.http
      .get(`${this.baseURL}/roofConstruction/${id}`)
      .pipe(catchError(this.handleError));
  }

  // POST METHODS

  //Inserts single window
  addWindowSingle(singleWindow: windowSingle): Observable<windowSingle> {
    return this.http
      .post<windowSingle>(`${this.baseURL}/windowSingle`, singleWindow, {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      })
      .pipe(catchError(this.handleError));
  }

  addDoor(singleDoor: door): Observable<door> {
    return this.http
      .post<door>(`${this.baseURL}/door`, singleDoor, {
        headers: new HttpHeaders({
          "Content-Type":"application/json"
        })
      }).pipe(catchError(this.handleError));
  }

  addRoof(roof: roofConstruction): Observable<roofConstruction> {
    return this.http
      .post<roofConstruction>(`${this.baseURL}/roofConstruction`, roof, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }).pipe(catchError(this.handleError));
  }

  // UPDATE METHODS

  // DELETE METHODS

  //Error Handling
  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
