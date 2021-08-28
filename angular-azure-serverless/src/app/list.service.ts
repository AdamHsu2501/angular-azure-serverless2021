import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  getList(): Promise<any[]> {
    return fetch('api/getList').then((data) => data.json());
  }
}
