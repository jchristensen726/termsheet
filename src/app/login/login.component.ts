import { Component, Injector, NgZone  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


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
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }
  
  goToListings() { 
    this.zone.run(() => { this.router.navigate(['/listing']); });  
  }
}

