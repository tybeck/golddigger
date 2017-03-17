'use strict';

import {
  NativeScriptRouterModule
} from 'nativescript-angular/router';

import {
  Routes,
} from '@angular/router';

import { DashboardComponent } from './components/pages/dashboard.component';
import { OrderComponent } from './components/pages/order.component';
import { ControlComponent } from './components/pages/control.component';

let appRoutes: Routes = <Routes>[

  {

    'path': '',

    'redirectTo': '/dashboard',

    'pathMatch': 'full'

  },

  {

    'path': 'dashboard',

    'component': DashboardComponent

  },

  {

    'path': 'order',

    'component': OrderComponent

  },

  {

    'path': 'control',

    'component': ControlComponent

  }

];

export const ROUTING = NativeScriptRouterModule
  .forRoot(
    appRoutes
  );