'use strict';

import {
  Component
} from '@angular/core';

import {
  Router
} from '@angular/router';

@Component({

  'selector': 'navigation',

  'templateUrl': 'views/components/navigation.html',

  'styleUrls': [

    'styles/components/navigation.component.css'

  ]

})

export class NavigationComponent {

  constructor (
    private router: Router
  ) {

    return this;

  }

  public dashboard (): void {

    this
      .router
      .navigate([
        '/dashboard'
      ]);

  }

}
