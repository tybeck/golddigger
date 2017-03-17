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
  TNSFontIconModule
} from 'nativescript-ngx-fonticon';

import {
  ROUTING
} from './app.routes';

import { AppComponent } from './components/app.component';
import { NavigationComponent } from './components/navigation.component';
import { DashboardComponent } from './components/pages/dashboard.component';
import { OrderComponent } from './components/pages/order.component';
import { ControlComponent } from './components/pages/control.component';

import { ConfigService } from './services/config.service';
import { BluetoothService } from './services/bluetooth.service';

import './rxjs-extensions';

console.log('ngmodule...');

@NgModule({

  'declarations': [
    AppComponent,
    DashboardComponent,
    OrderComponent,
    ControlComponent,
    NavigationComponent
  ],

  'providers': [
    ConfigService,
    BluetoothService
  ],

  'bootstrap': [
    AppComponent
  ],

  'imports': [
    NativeScriptModule,
    NativeScriptRouterModule,
    TNSFontIconModule.forRoot({

      'fa': 'font-awesome.css'

    }),
    ROUTING
  ],

  'schemas': [
    NO_ERRORS_SCHEMA
  ]

})

export class AppModule { }
