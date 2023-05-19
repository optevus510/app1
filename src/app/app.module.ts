import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Component} from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import {MatToolbarModule} from '@angular/material/toolbar';import {MatMenuModule} from '@angular/material/menu';  
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
  MatIconModule, 
    MatToolbarModule,
    MatMenuModule,
    Component

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
