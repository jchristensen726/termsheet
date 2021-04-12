import { BlockScrollStrategy, Overlay, ScrollStrategyOptions } from '@angular/cdk/overlay';

import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import {  Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { Listing } from '../models/Listing';


@Component({
  selector: 'app-deal-listing',
  templateUrl: './deal-listing.component.html',
  styleUrls: ['./deal-listing.component.scss']
})
export class DealListingComponent implements OnInit{  
     
  constructor(           
                private dialog: MatDialog             
              ) {}             


  listings = [
    {id: 1,
      dealName: 'Deal 1',
    purchasePrice: 100.00,
    address: '123 Fake St',
    netOperatingIncome: 2000,
    capRate: 2000/100        
},
   {
     id: 2,
     dealName:'Deal 6277777777777777777777777777777777777777777777777777777777777',
     purchasePrice: 200.00,
     address: '124 Fake St',
     netOperatingIncome: 3000,
     capRate: 3000/200    
   },
   {
     id: 3,
     dealName: 'Deal 3',
     purchasePrice: 300.00,
     address: '125 Fake St',
     netOperatingIncome: 4000,
     capRate: 4000/300    
   }
  ]
  displayedColumns = ['dealName', 'purchasePrice', 'address', 'netOperatingIncome', 'capRate', 'action']
  dataSource = this.listings;
  

  @ViewChild('listingsTable')
  listingsTable!: MatTable<Listing>;  
  @ViewChild('filter', { static: true })
  filter!: ElementRef;
  
  table!: MatTable<any>;
  

  ngOnInit () { 
  
  }

  openDialog(action: any,obj: { action: any; }) {
    obj.action = action;
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
       if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }
  deleteRowData(data: any) {
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != data.id;
    });
  }
  
  updateRowData(data: any) {
    throw new Error('Method not implemented.');
  }


  addDeal(obj: any) {     
       const dialogRef = this.dialog.open(AddDialogComponent, {
       width: '450px',
       height: '500px',
       data: obj
     });    

   dialogRef.afterClosed().subscribe(deal => {
     this.dataSource.push(deal);
     this.listingsTable.renderRows();
    })      
  }
}

  






