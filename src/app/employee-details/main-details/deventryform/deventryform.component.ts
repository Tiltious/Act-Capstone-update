import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DevicesService } from 'src/app/devices.service';
import { EmployeesService } from 'src/app/employees.service';
import { GetValidationService } from 'src/app/get-validation.service';

@Component({
  selector: 'app-deventryform',
  templateUrl: './deventryform.component.html',
  styleUrls: ['./deventryform.component.css']
})
export class DeventryformComponent implements OnInit {
  @Input() emp:any
  devcontrols=new FormGroup({
    sn:new FormControl('',[Validators.pattern('^[0-9]*$'),Validators.maxLength(255),Validators.required]),
    description:new FormControl("",[Validators.maxLength(255),Validators.required]),
    type:new FormControl('',[Validators.pattern('^[0-9]*$'),Validators.required])
  })
  constructor(
    private employee:EmployeesService,
    private devservice:DevicesService,
    private validator:GetValidationService
  ) { }
    
  addDevice(emp:any){
    this.devservice.publishDevice(this.devcontrols.value,emp)
    this.formReset()
    console.log(emp,'empnadw')
  }
  formReset(){
    this.devcontrols.reset()
  }
  mydevices:any[]=[]
  ngOnInit(): void {
    this.mydevices=this.devservice.mydevices
    this.employee.selectedemp.emit(this.emp)
    console.log(this.emp,'thisempnadw')
  }

}
