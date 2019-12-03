import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-categorized-tasks',
  templateUrl: './categorized-tasks.component.html',
  styleUrls: ['./categorized-tasks.component.css']
})
export class CategorizedTasksComponent implements OnInit {

catName: any;
cat: any;

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        this.catName = (params['category']);
        let observable = this._httpService.oneCategory(this.catName);
            observable.subscribe(data => {
                if(data["status"] == false){
                    console.log("Something went wrong trying to get one category.");
                }
                else{
                    this.cat = data["category"];
                }
            })
        })
    }

}
