import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Task } from '../Task';
import { Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TaskService {

// this is a property set to the url of mock api created running on PORT 5000
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }
 }
