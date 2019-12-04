import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': 'some-auth-token-if-we-set'
  })
};

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
export interface Property {
  name: string,
  country: string,
  era: number
}
export interface GroundFloor {
  uValue: number,
  area: number,
  materials: string,
  protected: boolean
}
export interface OuterWall {
  uValue: number,
  area: number,
  materials: string,
  protected: boolean
}

export interface Door {
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
export interface others {
   id: number;
   properties: number;
   hjoht: number;
  cost: number;
   pipe: boolean;
  }

@Injectable()
export class APIService {
  constructor(private http: HttpClient) { }
  private propertyId: number = null;

  //BaseURL will need updated when moving from Localhost
  baseURL = "http://localhost:3000"
  propertyUrl: string = this.baseURL + "/homeProperties";

  //For thinking about, unique, search by name is not so good idea since name is not primary key so 
  //there might need better idea to get just created homeProperties id, to insert foreign key in another tables

  propertyIdByNameUrl: string = this.propertyUrl + "/name/";
  groundUrl: string = this.baseURL + "/groundFloor";
  outerWallUrl: string = this.baseURL + "/outerWall";
  othersUrl: string = this.baseURL + "/others";


  //GET METHODS

  getPropertyIdByName(name: string) {
    return this.http.get(this.propertyIdByNameUrl + name)
      .subscribe(res => {
        console.log("get ID", res);
        if (res["error"]) {
          console.log(res["error"])
        }
        else {
          this.setPropertyId(res[0].id);
        }
      })
  }

  getPropertyId(): number {
    return this.propertyId;
  }

  setPropertyId(id: number): void {
    this.propertyId = id;
  }

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

  getDoorsFull() {
    return this.http
      .get(`${this.baseURL}/door`)
      .pipe(catchError(this.handleError));
  }

  getDoor(id: number) {
    return this.http
      .get(`${this.baseURL}/door/${id}`)
      .pipe(catchError(this.handleError));
  }

  getRoofs() {
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

  addDoor(singleDoor: Door): Observable<Door> {
    return this.http
      .post<Door>(`${this.baseURL}/door`, singleDoor, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
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

  //Inserts property
  addProperty(property: Property): Observable<Property> {
    return this.http.post<Property>(this.propertyUrl, property, httpOptions)
  }

  addGroundFloor(groundFloor: GroundFloor): Observable<GroundFloor> {
    return this.http.post<GroundFloor>(this.groundUrl, groundFloor, httpOptions)
  }
  addOuterWall(outerWall: OuterWall): Observable<OuterWall> {
    return this.http.post<OuterWall>(this.outerWallUrl, outerWall, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  addOthers(Others: others): Observable<others> {
       return this.http.post<others>(this.othersUrl, Others, httpOptions)
         .pipe(
           catchError(this.handleError)
         );
         }
  // UPDATE METHODS
  updateDoor(singleDoor: Door, id: number) {
    return this.http.put<Door>(`${this.baseURL}/door/${id}`, singleDoor, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

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
