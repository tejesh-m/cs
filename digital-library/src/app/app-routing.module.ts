import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisteredBooksComponent } from './Components/registered-books/registered-books.component';

const routes: Routes = [{path:"",component:HomeComponent}, {path:"addbook", component:AddBookComponent}
    ,{path:"allbooks", component:RegisteredBooksComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
