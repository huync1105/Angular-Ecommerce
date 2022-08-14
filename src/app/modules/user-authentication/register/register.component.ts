import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { handleResponse } from 'src/app/shared/app-shared-functions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = {};
  secondPassword: string = "";
  isMatch: boolean = true;
  isLoading: boolean = false;

  constructor(
    private _authService: AuthService,
    private _toastService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register() {
    this.isMatch = this.user.password === this.secondPassword;
    if (this.isMatch) {
      this.isLoading = true
      this._authService.register(this.user).subscribe((res: any) => {
        this.isLoading = false;
        handleResponse(res, this._toastService, () => {
          this.router.navigate(['user-authentication/login']);
        });
      })
    }
  }

}
