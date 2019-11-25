import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './http.service';
import { createInjectionToken } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    

categories = [];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
      this.showCats();
  }

    showCats(){
        let cats = this._httpService.allCategories();
        cats.subscribe(cats => {
            this.categories = cats["allCats"];
        })
    }



}
