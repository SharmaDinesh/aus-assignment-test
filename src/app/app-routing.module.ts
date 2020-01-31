import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component'
import { AdminComponent } from './admin/admin.component'
import { SidemenuComponent } from './sidemenu/sidemenu.component'
import { BusinessAndCustomerComponent } from './business-and-customer/business-and-customer.component'
import { SignupComponent } from './signup/signup.component'
import { ProfileComponent } from './profile/profile.component'
import { AdvertisementInfoComponent } from './advertisement-info/advertisement-info.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'role', component: SidemenuComponent,
    children: [
      { path: 'user', component: UserComponent, pathMatch: 'full' },
      { path: 'admin', component: AdminComponent, pathMatch: 'full' },
      { path: ':findProfile/profile', component: ProfileComponent, pathMatch: 'full' },
      // { path: 'AddInfo', component: AdvertisementInfoComponent, pathMatch: 'full' },
    ]
  },
  { path: 'select/role', component: BusinessAndCustomerComponent, pathMatch: 'full'},
  { path: 'signup/:accessRole', component: SignupComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
