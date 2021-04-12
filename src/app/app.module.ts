import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { DealListingComponent } from './deal-listing/deal-listing.component';

import { LogInComponent} from './login/login.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    
    DealListingComponent,
    LogInComponent,
    AddDialogComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,  
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,  
    AngularMaterialModule
  ],
  entryComponents: [
    AddDialogComponent  
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
