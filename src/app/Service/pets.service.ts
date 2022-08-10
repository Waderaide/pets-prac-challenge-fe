import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pets } from '../Modals/modals'; 

@Injectable({
    providedIn: 'root'
  })

export class PetsService {
    baseUrl = 'https://localhost:7262/api/';
  
    constructor(private http:HttpClient) { }

    getAllPets():Observable<any[]>{
        return this.http.get<any>(this.baseUrl+"Pets/get-all");
      }
    
    createPet(val: any){
        const header = {"content-type" : "application/json"}
        const body = JSON.stringify(val);    
        return this.http.post(this.baseUrl+'Pets/add/', body, {"headers": header});
    }
    deletePet(val:any){
        return this.http.delete(this.baseUrl+'Pets/'+val);
      }
    getAllProcs(val:any):Observable<any[]>{
        return this.http.get<any>(this.baseUrl+"Procedures/get/" + val);
    }
}