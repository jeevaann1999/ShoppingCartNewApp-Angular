import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ViewProductCardComponent } from './view-product-card/view-product-card.component';
import { SearchProduct2Component } from './search-product2/search-product2.component';
import { ViewProfileComponent } from './view-profile/view-profile.component'

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"register",
    component:UserRegisterComponent
  },
  {
    path:"add",
    component:AddProductComponent
  },
  {
    path:"view",
    component:ViewProductComponent
  },
  {
    path:"search",
    component:SearchProductComponent
  },
  {
    path:"search2",
    component:SearchProduct2Component
  },
  {
    path:"viewcard",
    component:SearchProductComponent
  },
  {
    path:"viewprofile",
    component:ViewProfileComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    NavbarComponent,
    NavbarUserComponent,
    ViewProductComponent,
    SearchProductComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegisterComponent,
    ViewProductCardComponent,
    SearchProduct2Component,
    ViewProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
