import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventory } from '../Model/inventory.model';
import { InventoryService } from '../Services/inventory.service';

@Component({
  selector: 'app-list-inventory',
  templateUrl: './list-inventory.component.html',
  styleUrls: ['./list-inventory.component.css']
})
export class ListInventoryComponent implements OnInit {

  alertclass: string='';
  AlertMessage: string='';
  IsShow:boolean=false;

  constructor(public service: InventoryService,
    private router: Router,
    public datepipe: DatePipe
    ) { }

  ngOnInit(): void {
    this.getInventoryList();
  }
  getInventoryList() {
    
    this.service.getInventoryList();
    
  }
  populateForm(SelectedUsersData: Inventory) {
    SelectedUsersData.expiryDate = this.datepipe.transform(SelectedUsersData.expiryDate,"yyyy-MM-dd");
    this.service.FormData = SelectedUsersData;
    this.router.navigate(['/createUpdate']);
  }

  deleteUserData(id:number)
  {
    this.service.deleteInventory(id).subscribe(
      res=>{
         this.getInventoryList();
         this.alertclass ="alert alert-success";
        this.AlertMessage = "Inventory Deleted Successfully!!";
        this.CloseAlertMessage();
      },
      error=>{
        this.alertclass ="alert alert-danger";
        this.AlertMessage = "Something Went Wrong!!";
        this.CloseAlertMessage();
      }
    );
  }
  CloseAlertMessage() {
    this.IsShow=true;
    setTimeout(() => {
      this.IsShow = false;
    }, 3000);
  }

}
