import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'e-signbutton',
  templateUrl: './signbutton.component.html',
  styleUrls: ['./signbutton.component.scss']
})
export class SignbuttonComponent implements OnInit {

  @Input() className: string = "";
  @Input() title: string = "";
  @Input() isLoading: boolean = false;
  @Output() handleClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitValue(e?: any) {
    if(e) this.handleClick.emit(e);
  }

}
