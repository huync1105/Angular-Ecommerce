import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'e-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() handleClick: EventEmitter<any> = new EventEmitter();
  @Output() handleChange: EventEmitter<any> = new EventEmitter();
  @Input() userAvatar: string = "";
  searchText: any = "";
  cartLength: number = 0;
  showCartModal: boolean = false;
  user: User = {};

  constructor(
    public router: Router,
    private _cartService: CartService,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.getUser();
    this.getCart();
  }

  getUser() {
    this._authService.currentUser.subscribe(user => {
      if (!user._id) {
        this.user = JSON.parse(((localStorage as any).getItem('currentUser')));
      } else {
        this.user = user;
      }
      
    })
  }

  getCart() {
    this._cartService.getCart().subscribe((cart: any) => {
      let currentCart = cart || [];
      this.cartLength = currentCart.reduce((total: any, item: any) => {
        return total + item.quantity;
      }, 0);
    })
  }

  emitEvent(e?: any) {
    this.handleClick.emit(e);
  }

  emitInputValue(e: any) {
    this.handleChange.emit(e);
  }

  backToHownTown() {
    this.router.navigate(['/customer-purchase']);
  }
}
