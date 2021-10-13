import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inventory } from '../Model/inventory.model';
import { DatePipe } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private Http:HttpClient,
    public datepipe: DatePipe) { }

  readonly APIUrl='https://localhost:44345/api/inventory'
  FormData:Inventory = new Inventory();
  list: Inventory[] = [];

  PostInventoryDetails(){
    if(this.FormData.expiryDate == "")
    {
      this.FormData.expiryDate = null;
    }
    return this.Http.post(this.APIUrl,this.FormData);
  }

  getInventoryList(){
    return this.Http.get(this.APIUrl)
    .toPromise()
    .then(
      res=> {
        this.list = res as Inventory[];
        let date = new Date();
        this.list.forEach(e=> 
          {
            e.expiryDate !=null ? this.datepipe.transform(e.expiryDate.toString(), 'dd-MM-yyyy') : this.datepipe.transform(date, 'dd-MM-yyyy')
          });
      }
      );
  }

  deleteInventory(id:number){
    return this.Http.delete(`${this.APIUrl}/${id}`);
  }

  UpdateUserData(){
    if(this.FormData.expiryDate == "")
    {
      this.FormData.expiryDate = null;
    }
    return this.Http.put(`${this.APIUrl}/${this.FormData.id}`,this.FormData);
  }

}
