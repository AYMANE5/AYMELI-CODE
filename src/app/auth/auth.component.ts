import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  

  constructor() { }

  ngOnInit(): void {
  }

  onLogo() {
    console.log("Logo animation work");
    document.getElementById("transition").style.opacity = "0.3";
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Vous devez renseigner votre mail';
      
    }

    return this.email.hasError('email') ? 'Email non valide' : '';
  }

}

