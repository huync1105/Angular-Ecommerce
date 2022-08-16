import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  uploadImg(data: FormData) {
    let url = `${environment.cloudinary}image/upload`;
    return this.http.post(url, data);
  }

  updateUSer(user: User) {
    let url = `${environment.host}user/update`;
    return this.http.post(url, user);
  }
}
