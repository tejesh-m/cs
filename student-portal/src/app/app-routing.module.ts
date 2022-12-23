import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { StudentRegComponent } from './Components/student-reg/student-reg.component';
import { RegisteredStudentsComponent } from './Components/registered-students/registered-students.component';
import { AboutComponent } from './Components/about/about.component';
import { PipeDemoComponent } from './Components/pipe-demo/pipe-demo.component';

const routes: Routes = [{path:"", component:HomeComponent}, {path:"register",  component:StudentRegComponent}, 
        {path:"registered", component:RegisteredStudentsComponent}, 
        {path:"about", component:AboutComponent}, {path:"pipe", component:PipeDemoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
