import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-task-box',
  templateUrl: './task-box.component.html',
  styleUrls: ['./task-box.component.css']
})
export class TaskBoxComponent implements OnInit {

tasks = [];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.allTasks();
  }

  allTasks(){
      let all = this._httpService.allTasks();
      all.subscribe(t => {
          this.tasks = t["allTasks"];
      })
  }

  

}
