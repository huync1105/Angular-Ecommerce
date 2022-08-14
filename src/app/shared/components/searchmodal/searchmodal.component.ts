import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'e-searchmodal',
  templateUrl: './searchmodal.component.html',
  styleUrls: ['./searchmodal.component.scss']
})
export class SearchmodalComponent implements OnInit, OnChanges {

  @Input() searchValue: string = "";
  @Output() handleClick: EventEmitter<any> = new EventEmitter();
  searchResult: any = [];

  constructor(
    private _prodService: ProductsService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.initData();
  }

  ngOnInit(): void {
  }

  initData() {
    this.getFilterProducts();
  }

  getFilterProducts() {
    let data = {
      keyword: this.searchValue
    }
    this._prodService.products()
      .getProdsByKeyword(data).subscribe((res: any) => {
        this.searchResult = res.items;
      })
  }

  emitValue(e?: any) {
    this.handleClick.emit(e);
  }

}
