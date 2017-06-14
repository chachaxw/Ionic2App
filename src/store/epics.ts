import { Injectable } from '@angular/core';

import { ANIMAL_TYPES } from '../pages/redux-example/model';
import { AnimalAPIEpics } from '../pages/redux-example/api/epics';

@Injectable()
export class RootEpics {
  constructor(private animalAPIEpics: AnimalAPIEpics) {}

  public createEpics() {
    return [
      this.animalAPIEpics.createEpic(ANIMAL_TYPES.ELEPHANT),
      this.animalAPIEpics.createEpic(ANIMAL_TYPES.LION),
    ];
  }
}
