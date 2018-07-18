import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', power:'T' },
      { id: 12, name: 'Narco', power:'T' },
      { id: 13, name: 'Bombasto', power:'T' },
      { id: 14, name: 'Celeritas', power:'T' },
      { id: 15, name: 'Magneta', power:'T' },
      { id: 16, name: 'RubberMan', power:'T' },
      { id: 17, name: 'Dynama', power:'T' },
      { id: 18, name: 'Dr IQ', power:'T' },
      { id: 19, name: 'Magma', power:'T' },
      { id: 20, name: 'Tornado', power:'T' }
    ];
    return {heroes};
  }
}