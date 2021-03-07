import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Devices } from 'src/app/devices';
import { DevicesService } from 'src/app/devices.service';
import { GetValidationService } from 'src/app/get-validation.service';

@Component({
  selector: 'app-devupdateform',
  templateUrl: './devupdateform.component.html',
  styleUrls: ['./devupdateform.component.css']
})
export class DevupdateformComponent implements OnInit {
  @Input() emp:any
  constructor(
    private device:DevicesService,
    private validator:GetValidationService
  ) { }
  updatetoggle:boolean
  devcontrol:any
  mydev=new Devices('','','','')
  ngOnInit(): void {
    this.device.selecteddev.subscribe((dev:any)=>{
      this.mydev=dev
      this.devcontrol=new FormGroup({
        sn:new FormControl(this.mydev.sn,[Validators.maxLength(255),Validators.required]),
        description:new FormControl(this.mydev.description,[Validators.maxLength(255),Validators.required]),
        type:new FormControl(this.mydev.type,[Validators.pattern('^[0-9]*$'),Validators.required])
      })
    })
  }
  editDevice(device:Devices){
    this.device.editDevice(device.id,this.devcontrol.value,this.emp)
    alert('Update Complete')
  }
  formReset(){
    this.devcontrol.reset()
  }

}
