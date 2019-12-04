import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { CategorizedTasksComponent } from './categorized-tasks/categorized-tasks.component';
import { FlaggedTasksComponent } from './flagged-tasks/flagged-tasks.component';


const routes: Routes = [
    {path: "tasks", component: AllTasksComponent},
    {path: "tasks/flagged", component: FlaggedTasksComponent},
    {path: "tasks/:id", component: CategorizedTasksComponent},
    {path: "", pathMatch: "full", redirectTo: "/tasks"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
