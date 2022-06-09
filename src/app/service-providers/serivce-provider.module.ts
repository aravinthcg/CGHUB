import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  MatRippleModule,
  MAT_RIPPLE_GLOBAL_OPTIONS,
} from '@angular/material/core';
import { RegisterServiceComponent } from './components/register-service/register-service.component';
import { RouterModule, Routes } from '@angular/router';
import { SerivceProviderRoutingModule } from './service-provider-routing.module';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [RegisterServiceComponent, ServiceProviderComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    SerivceProviderRoutingModule,
  ],
  exports: [RegisterServiceComponent, ServiceProviderComponent],
})
export class SerivceProviderModule {}
