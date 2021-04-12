import { BlockScrollStrategy, Overlay, ScrollStrategyOptions } from '@angular/cdk/overlay';

import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ChangeDetectorRef, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
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
  [x: string]: any;  
     
  constructor(@Inject(MAT_DIALOG_DATA)              
              public dialog: MatDialog             
              ) {}
              


  listings: Listing[] = [
    {dealName: 'Deal 1',
    purchasePrice: 100.00,
    address: '123 Fake St',
    netOperatingIncome: 2000,
    capRate: 2000/100        
},
   {
     dealName:'Deal 62',
     purchasePrice: 200.00,
     address: '124 Fake St',
     netOperatingIncome: 3000,
     capRate: 3000/200    
   },
   {
     dealName: 'Deal 3',
     purchasePrice: 300.00,
     address: '125 Fake St',
     netOperatingIncome: 4000,
     capRate: 4000/300    
   }
  ]
  displayedColumns = ['dealName', 'purchasePrice', 'address', 'netOperatingIncome', 'capRate']
  dataSource = this.listings;
  

  @ViewChild('listingsTable')
  listingsTable!: MatTable<Listing>;  
  @ViewChild('filter', { static: true })
  filter!: ElementRef;
  
  table!: MatTable<any>;
  

  ngOnInit () { 
    this.refresh(); 
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(AddDialogComponent, dialogConfig);
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

  addRowData(row_obj: any) {
     this.dataSource.push({      
      dealName: row_obj.dealName,
      purchasePrice: row_obj.purchasePrice,
      address: row_obj.address,
      netOperatingIncome: row_obj.netOperatingIncome,
      capRate: row_obj.capRate
    });
    this.refresh();
   }


   refresh() {
    //this.changeDetectorRef.detectChanges();
  }

}

