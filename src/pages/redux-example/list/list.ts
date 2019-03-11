import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IAnimal } from '../model';

@Component({
  selector: 'zoo-animal-list',
  templateUrl: './list.html',
  styleUrls: ['./list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimalListComponent {

  @Input() animalsName: string;
  @Input() animalType: string;
  @Input() animals: Observable<IAnimal[]>;
  @Input() loading: Observable<boolean>;
  @Input() error: Observable<any>;

  constructor() {}

  // Since we're observing an array of items, we need to set up a 'trackBy'
  // parameter so Angular doesn't tear down and rebuild the list's DOM every
  // time there's an update.
  getKey(_, animal: IAnimal) {
    return animal.id;
  }
}
