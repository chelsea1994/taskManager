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

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
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
                console.log("Should have sucessfully updated task's flagged property to FALSE.");
            }
        })
    }
  }

  delete(taskid, catid){
      var array;
      let observable = this._httpService.oneCategory(catid);
      observable.subscribe(category => {
          array = category["category"]["tasks"];
          console.log("When I get the category, this is the array of tasks...",array);
          for(var i = 0; i < array.length; i++){
              console.log("taskid inside the for loop is...", taskid);
              console.log("array of i of id in for loop is...", array[i]["_id"]);
              if(array[i]["_id"] == taskid){
                  console.log("We found a match between task ids. The matches should be....", array[i]["_id"], taskid);
                  if(i == array.length-1){
                      var x = array.pop();
                      console.log("Looks like my task was at end of the array, so we popped the task to be deleted which was...",x );
                  }
                  else{
                      array[i] = array[array.length-1];
                      var x = array.pop();
                      console.log("Looks like the task was not at end of array so we had to overwite it with the end value and pop the end value which was...",x);
                  }
              }
              else{
                  console.log("We never found a match between ids...?")
              }
          }
          category["category"]["tasks"] = array;
          console.log("The altered array has been assigned to the category's task property, so the updated task array should be the following...",category["category"]["tasks"]);

          console.log(category);
          let observable2 = this._httpService.editCategory(category["category"]);
          observable2.subscribe(data => {
              let observable3 = this._httpService.deleteTask(taskid);
              observable3.subscribe(data => {
                  //currently no code here - this should return errors if the above didnt work. Nothing  much to do here but grab errors.
              })
          })
      })
      
  }

}
