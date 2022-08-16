import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounce } from "lodash";
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-customer-purchase',
  templateUrl: './customer-purchase.component.html',
  styleUrls: ['./customer-purchase.component.scss']
})
export class CustomerPurchaseComponent implements OnInit {

  showSideBar: boolean = false;
  categories: any = [
    {
      group: 'TBCN',
      name: 'Thiết bị công nghệ',
      child: []
    },
    {
      group: 'TT',
      name: 'Thời trang',
      child: []
    },
    {
      group: 'TH',
      name: 'Tạp hóa',
      child: []
    },
  ];
  searchValue: string = '';

  constructor(
    private _prodService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  debounceSearch = debounce((value) => {
    this.searchValue = value;
  }, 500);

  searchProd(value: string) {
    this.debounceSearch(value)
  }

  getCategories() {
    this._prodService.categories()
      .subscribe((res: any) => {
        this.categories.forEach((item: any) => {
          item.child = res.data.filter((ele: any) => ele.group === item.group);
        });
        let firstItemId = this.categories[0].child[0].child[0]._id;
        this.getProducts(firstItemId);
      })
  }

  getProducts(id: string) {
    this.router.navigate(['customer-purchase'])
    this.showSideBar = false;
    this._prodService.products()
      .getProdsByCatId(id).subscribe((res: any) => {
        this._prodService.productList.next(res.data);
      })
  }

}
