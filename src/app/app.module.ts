import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { ViewfriendComponent } from './viewfriend/viewfriend.component';
import { SearchfriendComponent } from './searchfriend/searchfriend.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const myRoute:Routes=[
  {
    path:"",
    component:ViewfriendComponent
  },
  {
    path:"add",
    component:AddfriendComponent
  },
  {
    path:"search",
    component:SearchfriendComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddfriendComponent,
    ViewfriendComponent,
    SearchfriendComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
