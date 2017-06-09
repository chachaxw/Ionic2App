import { Injectable } from '@angular/core';
import { Epic, createEpicMiddleware } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';

import { IAppState } from '../../../store/model';
import { AnimalType, ANIMAL_TYPES } from '../model';
import { AnimalAPIAction, AnimalAPIActions } from '../api/actions';
import { AnimalService } from "./service";

type Predicate = (any)=> boolean;

const animalsNotAlreadyFetched = (
  animalType: AnimalType,
  state: IAppState): boolean => !(
    state[animalType] &&
    state[animalType].items &&
    Object.keys(state[animalType].items).length);

const actionIsForCorrectAnimalType = (animalType: AnimalType) =>
  (action: AnimalAPIAction): boolean =>
    action.meta.animalType === animalType;
