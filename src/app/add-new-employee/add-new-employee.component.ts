import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { GetValidationService } from '../get-validation.service';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {

  empcontrol=new FormGroup({
    emp_id:new FormControl('',[Validators.pattern('^[0-9]*$'),Validators.required]),
    name:new FormControl('',[Validators.minLength(3),Validators.maxLength(255),Validators.required]),
    email:new FormControl('',[Validators.email,Validators.required])
  })

  constructor(private empdetails:EmployeesService,private validator:GetValidationService) { }
  myemployees:any
  ngOnInit(): void {
    this.myemployees=this.empdetails.myemployees
  }
  formReset(){
    this.empcontrol.reset()
  }
  addEmployee(){
    this.empdetails.publishEmployee(this.empcontrol.value)
    console.log(this.empcontrol.value)
    console.log( this.empcontrol.valid)
    alert('Employee registration complete')
    this.formReset()
  }

}
