import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
      const todos = [
      {
        id: 1,
        title: 'Изучить JavaScript',
        completed: true
      },

      {
        id: 2,
        title: 'Изучить Angular',
        completed: false
      },

      {
        id: 3,
        title: 'Написать приложение',
        completed: false
      }
      ];

      return { todos };
  }
}



