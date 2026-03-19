import { Component, signal, ViewChild } from '@angular/core';
import { UtenteServices } from '../../services/utente-services';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  standalone: false,
  templateUrl: './registrazione.html',
  styleUrl: './registrazione.css',
})
export class Registrazione {
  msg = signal("");
  @ViewChild('registForm') registForm: NgForm;

  constructor(
    private utenteServices: UtenteServices,
    private routing: Router
  ) { };

  onSubmit() {
    this.msg.set("");
    if (this.registForm.form.value.password != this.registForm.form.value.passwordCntrl) {
      this.msg.set("password non coincidono,,");
      return;
    }
    this.utenteServices.create({
      userName: this.registForm.form.value.userName,
      pwd: this.registForm.form.value.password,
      email: this.registForm.form.value.email,
      role: 'USER'
    }).subscribe({
      next: ((r: any) => {
        console.log(r);
        this.routing.navigate(['login'])
      }),
      error: ((r: any) => {
        this.msg.set(r.error.msg);
      })
    });

  }


}
