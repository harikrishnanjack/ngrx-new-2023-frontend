import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { StoreModule } from '@ngrx/store';
import { PostReducer } from './store/post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/post.effects';


@NgModule({
  declarations: [
    HomeComponent,
    PostFormComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('post',PostReducer),
    EffectsModule.forFeature([PostEffects])
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],

})
export class DashboardModule { }
