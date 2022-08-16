import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerPurchaseRoutingModule } from './customer-purchase-routing.module';
import { CustomerPurchaseComponent } from './customer-purchase.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { AddressModalComponent } from './user-detail/address-modal/address-modal.component';

@NgModule({
  declarations: [
    CustomerPurchaseComponent,
    ProductListComponent,
    ProductDetailComponent,
    UserDetailComponent,
    AddressModalComponent
  ],
  imports: [
    CommonModule,
    CustomerPurchaseRoutingModule,
    SharedModule,
    FormsModule,
    SidebarModule,
    ButtonModule,
    DropdownModule,
    RatingModule,
    ProgressSpinnerModule,
    AvatarModule,
    InputTextModule,
    CalendarModule,
    AccordionModule
  ]
})
export class CustomerPurchaseModule { }
