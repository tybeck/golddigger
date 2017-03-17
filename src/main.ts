/// <reference path="./_all.d.ts" />

'use strict';

import {
  platformNativeScriptDynamic
} from 'nativescript-angular/platform';

import {
  AppModule
} from './scripts/app.module';

platformNativeScriptDynamic()
  .bootstrapModule(
    AppModule
  );
