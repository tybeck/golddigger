'use strict';

import {
  Component
} from '@angular/core';

@Component({

  selector: 'control',

  templateUrl: 'views/components/pages/control.html',

  'styleUrls': [

    'styles/components/pages/control.component.css'

  ]

})

export class ControlComponent {

  constructor () {

    console.log('control');

    return this;

  }

}
