import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { fakeBackendProvider } from './_helpers/fake';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { BusinessAndCustomerComponent } from './business-and-customer/business-and-customer.component';
import { SignupComponent } from './signup/signup.component';
import { TabsComponent } from './tabs/tabs.component';
import { PersonaliseTabComponent } from './personalise-tab/personalise-tab.component';
import { ProfileComponent } from './profile/profile.component';
import { AdvertisementInfoComponent } from './advertisement-info/advertisement-info.component'
import { Base64 } from '@ionic-native/base64/ngx';

import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [AppComponent, UserComponent, AdminComponent, SidemenuComponent, BusinessAndCustomerComponent,
                 SignupComponent, TabsComponent, ProfileComponent, AdvertisementInfoComponent, PersonaliseTabComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule,
    ReactiveFormsModule, BrowserAnimationsModule, ],
  providers: [
    Camera,
    Base64,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
