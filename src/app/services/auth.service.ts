import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUserSubject: BehaviorSubject<User>
  = new BehaviorSubject<User>({});
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { 
    this.currentUser = this.currentUserSubject.asObservable();
  }

    login(data: User): Observable<User> {
      let authUrl = `${environment.host}authentication/login`;
      return this.http.post<User>(authUrl, data).pipe(
        map((res: any) => {
          let user = res.data;
          localStorage.setItem('token', user.token);
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return res;
        })
      );
    }

    register(data: User) {
      let authUrl = `${environment.host}authentication/register`;
      return this.http.post<User>(authUrl, data);
    }

    logout() {
      localStorage.clear();
      this.currentUserSubject.next({});
      this.router.navigate(['/login'])
    }

}
