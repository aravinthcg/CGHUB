import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { ServiceProviderComponent } from './service-providers/components/service-provider/service-provider.component';
import { SuperAdminComponent } from './super-admin/components/super-admin/super-admin.component';
import { UserComponent } from './user/components/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  {
    path: 'admin',
    component: SuperAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./super-admin/super-admin.module').then(
            (m) => m.SuperAdminModule
          ),
      },
    ],
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
    ],
  },
  {
    path: 'service-providers',
    component: ServiceProviderComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./service-providers/serivce-provider.module').then(
            (m) => m.SerivceProviderModule
          ),
      },
    ],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
