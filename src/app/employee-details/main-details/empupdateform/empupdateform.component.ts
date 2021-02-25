import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DevicesService } from 'src/app/devices.service';
import { Employees } from 'src/app/employees';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-empupdateform',
  templateUrl: './empupdateform.component.html',
  styleUrls: ['./empupdateform.component.css']
})
export class EmpupdateformComponent implements OnInit {

  constructor(
    private empdetails:EmployeesService,
    private devservice:DevicesService)
    { }
  myemp:any=new Employees('','','','')
  empedittoggle:boolean
  empcontrol=new FormGroup({
    emp_id:new FormControl(''),
    name:new FormControl(''),
    email:new FormControl('')
  })
  ngOnInit(): void {
    this.empdetails.selectedemp.subscribe((employee:any)=>{
      this.myemp=employee
      this.empcontrol=new FormGroup({
        emp_id:new FormControl(this.myemp.emp_id),
        name:new FormControl(this.myemp.name,[Validators.minLength(3),Validators.maxLength(255),Validators.required]),
        email:new FormControl(this.myemp.email)
      })
    })
  }
  editEmployee(employee:Employees){
    this.empdetails.editEmployee(employee.id,this.empcontrol.value)
    alert('Refresh Page Required')
  }

}
