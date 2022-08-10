import { Component, OnInit, Input } from '@angular/core';
import {PetsService} from './Service/pets.service'
import {Pets, Procedures, Treatments} from './Modals/modals';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private service:PetsService) {}
  
  
  title = 'pets';
  
  //pets

  PetsList:any=[];
  @Input() pet:Pets ={
    petId:0,  
    petName:"",
    species:""    
  };
  myPet!:Pets; 
  petId!:number;
  petName!:string;
  species!:string;

  //procdures

  ProcList:any=[];
  @Input() procedures:Procedures ={
    procId:0,  
    procName:"",
    procDesc:""    
  };
  myProcedure!:Procedures; 
  procId!:number;
  procName!:string;
  procDesc!:string;

  //treatment

  TreatmentList:any=[];
  @Input() treatments:Treatments ={
    treatmentId:0,  
    petId_treat_fk:0,
    procId_fk:0   
  };
  myTreatment!:Treatments; 
  treatmentId!:number;
  petId_treat_fk!:number;
  procId_fk!:number;


  ngOnInit(): void {
    this.refreshPetsList();
  }

  getPetInfo(item:any){
    this.pet=item;  
    this.service.getAllProcs(item.petId).subscribe(data=>{
      console.log(data)
      this.ProcList=data;
    })
  }
  
  

  addPet(){     
    var val:any = {
    petName:this.petName,  
    species:this.species}    
    this.service.createPet(val).subscribe(res=>{      
    this.refreshPetsList();
    
    })
  }

  removePet(item:any) {
    
      this.service.deletePet(item.petId).subscribe(data=>{          
        this.refreshPetsList();
      })
    }
    


  refreshPetsList(){
    this.service.getAllPets().subscribe(data=>{
      console.log(data)
      this.PetsList=data;      
    });
  }
  
  
}
