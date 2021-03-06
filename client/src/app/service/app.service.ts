import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Church } from '../models/church';
import { User } from '../models/user';
import { Team } from '../models/team';

interface UserDetailResponse {
  success: boolean;
  message: string;
  data: User;
}

interface AllUsersResponse {
  message: string;
  data: User[];
  count: number;
}

interface Data {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  team: string;
  church: string;
  churchData: Church[];
  teamData: Team[];
  createdAt: string;
  updatedAt: string;
  _v: number;
}

interface UserWinnerResponse {
  message: string;
  data: Data[];
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {}
  // url = 'http://localhost:4000';
  url = 'https://raffle-app-server.azurewebsites.net';

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
      .get<Church[]>(`${this.url}/church`)
      .pipe(catchError(this.handleError));
  }

  createUser(user) {
    return this.http
      .post(`${this.url}/user`, user)
      .pipe(catchError(this.handleError));
  }

  getUserDetails(id: string) {
    return this.http
      .get<UserDetailResponse>(`${this.url}/user/${id}`)
      .pipe(catchError(this.handleError));
  }

  getWinner() {
    return this.http
      .get<UserWinnerResponse>(`${this.url}/user/winner`)
      .pipe(catchError(this.handleError));
  }

  getAllUsers() {
    return this.http
      .get<AllUsersResponse>(`${this.url}/user`)
      .pipe(catchError(this.handleError));
  }

  getAllUsersByChurch(churchId: string) {
    return this.http
      .get<AllUsersResponse>(`${this.url}/user/church/${churchId}`)
      .pipe(catchError(this.handleError));
  }

  getAllUsersByTeam(teamId: string) {
    return this.http
      .get<AllUsersResponse>(`${this.url}/user/team/${teamId}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else if (error.status !== 500) {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      return throwError(error.error.message);
    }
    console.error(
      `Backend returned code ${error.status}, ` +
        `body was: ${error.error.message}`
    );
    // return an observable with a user-facing error message
    return throwError('Something went wrong! please try again later.');
  }
}
