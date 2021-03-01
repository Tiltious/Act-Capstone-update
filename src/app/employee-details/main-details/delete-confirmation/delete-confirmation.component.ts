import { Component, Input, OnInit } from '@angular/core';
import { DevicesService } from 'src/app/devices.service';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {
  @Input()deldev:any
  constructor(
    private employee:EmployeesService,
    private device:DevicesService) { }

  ngOnInit(): void {
  }

  deleteDevice(id:string){
    this.device.deleteDevice(id)
    console.log(id)
    alert('device removed')
  }
}
