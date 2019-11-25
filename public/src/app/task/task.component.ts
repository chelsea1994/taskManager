import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
@ Input() task: any;
completed = false;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  comp(){
    if(this.completed == false){
        this.completed = true;
    }
    else{
        this.completed = false;
    }
  }

  complete(){
    if(this.task["completed"] == false){
        this.task["completed"] = true;
        let observable = this._httpService.editTask(this.task);
        observable.subscribe(response => {
            if(response["status"] == false){
                console.log("There was an issue updating the task object.")
            }
            else{
                console.log("Should have sucessfully updated task's completed property to TRUE.")
            }
        })
    }
    else{
        this.task["completed"] = false;
        let observable = this._httpService.editTask(this.task);
        observable.subscribe(response => {
            if(response["status"] == false){
                console.log("There was an issue updating the task object.")
            }
            else{
                console.log("Should have sucessfully updated task's completed property to FALSE.")
            }
        })
    }
  }

  flag(){
    if(this.task["flag"] == false){
        this.task["flag"] = true;
        let observable = this._httpService.editTask(this.task);
        observable.subscribe(response => {
            if(response["status"] == false){
                console.log("There was an issue updating the task object.")
            }
            else{
                console.log("Should have sucessfully updated task's flagged property to TRUE.")
            }
        })
    }
    else{
        this.task["flag"] = false;
        let observable = this._httpService.editTask(this.task);
        observable.subscribe(response => {
            if(response["status"] == false){
                console.log("There was an issue updating the task object.")
            }
            else{
                console.log("Should have sucessfully updated task's flagged property to FALSE.")
            }
        })
    }
  }

}
