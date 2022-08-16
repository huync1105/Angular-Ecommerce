import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() showAddToCartBtn: boolean = true;
  selections = [
    { code: 'NAME', name: 'Tên' },
    { code: 'PRICE', name: 'Giá' },
    { code: 'RATE', name: 'Đánh giá' }
  ]
  selectedOption: string = ""
  productList: any = [];
  cart: any = [];

  constructor(
    private _prodService: ProductsService,
    private _cartService: CartService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.initData()
  }

  initData() {
    this.getProducts()
  }

  getProducts() {
    this._prodService.emitProductList()
      .subscribe(products => {
        this.productList = products;
    })
  }

  countPercent(value1: number, value2: number): number {
    return Math.round(((value1 - (value2 || 0)) / value1) * 100);
  }

  filter(value: string) {
    switch (value) {
      case "NAME":
        this.productList.listItems.sort((a: any, b: any) => {
          return a.itemName.localeCompare(b.itemName);
        });
        break;
      case "PRICE":
        this.productList.listItems.sort((a: any, b: any) => {
          return a.price - b.price;
        });
        break;
      case "RATE":
        this.productList.listItems.sort((a: any, b: any) => {
          return a.stars - b.stars;
        });
        break;
    }
  }

  getCartItem() {
    this._cartService.getCart().subscribe(cart => {
      this.cart = cart || [];
    })
  }

  addItemToCart(e: any,item: any) {
    e.stopPropagation();
    let index = this.cart.findIndex((cartItem: any) => {
      const checkMatchItem = cartItem._id === item._id;
      return checkMatchItem;
    });
    if (index === -1) {
      this.cart.push({...item, quantity: 1});
    } else {
      this.cart[index].quantity ++;
    }
    this._cartService.cart.next(this.cart);
  }

  seeDetail(e: any, id: string) {
    let newUrlLink = `customer-purchase/products/${id}`;
    this.router.navigate([newUrlLink], {
      replaceUrl: true
    })
  }
  
}
