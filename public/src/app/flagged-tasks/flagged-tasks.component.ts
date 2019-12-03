import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-flagged-tasks',
  templateUrl: './flagged-tasks.component.html',
  styleUrls: ['./flagged-tasks.component.css']
})
export class FlaggedTasksComponent implements OnInit {

    flaggedTasks = [];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
      let observable = this._httpService.flagged();
      observable.subscribe(tasks => {
            if(tasks["status"] == false){
                console.log("There was an error getting flagged tasks.");
                console.log(tasks["fTasks"]);
            }
            else{
                console.log(tasks["fTasks"]);
                this.flaggedTasks = tasks["fTasks"];
            }
      })
    }

}
