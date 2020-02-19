import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Church } from '../models/church';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {}

  getChurchList() {
    // return this.http
    //   .get<Church[]>('https://raffle-app-server.azurewebsites.net/church')
    //   .pipe(
    //     map(item =>
    //       item.map(data => ({ ...data, value: data._id, viewValue: data.name }))
    //     ),
    //     catchError(this.handleError)
    //   );
    return this.http
      .get<Church[]>('https://raffle-app-server.azurewebsites.net/church')
      .pipe(catchError(this.handleError));
  }

  createUser(user) {
    return this.http
      .post('https://raffle-app-server.azurewebsites.net/user', user)
      .pipe(catchError(this.handleError));
  }

  getUserDetails(id: string) {
    return this.http
      .get(`https://raffle-app-server.azurewebsites.net/user/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
