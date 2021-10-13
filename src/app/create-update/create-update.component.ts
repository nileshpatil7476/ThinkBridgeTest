import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { windows } from 'node_modules_old/figures';
import { InventoryService } from '../Services/inventory.service';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  alertclass: string='';
  AlertMessage: string='';
  IsShow:boolean=false;

  constructor(public service:InventoryService,
    private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm)
  {
    if(this.service.FormData.id === 0)
    {
      this.AddNewInventory(form);
    }
    else{
      this.UpdateData(form);
    }
    
  }

  AddNewInventory(form:NgForm){
    this.service.PostInventoryDetails().subscribe(
      res =>{
        this.alertclass ="alert alert-success";
        this.AlertMessage = "Inventory Saved Successfully!!";
        this.CloseAlertMessage();
        form.resetForm();
      },
      error=>{
        this.alertclass ="alert alert-danger";
        this.AlertMessage = "Something Went Wrong!!";
        this.CloseAlertMessage();
      });
  }

  UpdateData(form:NgForm)
  {
    this.service.UpdateUserData().subscribe(
      res =>{
        this.alertclass ="alert alert-success";
        this.AlertMessage = "Inventory updated Successfully!!";
        this.CloseAlertMessage();
        form.resetForm();
        this.RedirectToListPate();
      },
      error=>{
        this.alertclass ="alert alert-danger";
        this.AlertMessage = "Something Went Wrong!!";
        this.CloseAlertMessage();
      });
  }
  RedirectToListPate() {
    setTimeout(() => {
      this.router.navigate(["/list"]);
    }, 3000);
  }
  CloseAlertMessage() {
    this.IsShow=true;
    setTimeout(() => {
      this.IsShow = false;
    }, 3000);
  }

}
