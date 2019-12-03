import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  allTasks(){
    return this._http.get('/api/tasks');
  }

  flagged(){
      return this._http.get('/api/tasks/flagged');
  }

  allCategories(){
    return this._http.get('/api/categories');
  }

  oneCategory(name){
      return this._http.get('api/categories/' + name);
  }

  createTask(task){
    console.log("************* Got to the createTask() in service *************")
    return this._http.post('/api/tasks', task);
  }

  createCategory(category){
    return this._http.post('/api/categories', category);
  }

  editTask(task){
    return this._http.put('/api/tasks/' + task._id, task);
  }

  editCategory(category){
    return this._http.put('/api/categories/' + category._id, category);
  }

  deleteTask(id: string){
    return this._http.delete('/api/tasks/' + id);
  }

  deleteCategory(id: string){
    return this._http.delete('/api/categories/' + id);
  }


}

