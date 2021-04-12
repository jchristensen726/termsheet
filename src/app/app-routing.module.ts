import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './login/login.component';
import { DealListingComponent } from './deal-listing/deal-listing.component';
import {
  AuthGuardService as AuthGuard 
} from './services/auth-guard.service';


   const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LogInComponent },
    { path: 'listing', component: DealListingComponent, canActivate: [AuthGuard] }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
  

