'use strict';

import {
  Component
} from '@angular/core';

@Component({

  selector: 'dashboard',

  templateUrl: 'views/components/pages/order.html',

  'styleUrls': [

    'styles/components/pages/order.component.css'

  ]

})

export class OrderComponent {

  constructor () {

    console.log('balls');

    return this;

  }

}
