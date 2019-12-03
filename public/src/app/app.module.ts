import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowComponent } from './show/show.component';
import { MenuComponent } from './menu/menu.component';
import { TaskBoxComponent } from './task-box/task-box.component';
import { TaskComponent } from './task/task.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { FlaggedTasksComponent } from './flagged-tasks/flagged-tasks.component';
import { CategorizedTasksComponent } from './categorized-tasks/categorized-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    MenuComponent,
    TaskBoxComponent,
    TaskComponent,
    AllTasksComponent,
    FlaggedTasksComponent,
    CategorizedTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
