import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'e-cartmodal',
  templateUrl: './cartmodal.component.html',
  styleUrls: ['./cartmodal.component.scss']
})
export class CartmodalComponent implements OnInit {

  cartItems: any = [];

  constructor(
    private _cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.getCartItem();
  }

  getCartItem() {
    this._cartService.getCart().subscribe(cart => {
      this.cartItems = cart;
    })
  }

  increaseItem(item: any) {
    item.quantity ++;
    this._cartService.cart.next(this.cartItems);
  }

  decreaseItem(item: any) {
    item.quantity --;
    if (item.quantity < 1) {
      let itemIndex = this.cartItems.findIndex((cartItem: any) => cartItem._id === item._id);
      this.cartItems.splice(itemIndex, 1);
      this.cartItems = [...this.cartItems];
    }
    this._cartService.cart.next(this.cartItems);
  }

}
