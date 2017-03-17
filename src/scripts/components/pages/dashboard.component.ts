'use strict';

import {
  Component
} from '@angular/core';

import {
  Router
} from '@angular/router';

@Component({

  selector: 'dashboard',

  templateUrl: 'views/components/pages/dashboard.html',

  'styleUrls': [

    'styles/components/pages/dashboard.component.css'

  ]

})

export class DashboardComponent {

  constructor (
    private router: Router
  ) {

    return this;

  }

}
