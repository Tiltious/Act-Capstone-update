import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  myemployees:any
  constructor(private employee:EmployeesService) { }

  ngOnInit(): void {
    this.myemployees=this.employee.myemployees
  }

}
