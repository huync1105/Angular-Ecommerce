import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productList: BehaviorSubject<any> = new BehaviorSubject(null);
  currentProduct: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private http: HttpClient
  ) { }

  categories() {
    let url = `${environment.host}maincategories/getList`;
    return this.http.post(url, {});
  }

  products() {
    return {
      getProdsByCatId: (id: string) => {
        let url = `${environment.host}subcategories/getProductsByIdCat/${id}`;
        return this.http.get(url)
      },
      getProdsByKeyword: (data: any) => {
        let url = `${environment.host}products/getByKeyword`;
        return this.http.post(url, data);
      }
    }
  }

  emitProductList() {
    return this.productList.asObservable();
  }

  emitProduct(): Observable<any> {
    return this.currentProduct.asObservable();
  }

}
