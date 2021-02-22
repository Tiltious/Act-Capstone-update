import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employees } from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private emphttp:HttpClient) { 
    this.getEmployees()
  }

  myemployees:Employees[]=[]

  publishEmployee(newemp:any){
    this.emphttp.post('https://actcapstoneupdate-default-rtdb.firebaseio.com/Employees.json',newemp)
    .subscribe((data:any)=>{
      this.myemployees.push(new Employees(data.id,newemp.emp_id,newemp.name,newemp.email))
    })
  }
  getEmployees(){
    this.emphttp.get('https://actcapstoneupdate-default-rtdb.firebaseio.com/Employees.json')
    .subscribe((employees:any)=>{
      for(let key in employees){
        this.myemployees.push(
          new Employees(key,employees[key].emp_id,employees[key].name,employees[key].email))
         
      }
      //this.selectedemp.emit(this.myemployees[0])
    })
  }
}
