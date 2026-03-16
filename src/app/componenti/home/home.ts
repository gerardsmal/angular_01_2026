import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
  homeForm : FormGroup = new FormGroup({
      nome: new FormControl(null, Validators.required),
      cognome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required , Validators.email]),
      colore: new FormControl()
    })
 
  ngOnInit(): void {
    this.homeForm.patchValue({
      nome:'Paolo',
      cognome:'Verde',
      email:'p.verder@gmail.com',
      colore:'red'
    })
  }



  onSumit(){
    console.log(this.homeForm);
    console.log("nome:" + this.homeForm.value.nome);
    console.log("cognome:" + this.homeForm.value.cognome);
  }
}
