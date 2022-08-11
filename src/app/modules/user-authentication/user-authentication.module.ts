import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthenticationRoutingModule } from './user-authentication-routing.module';
import { UserAuthComponent } from './user-auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    UserAuthComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    UserAuthenticationRoutingModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    SharedModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UserAuthenticationModule { }
