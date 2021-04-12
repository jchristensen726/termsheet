
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table'; 
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog'


const materialModules = [
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule
];

@NgModule({
    imports: [
      CommonModule,
      ...materialModules
    ],
    exports: [
      ...materialModules
    ],
    providers: [
      { provide: MAT_DIALOG_DATA, useValue: {} }     
  ]
  })
  
  export class AngularMaterialModule { }