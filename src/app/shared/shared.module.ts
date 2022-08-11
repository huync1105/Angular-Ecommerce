import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignbuttonComponent } from './components/signbutton/signbutton.component';



@NgModule({
  declarations: [
    SignbuttonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SignbuttonComponent
  ]
})
export class SharedModule { }
