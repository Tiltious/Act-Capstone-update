import { Component, Input, OnInit } from '@angular/core';
import { DevicesService } from 'src/app/devices.service';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-emp-delete-confirmation',
  templateUrl: './emp-delete-confirmation.component.html',
  styleUrls: ['./emp-delete-confirmation.component.css']
})
export class EmpDeleteConfirmationComponent implements OnInit {
  @Input() emp:any
  constructor(
    private empdetails:EmployeesService,
    private devservice:DevicesService) { }

  ngOnInit(): void {
  }

  deleteEmployee(id:string){
    let fordelete:any[]=[]
    fordelete=this.devservice.assignments.filter(
      (assign:any)=>{
        return assign.employee_id===id
      }
    )
    for(let del of fordelete){
      this.devservice.deleteDevice(del.device_id)
    }
    this.empdetails.deleteEmployee(id)
    alert('Employee delete')
  }

}
