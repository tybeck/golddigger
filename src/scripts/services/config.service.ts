'use strict';

import * as fs from 'file-system';

import {
  Injectable
} from '@angular/core';

import {
  ICategory
} from '../../definitions/categories';

@Injectable()
export class ConfigService {

  public static PATH: string = 'config/default.json';

  private categories: ICategory[] = [];

  constructor () {

    let configFile: fs.File = fs
      .knownFolders
      .currentApp()
      .getFile(
        ConfigService
          .PATH
      );

    configFile
      .readText()
      .then((
        content: string
      ): void => {

        let parsed: any = JSON.parse(content);

        if (parsed && parsed.categories) {

          this.categories = parsed.categories;

        }

      });

    return this;

  }

}