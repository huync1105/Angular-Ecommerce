import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _userService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this._authService.currentUser.subscribe(user => {
      if (!user) {
        let newUser = JSON.parse((localStorage as any).getItem('currentUser'));
        this._authService.currentUserSubject.next(newUser)
      }
    })
  }

}
