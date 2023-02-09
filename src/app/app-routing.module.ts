import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddItemsComponent} from "./add-items/add-items.component";
import {ListItemsComponent} from "./list-items/list-items.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    component: AddItemsComponent,
    path: 'add'
  },
  {
    component: ListItemsComponent,
    path: 'list'
  },
  {
    component: AppComponent,
    path: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
