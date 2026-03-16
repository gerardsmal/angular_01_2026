import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProvaServices {

 private persone = [
    { nome: 'Luca', cognome: 'Purino', isOnline: true, colore: 'green' },
    { nome: 'Paola', cognome: 'Strumel', isOnline: false, colore: 'red' },
    { nome: 'Anna', cognome: 'Berola', isOnline: true, colore: 'grey' },
    { nome: 'Marcello', cognome: 'Zuchetti', isOnline: false, colore: 'blue' },
    { nome: 'Francesco', cognome: 'Andreotti', isOnline: true, colore: 'pink' },
  ]

  getPersone(){
    return this.persone;
  }
  getPersona(index:number){
    return this.persone[index];
  }

}
