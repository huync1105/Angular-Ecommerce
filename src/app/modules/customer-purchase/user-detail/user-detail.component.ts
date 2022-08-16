import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { handleResponse } from 'src/app/shared/app-shared-functions';
import { AddressModalComponent } from './address-modal/address-modal.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User = JSON.parse((localStorage as any).getItem('currentUser'));
  sexs: any = [
    { name: 'Nam', code: 'MALE' },
    { name: 'Nữ', code: 'FEMALE' },
    { name: 'Khác', code: 'OTHER' },
  ];
  isLoading: boolean = false;
  isUpload: boolean = false;

  constructor(
    private modal: NgbModal,
    private _userService: UsersService,
    private _toastr: ToastrService,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.user = {
      ...this.user,
      dateOfBirth: new Date(this.user.dateOfBirth)
    }
  }

  editAddress(index: number) {
    let modalRef = this.modal.open(AddressModalComponent, {
      size: 'lg',
      backdrop: 'static'
    })
    modalRef.componentInstance.address = { ...this.user.addresses[index] };
    modalRef.result
      .then((res: any) => {
        this.user.addresses[index] = res;
      })
  }

  uploadFile(e: any) {
    this.isUpload = true;
    const formData: FormData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "xivbtdyo");
    this._userService.uploadImg(formData).subscribe((res: any) => {
      this.isUpload = false;
      this.user.avatar = res.url;
    })
  }

  transformData() {
    let data = {
      ...this.user,
      dateOfBirth: (new Date(this.user.dateOfBirth).getTime())*1000
    }
    return data;
  }

  updateUser() {
    this.isLoading = true;
    this._userService.updateUSer(this.transformData())
      .subscribe((res: any) => {
        handleResponse(res, this._toastr, () => {
          this.isLoading = false;
          this._authService.currentUserSubject?.next(this.transformData());
        }, () => {
          this.isLoading = false;
        });
      })
  }

}
