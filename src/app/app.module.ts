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
import { ViewProductComponent } from './view-product/view-product.component'

const myRoute:Routes=[
  {
    path:"add",
    component:AddProductComponent
  },
  {
    path:"view",
    component:ViewProductComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    NavbarComponent,
    NavbarUserComponent,
    ViewProductComponent
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
