import { Component, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import { Devices } from 'src/app/devices';
import { DevicesService } from 'src/app/devices.service';
import { Employees } from 'src/app/employees';
import { EmployeesService } from 'src/app/employees.service';
import { DevupdateformComponent } from './devupdateform/devupdateform.component';

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

  mydevices:any
  ngOnInit(): void {
    this.mydevices=this.device.mydevices
    this.employee.selectedemp.subscribe((emp:Employees)=>{
      this.myemployees=emp
      this.devDisplay(this.myemployees)
    })
  }
  back:any[]=[]
  devDisplay(emp:any){
   let devs=this.device.devAssign(emp.id)
   this.back=this.device.devDisplay(devs)
  }
  @ViewChild(DevupdateformComponent) mydev:DevupdateformComponent
  sendDevice(dev:Devices){
    this.device.selecteddev.emit(dev)
    if(!this.mydev.updatetoggle){
    this.mydev.updatetoggle=!this.mydev.updatetoggle
    }
    console.log(dev)
    console.log('workssofar2dev')
  }

}
