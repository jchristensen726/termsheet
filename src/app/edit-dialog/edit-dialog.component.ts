import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Listing } from '../models/Listing';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent  {

  localData:any;
  form!: FormGroup;
  id!: number;
  dealName!: string;
  purchasePrice!: number;
  address!: string;
  netOperatingIncome!: number;
  capRate!: number;
  

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<EditDialogComponent>, 
    @Inject(MAT_DIALOG_DATA)  data: Listing) {         
     }

     ngOnInit() {
       this.form = this.fb.group ({
        id: [this.id],
        dealName: [this.dealName],
        purchasePrice: [this.purchasePrice],
        address: [this.address],
        netOperatingIncome: [this.netOperatingIncome],
        capRate: [this.netOperatingIncome],
       })
     }

     doAction(){     
      this.dialogRef.close({data:this.localData});
    }
  
    closeDialog(){
      this.dialogRef.close({event:'Cancel'});
    }

}
