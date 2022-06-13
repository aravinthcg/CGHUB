import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterServiceComponent } from './components/register-service/register-service.component';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';

const routes: Routes = [
  { path: '', component: ServiceProviderComponent },
  { path: 'register', component: RegisterServiceComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerivceProviderRoutingModule {}
