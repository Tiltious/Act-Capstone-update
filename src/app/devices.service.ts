import { HttpClient } from '@angular/common/http';
import { Injectable, Output,EventEmitter } from '@angular/core';
import { DeviceAssignments } from './device-assignments';
import { Devices } from './devices';
import { EmployeesService } from './employees.service';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  @Output() selecteddev=new EventEmitter<Devices>()
  @Output() selectedassign=new EventEmitter<DeviceAssignments>()

  constructor(private dhttp:HttpClient,private employee:EmployeesService) { 
    this.getDevices()
    this.getAssignment()
  }
  mydevices:Devices[]=[]
  assignments:any[]=[]
  getDevices(){
    this.dhttp.get('https://actcapstoneupdate-default-rtdb.firebaseio.com/Devices.json')
    .subscribe((devices:any)=>{
      for(let key in devices){
        this.mydevices.push(
          new Devices(key,devices[key].sn,devices[key].description,devices[key].type)
        )}
      //this.selecteddev.emit(this.mydevices[0])
    })
  }
  getAssignment(){
    this.dhttp.get('https://actcapstoneupdate-default-rtdb.firebaseio.com/DeviceAssignment.json').subscribe(
      (devassignments:any)=>{
        for(let key in devassignments){
          this.assignments.push(
            new DeviceAssignments(key,devassignments[key].employee_id,devassignments[key].device_id)
          )
          console.log("ok getAssignment()")}
          //this.selectedassign.emit(this.assignments[0])
          this.employee.selectedemp.emit(this.employee.myemployees[0])
      })
  }
  publishDevice(value:any,emp:any){
    this.dhttp.post('https://actcapstoneupdate-default-rtdb.firebaseio.com/Devices.json',value).subscribe(
      (data:any)=>{
        this.mydevices.push(
          new Devices(data.name,value.sn,value.description,value.type)
        )
        let x={employee_id:emp.id,device_id:data.name}
        //kapvw ena emmit gia ton employee
        this.publishAssignment(x)
      }
    )
    console.log("ok publishDevice()")
  }
  publishAssignment(ass:any){
    this.dhttp.post('https://actcapstoneupdate-default-rtdb.firebaseio.com/DeviceAssignment.json',ass).subscribe(
      (data:any)=>{
        this.assignments.push(
          new DeviceAssignments(data.name,ass.employee_id,ass.device_id)
        )
        console.log("ok publishAssignment()")
       }
    )
  }
  deleteDevice(id:string){
    this.dhttp.delete('https://actcapstoneupdate-default-rtdb.firebaseio.com/Devices/'+id+'.json').subscribe(
      ()=>{
          this.mydevices.splice(this.mydevices.findIndex(function(device){          
          return device.id==id
        }),1)
        //this.selecteddev.emit(this.mydevices[0])
      }
    )
    let assid=this.assignments.findIndex((ass)=>{
      return ass.device_id==id
    })
    this.deleteAssignment(this.assignments[assid].ass_id)
  }
  deleteAssignment(assid:string){
    console.log(assid)
    this.dhttp.delete('https://actcapstoneupdate-default-rtdb.firebaseio.com/DeviceAssignment/'+assid+'.json').subscribe(
      ()=>{
        this.assignments.splice(this.assignments.findIndex(function(assign){
        return assign.ass_id==assid
        }),1)
      }
    )
  }
  editDevice(id:string,value:any){
    this.dhttp.put('https://actcapstoneupdate-default-rtdb.firebaseio.com/Devices/'+id+'.json',value)
    .subscribe((data:any)=>{
      console.log('editdev()',data)
      this.mydevices.splice(this.mydevices.findIndex(function(device){
        return device.id===id
      }),1)
      let newdev= new Devices(id,value.sn,value.description,value.type)
      this.mydevices.push(newdev)
      //this.selecteddev.emit(newdev)
    })
  }
  devAssign(emp_id:any){
    let assq=this.assignments.filter(
      (ass:any)=>{
        return ass.employee_id===emp_id
      }
    )
    return assq
  }
  devDisplay(devs:any){
    let back:any[]=[]
    for(let key of devs){
      let devq=this.mydevices.findIndex(
        (dev:any)=>{
          return key.device_id===dev.id
      })
      back.push(devq)
    }
    return back  
  }

}
