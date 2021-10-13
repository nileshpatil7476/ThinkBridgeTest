import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Inventory } from './Model/inventory.model';
import { InventoryService } from './Services/inventory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ThinkBridgeTestWeb';

  constructor() { }

  
}
