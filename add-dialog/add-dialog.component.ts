import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { Listing } from '../models/Listing';



@Component({
  selector: 'app-add.dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})

export class AddDialogComponent implements OnInit{

    form!: FormGroup;
    id!: number;
    dealName!: string;
    purchasePrice!: number;
    address!: string;
    netOperatingIncome!: number;
    capRate!: number;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<AddDialogComponent>,
        @Inject(MAT_DIALOG_DATA) {id, dealName,purchasePrice,
          address, netOperatingIncome, capRate}:Listing ) {

        this.id = id
        this.dealName = dealName;
        this.purchasePrice = purchasePrice;
        this.address = address;
        this.netOperatingIncome =  netOperatingIncome;
        this.capRate = capRate;
    

    this.form = fb.group({
      id: [id],
      dealName: [dealName],
      purchasePrice: [purchasePrice],
      address: [address],
      netOperatingIncome: [netOperatingIncome],
      capRate: [capRate]
  });
}

    ngOnInit() {

    }

    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }

  // dealName!: string;
  // purchasePrice!: number;
  // address!: string;
  // netOperatingIncome!: number;
  // capRate!: number;
  
  
  // constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
  //             private fb: FormBuilder,
  //             private form: FormGroup,
  //             @Inject(MAT_DIALOG_DATA) public data: Listing,
  //             public listingService: ListingService) {
  //               this.dealName = data.dealName;
  //               this.purchasePrice = data.purchasePrice;
  //               this.address = data.address;
  //               this.netOperatingIncome = data.netOperatingIncome;
  //               this.capRate = data.capRate;

  //              }

  //              ngOnInit () {
  //                this.form = this.fb.group({
  //                  this.dealName: [this.dealName, []],
  //                })
  //              }

  // formControl = new FormControl('', [
  //   Validators.required
  //   // Validators.email,
  // ]);

  // getErrorMessage() {
  //   return this.formControl.hasError('required') ? 'Required field' : '';
  // }
  

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  // public confirmAdd(data: Listing): void {
  //   console.log(data);    
  //   this.listingService.addDeal(data);
  // }
}
