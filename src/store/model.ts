import { IAnimalList } from '../pages/redux-example/model';

export interface IAppState {
  elephants?: IAnimalList;
  lions?: IAnimalList;
  routes?: any;
  feedback?: any;
}
