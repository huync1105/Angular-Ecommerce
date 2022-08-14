import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignbuttonComponent } from './components/signbutton/signbutton.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar'
import { FormsModule } from '@angular/forms';
import { SearchmodalComponent } from './components/searchmodal/searchmodal.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [
    SignbuttonComponent,
    NavbarComponent,
    SidemenuComponent,
    SearchmodalComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    AvatarModule,
    ProgressSpinnerModule
  ],
  exports: [
    SignbuttonComponent,
    NavbarComponent,
    SidemenuComponent,
    SearchmodalComponent,
    TruncatePipe
  ]
})
export class SharedModule { }
