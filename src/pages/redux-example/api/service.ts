import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ANIMAL_TYPES, AnimalType, IAnimal, fromServer } from '../model';

// A fake API on the internets.
const URLS = {
  [ANIMAL_TYPES.LION]: 'http://www.mocky.io/v2/59200c34110000ce1a07b598',
  [ANIMAL_TYPES.LION]: 'http://www.mocky.io/v2/5920141a25000023015998f2',
}

@Injectable()
export class AnimalAPIService {
  constructor(private http: Http) {}

  getAll = (animalType: AnimalType): Observable<IAnimal[]> =>
    this.http.get(URLS[animalType])
      .pipe(map((res: any) => res.json()))
}
