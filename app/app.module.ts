import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule }  from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { FindemployeeComponent } from './findemployee/findemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewemployeeComponent,
    FindemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
