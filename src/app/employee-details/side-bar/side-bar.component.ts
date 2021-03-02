import { Component, Input, OnInit } from '@angular/core';
import { Employees } from 'src/app/employees';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  
  myemployees:any
  constructor(private employee:EmployeesService) { }
  active:boolean
  sendemployee(employee:Employees){
    this.employee.selectedemp.emit(employee)
  }
  ngOnInit(): void {
    console.log('sideoninit')
    this.myemployees=this.employee.myemployees 
  }

}
