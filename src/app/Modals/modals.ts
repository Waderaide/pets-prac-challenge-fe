import { NumberValueAccessor } from "@angular/forms";
import { } from "../Service/pets.service"

export interface Pets {
        petId:number;
        petName:string;
        species:string;                
  }

  export interface Procedures {
    procId:number;
    procName:string;
    procDesc:string;                
}
export interface Treatments {
    treatmentId:number;
    petId_treat_fk:number;
    procId_fk:number;                
}