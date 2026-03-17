import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { PersoneServices } from '../../services/persone-services';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  homeForm: FormGroup = new FormGroup({
    nome: new FormControl(null, Validators.required),
    cognome: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    colore: new FormControl()
  })

  constructor(private service:PersoneServices) { }
  ngOnInit(): void {
  }



  onSumit() {
   this.service.create({
    nome:this.homeForm.value.nome,
    cognome:this.homeForm.value.cognome,
    email:this.homeForm.value.email,
    colore:this.homeForm.value.colore
   }).subscribe({
    next:((r:any) => {
      console.log(r)
      this.homeForm.reset();
    }),
    error:((r:any) => {
      console.log(r);
    })
   })
  }
}
