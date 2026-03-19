import { Component, OnInit, signal } from '@angular/core';
import { AuthServices } from './auth/auth-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {


  protected readonly title = signal('corso-angular');
  ngOnInit(): void {
    this.persone = this.persone0;
  }
  
  constructor(private auth:AuthServices,
              private routing:Router
  ){}

  persone = [{}];
  persone0 = [
    { nome: 'Luca', cognome: 'Purino', isOnline: true, colore: 'green' },
    { nome: 'Paola', cognome: 'Strumel', isOnline: false, colore: 'red' },
    { nome: 'Anna', cognome: 'Berola', isOnline: true, colore: 'grey' },
    { nome: 'Marcello', cognome: 'Zuchetti', isOnline: false, colore: 'blue' },
    { nome: 'Francesco', cognome: 'Andreotti', isOnline: true, colore: 'pink' },
  ]

  persone1 = [
    { nome: 'Bianca', cognome: 'Laburina', isOnline: true, colore: 'blue' },
    { nome: 'Berni', cognome: 'Labianca', isOnline: true, colore: 'green' },
    { nome: 'Donald', cognome: 'Duck', isOnline: true, colore: 'red' },
    { nome: 'Mickey', cognome: 'Mouse', isOnline: false, colore: 'grey' },
  ]
  load(){
    this.persone = this.persone1;
  }

  restore(){
    this.persone = this.persone0;
  }

  leggoMessagioRicevuta(value:string){
    console.log("meaggio ricevuto:" + value)
  }

logout(){
  this.auth.resetAll();
  this.routing.navigate(['login']);
}

}
