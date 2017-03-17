'use strict';

let bluetooth = require('nativescript-bluetooth');

import dialogs = require('ui/dialogs');

import {
  Injectable
} from '@angular/core';

@Injectable()
export class BluetoothService {

  constructor () {

    bluetooth
      .isBluetoothEnabled()
      .then((enabled) => {

        dialogs.alert(
          'Enabled? '
            .concat(
              enabled
            )
        ).then(() => {

          console.log('done');

        });

      });

    return this;

  }

}