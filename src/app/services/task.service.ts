import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/task';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get(this.apiUrl) as Observable<Task[]>;
  }

  deleteTasks(task: Task) : Observable<Task> {
    const url =  `${this.apiUrl}/${task.id}`
    return this.http.delete(url) as Observable<Task>;
  }

  updateTaskReminder(task: Task) : Observable<Task> {
    const url =  `${this.apiUrl}/${task.id}`
    return this.http.put(url, task, httpOptions) as Observable<Task>;
  }

  addTasks(task: Task) : Observable<Task>{
    return this.http.post(this.apiUrl ,task, httpOptions) as Observable<Task>;
  }
}
