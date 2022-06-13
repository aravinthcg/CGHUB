import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProviderComponent } from './service-providers/components/service-provider/service-provider.component';
import { HomeComponent } from './home/components/home/home.component';
import { UserComponent } from './user/components/user/user.component';
import { SuperAdminComponent } from './super-admin/components/super-admin/super-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SerivceProviderModule } from './service-providers/serivce-provider.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    SuperAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SerivceProviderModule,

    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
