import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user-authentication', pathMatch: 'full' },
  {
    path: 'user-authentication',
    loadChildren: () => 
      import('./modules/user-authentication/user-authentication.module')
        .then(m => m.UserAuthenticationModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
