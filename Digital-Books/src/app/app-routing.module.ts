import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatebooksComponent } from './Components/createbooks/createbooks.component';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';
import { HomeComponent } from './Components/home/home.component';
import { SearchbooksComponent } from './Components/searchbooks/searchbooks.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [{path:"allbooks", component:GetAllBooksComponent},
                        {path:"", component:HomeComponent},{path:"signin", component:SigninComponent}
                     , {path:"createbook", component:CreatebooksComponent},
                    {path:"searchbook", component:SearchbooksComponent},
                    {path:"signup", component:SignupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
