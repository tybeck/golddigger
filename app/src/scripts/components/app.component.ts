'use strict';

import {
  Component
} from '@angular/core';

import {
  Page
} from 'ui/page';

@Component({

  selector: 'app',

  templateUrl: 'src/views/app.component.html'

})

export class AppComponent {

  constructor(
    page: Page
  ) {

    page.actionBarHidden = true;

  }

}
