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

@NgModule({
  declarations: [
    CustomerPurchaseComponent,
    ProductListComponent
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
    ProgressSpinnerModule
  ]
})
export class CustomerPurchaseModule { }
