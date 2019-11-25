import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { createInjectionToken } from '@angular/compiler/src/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    
errors = [];
category = {name: ""};
showCatForm = false;
categories = [];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
      this.getCats();
  }

    getCats(){
        let cats = this._httpService.allCategories();
        cats.subscribe(categories => {
            this.categories = categories["allCats"];
        })
    }

    showCForm(){
        if(this.showCatForm == true){
            this.showCatForm = false;
            }
        else{
            this.showCatForm = true;
            }
        }

    newCat(){
        let creation = this._httpService.createCategory(this.category);
        creation.subscribe(data => {
            console.log(data);
            this.category = {name: ""};
            this.showCatForm = false;
            this.ngOnInit();

        })
    }


}

