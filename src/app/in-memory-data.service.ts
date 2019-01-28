import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as options from '../assets/data/options.json';
import * as warrants from '../assets/data/warrants.json';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {options, warrants};
  }
}
