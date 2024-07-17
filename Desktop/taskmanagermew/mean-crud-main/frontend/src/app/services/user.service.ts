import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import Task from '../types/task';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:3000';
  httpClient = inject(HttpClient);
  constructor() {}

  getTasks() {
    return this.httpClient.get<Task[]>(this.apiUrl + '/tasks');
  }
  getTaskid(id: string) {
    return this.httpClient.get<Task>(this.apiUrl + '/tasks/' + id);
  }
  addTask(model: Task) {
    return this.httpClient.post(this.apiUrl + '/tasks', model);
  }
  updateTask(id: string, model: Task) {
    return this.httpClient.put(this.apiUrl + '/tasks/' + id, model);
  }
  deleteTask(id: string) {
    return this.httpClient.delete(this.apiUrl + '/tasks/' + id);
  }
}
