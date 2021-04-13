import { Component, Injector, NgZone  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';



@Component(
    {selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']

})

export class LogInComponent  {
  form!: FormGroup;

  constructor(
    private router: Router,
    private zone: NgZone,
    private formBuilder: FormBuilder
             
  ) {}     
  
 
  ngOnInit () {
   
  }

   email = new FormControl('jason@jason.com');
   password = new FormControl('jason');

  
  goToListings() { 
    this.zone.run(() => { this.router.navigate(['/listing']); });  
  }
}

