'use strict';

import {
  NativeScriptRouterModule
} from 'nativescript-angular/router';

import {
  Routes,
} from '@angular/router';

import { DashboardComponent } from './components/pages/dashboard.component';

let appRoutes: Routes = <Routes>[

  {

    'path': '',

    'redirectTo': '/dashboard',

    'pathMatch': 'full'

  },

  {

    'path': 'dashboard',

    'component': DashboardComponent

  }

];

export const ROUTING = NativeScriptRouterModule
  .forRoot(
    appRoutes
  );