import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'e-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  @Input() categories: any = [];
  @Output() handleClick: EventEmitter<any> = new EventEmitter();
  moveToChild: boolean = false;
  subCategories: any = {};

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  setSubCategories(item: any) {
    this.subCategories = item;
  }

  emitValue(e: any) {
    this.handleClick.emit(e);
  }

}
