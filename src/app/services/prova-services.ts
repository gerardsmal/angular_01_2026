import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProvaServices {

 private persone = [
    { nome: 'Luca', cognome: 'Purino', email:'l.purino@gmail.com' , isOnline: true, colore: 'green' },
    { nome: 'Paola', cognome: 'Strumel', email:'p.strumel@gmail.com', isOnline: false, colore: 'red' },
    { nome: 'Anna', cognome: 'Berola', email:'a.berola@gmail.com', isOnline: true, colore: 'grey' },
    { nome: 'Marcello', cognome: 'Zuchetti', email:'m.zuchetti@gmail.com', isOnline: false, colore: 'blue' },
    { nome: 'Francesco', cognome: 'Andreotti', email:'f.andreotti@gmail.com', isOnline: true, colore: 'pink' },
  ]

  getPersone(){
    return this.persone;
  }
  getPersona(index:number){
    return this.persone[index];
  }

}
