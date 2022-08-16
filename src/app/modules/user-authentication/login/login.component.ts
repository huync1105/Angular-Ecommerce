import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { handleResponse } from 'src/app/shared/app-shared-functions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = {};
  isLoading: boolean = false;

  constructor(
    private _authService: AuthService,
    private _toastrService: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login():void {
    this.isLoading = true;
    this._authService.login(this.user)
    .subscribe((res) => {
      handleResponse(res, this._toastrService, () => {
        this.isLoading = false;
        this.router.navigate(['/customer-purchase'])
      }, () => {
        this.isLoading = false;
      }) 
    })
  }

  register() {
    this.router.navigate(['user-authentication/register']);
  }

}
