export class DeviceAssignments {
    ass_id:string
    employee_id:string
    device_id:string
    constructor(ass_id:string,employee_id:string,device_id:string){
        this.device_id=device_id
        this.employee_id=employee_id
        this.ass_id=ass_id
    }
}
