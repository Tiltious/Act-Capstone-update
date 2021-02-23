import { Component, OnInit } from '@angular/core';
import { Devices } from 'src/app/devices';
import { DevicesService } from 'src/app/devices.service';
import { Employees } from 'src/app/employees';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-main-details',
  templateUrl: './main-details.component.html',
  styleUrls: ['./main-details.component.css']
})
export class MainDetailsComponent implements OnInit {
  myemployees:any
  constructor(
    private employee:EmployeesService,
    private device:DevicesService
  ){ 
    this.myemployees=this.employee.myemployees
  }

  mydevices:any[]=[]
  ngOnInit(): void {
    this.employee.selectedemp.subscribe((emp:Employees)=>{
      this.myemployees=emp
      this.devDisplay(this.myemployees.id)
      console.log('this.myemployees.id',this.myemployees.id)
    })
  }
  devs:any[]=[]
  back:any[]=[]
  devDisplay(emp_id:any){
   this.devs=this.device.devAssign(emp_id)
   this.back=this.device.devDisplay(this.devs)
  }
  sendDevice(dev:Devices){
    this.device.selecteddev.emit(dev)
    console.log(dev)
    console.log('workssofar2dev')
  }

}
