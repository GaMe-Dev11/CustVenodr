import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component'; 

// Import containers
// import { DefaultLayoutComponent } from './containers';
import { ClientLayoutComponent } from './clientDashBoard';

// import { P404Component } from './views/error/404.component';
// import { P500Component } from './views/error/500.component';
// import { LoginComponent } from './views/login/login.component';
// import { RegisterComponent } from './views/register/register.component';
 
const APP_CONTAINERS = [
  ClientLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  imports: [
    BrowserModule,
    
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    HttpClientModule,
   
    // NotificationModule
  ],
  declarations: [ 
    AppComponent,
    ...APP_CONTAINERS,
    // P404Component,
    // P500Component,
    
  
   
   
  ],
  providers: [
    {
    provide: LocationStrategy,

    useClass: HashLocationStrategy  
  }
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
