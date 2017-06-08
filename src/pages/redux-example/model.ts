export const ANIMAL_TYPES = {
  LION: 'lion',
  ELEPHANT: 'elephant',
};

export type AnimalType = string;

export interface IAnimal {
  id: string;
  animalType: AnimalType;
  name: string;
  ticketPrice: number;
}

export interface IAnimalList {
  items: {};
  loading: boolean;
  error: any;
}

export const fromServer = (record: any): IAnimal => ({
  id: record.name.toLowerCase(),
  animalType: record.animalType,
  name: record.name,
  ticketPrice: record.ticketPrice,
})
