import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { ErrorInterceptor } from '../_helpers/error.interceptor';
// import { JwtInterceptor } from '../_helpers/jwt.interceptor';
// import { fakeBackendProvider } from '../_helpers/fake';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // HttpClientModule,
    ReactiveFormsModule,

    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
//   providers: [
//     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
//     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

//     // provider used to create fake backend
//     fakeBackendProvider
// ],
  declarations: [HomePage]
})
export class HomePageModule {}
