import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'user-authentication', pathMatch: 'full' },
  {
    path: 'user-authentication',
    loadChildren: () =>
      import('./modules/user-authentication/user-authentication.module')
        .then(m => m.UserAuthenticationModule)
  },
  {
    path: 'customer-purchase',
    loadChildren: () => import('./modules/customer-purchase/customer-purchase.module').then(m => m.CustomerPurchaseModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
