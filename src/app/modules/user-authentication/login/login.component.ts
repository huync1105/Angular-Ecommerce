import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

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
    .subscribe(() => {
      this.isLoading = false;
      this._toastrService.success('Đăng nhập thành công!')
      this.router.navigate(['/customer-purchase'])
    })
  }

  register() {
    this.router.navigate(['user-authentication/register']);
  }

}
