import { HttpClientModule } from '@angular/common/http';
import { NgModule,Pipe,PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DatePipe } from '@angular/common';


import { AppComponent } from './app.component';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { ListInventoryComponent } from './list-inventory/list-inventory.component';

const appRoutes: Routes = [
  { path: 'createUpdate', component: CreateUpdateComponent },
   { path: '', component: ListInventoryComponent },
   { path: 'list', component: ListInventoryComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateComponent,
    ListInventoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule

    
  ],
  exports: [RouterModule],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
