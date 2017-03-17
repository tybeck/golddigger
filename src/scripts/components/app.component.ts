'use strict';

import {
  Component
} from '@angular/core';

import {
  TNSFontIconService
} from 'nativescript-ngx-fonticon';

import {
  Page
} from 'ui/page';

import {
  ConfigService
} from '../services/config.service';

import {
  BluetoothService
} from '../services/bluetooth.service';

@Component({

  'selector': 'app',

  'templateUrl': 'views/app.html'

})

export class AppComponent {

  constructor(
    private page: Page,
    private icon: TNSFontIconService,
    private config: ConfigService,
    private ble: BluetoothService
  ) {

    page.actionBarHidden = true;

  }

}
