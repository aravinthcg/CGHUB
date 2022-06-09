import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RegisterServiceComponent } from './components/register-service/register-service.component';

import { SerivceProviderRoutingModule } from './service-provider-routing.module';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [RegisterServiceComponent, ServiceProviderComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    SerivceProviderRoutingModule,
  ],
  exports: [RegisterServiceComponent, ServiceProviderComponent],
})
export class SerivceProviderModule {}
