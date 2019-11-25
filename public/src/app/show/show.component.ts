import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

errors = [];
task = {title: "", due: null, categoryid: "", completed: false, flag: false};
showTaskForm = false;
categories = [];


  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
      this.showCats();
  }

  showTForm(){
    if(this.showTaskForm == true){
        this.showTaskForm = false;
        }
    else{
        this.showTaskForm = true;
        }
    }

newTask(){
    console.log("***** got to the show.ts newTask() *****");
    let creation = this._httpService.createTask(this.task);
    creation.subscribe(data => {
        console.log(data["status"]);
        })
    }

    showCats(){
        let cats = this._httpService.allCategories();
        cats.subscribe(cats => {
            this.categories = cats["allCats"];
        })
    }

}
