import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'newemp',component:AddNewEmployeeComponent},
  {path:'main',component:MainComponent},
  {path:'',redirectTo:'/main',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
