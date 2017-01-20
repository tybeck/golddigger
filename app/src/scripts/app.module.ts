'use strict';

import {
  NgModule,
  NO_ERRORS_SCHEMA
} from '@angular/core';

import {
  NativeScriptModule
} from 'nativescript-angular/nativescript.module';

import {
  NativeScriptRouterModule
} from 'nativescript-angular/router';

import {
  ROUTING
} from './app.routes';

import { AppComponent } from './components/app.component';
import { DashboardComponent } from './components/pages/dashboard.component';

@NgModule({
  
  'declarations': [
    AppComponent,
    DashboardComponent
  ],
  
  'bootstrap': [
    AppComponent
  ],
  
  'imports': [
    NativeScriptRouterModule,
    NativeScriptModule,
    ROUTING
  ],
  
  'schemas': [
    NO_ERRORS_SCHEMA
  ]
  
})

export class AppModule { }
