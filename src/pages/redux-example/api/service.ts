import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/of';

import { ANIMAL_TYPES, AnimalType, IAnimal, fromServer } from '../model';

// A fake API on the internets.
const URLS = {
  [ANIMAL_TYPES.LION]: 'http://www.mocky.io/v2/59200c34110000ce1a07b598',
  [ANIMAL_TYPES.LION]: 'http://www.mocky.io/v2/5920141a25000023015998f2',
}

@Injectable()
export class AnimalService {
  constructor(private http: Http) {}

  getAll = (animalType: AnimalType): Observable<IAnimal[]> =>
    this.http.get(URLS[animalType])
      .map(res => res.json())
      .map(records => records.map(fromServer));

}