import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employees } from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private emphttp:HttpClient) { }

  myemployees:Employees[]=[]

  publishEmployee(newemp:any){
    this.emphttp.post('https://actcapstoneupdate-default-rtdb.firebaseio.com/Employees.json',newemp)
    .subscribe((data:any)=>{
      this.myemployees.push(new Employees(data.id,newemp.emp_id,newemp.name,newemp.email))
    })
  }
}
