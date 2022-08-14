import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject?: BehaviorSubject<User>;
  public currentUser?: Observable<User>;

  constructor(
    private http: HttpClient
  ) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse((localStorage as any).getItem('currentUser')));
    this.currentUserSubject = new BehaviorSubject<User>({})
    this.currentUser = this.currentUserSubject.asObservable();
  }

    login(data: User): Observable<User> {
      let authUrl = `${environment.host}authentication/login`;
      return this.http.post<User>(authUrl, data).pipe(
        map((res: any) => {
          let user = res.data;
          localStorage.setItem('token', res.accessToken);
          localStorage.setItem('currentUser', JSON.stringify({
            ...user,
            password: ""
          }));
          this.currentUserSubject?.next(user);
          return user;
        })
      );
    }

    register(data: User) {
      let authUrl = `${environment.host}authentication/register`;
      return this.http.post<User>(authUrl, data);
    }

    logout() {
      localStorage.clear();
      this.currentUserSubject?.next({});
    }

}
