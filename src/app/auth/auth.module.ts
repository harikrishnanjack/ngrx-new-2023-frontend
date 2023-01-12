import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { AuthReducer } from './store/auth.reducer';
import { SharedModule } from '../shared/shared.module';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    StoreModule.forFeature('auth',AuthReducer),
  ],
  providers:[MessageService]
})
export class AuthModule { }
