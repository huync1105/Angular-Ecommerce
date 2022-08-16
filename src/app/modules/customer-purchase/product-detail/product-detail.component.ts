import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: any = {};
  cart: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _prodService: ProductsService,
    private router: Router,
    private _cartService: CartService
  ) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.getProductDetail();
  }

  getCart() {
    this._cartService
      .getCart().subscribe((cart) => {
        this.cart = cart || [];
      })
  }

  getProductDetail() {
    let $sub = this.activatedRoute.params.subscribe(params=>{
      this._prodService.products()
      .getProdById(params['id']).subscribe((res: any) => {
        this.product = res.item;
      })
    });
  }

  addItemToCart() {
    let index = this.cart.findIndex((cartItem: any) => {
      let checkMatchItem = cartItem._id === this.product._id;
      return checkMatchItem;
    })
    if (index === -1) {
      this.cart.push({...this.product, quantity: 1});
    } else {
      this.cart[index].quantity ++;
    }
    this._cartService.cart.next(this.cart);
  }

}
