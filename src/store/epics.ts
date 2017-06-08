import { Injectable } from '@angular/core';

import { ANIMAL_TYPES } from '../pages/redux-example/model';

@Injectable()
export class RootEpics {
  constructor() {}

  public createEpics() {
    return [];
  }
}
