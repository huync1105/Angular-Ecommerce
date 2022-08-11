import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

    login(data: {email: string, password: string}): Observable<any> {
      let authUrl = `${environment.host}login`;
      return this.http.post<any>(authUrl, data);
    }

}
