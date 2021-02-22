export class Devices {
    id:string
    sn:string
    description:string
    type:string
    
    constructor(id:string,sn:string,description:string,type:string){
        this.id=id
        this.description=description
        this.sn=sn
        this.type=type
        
    }
}
