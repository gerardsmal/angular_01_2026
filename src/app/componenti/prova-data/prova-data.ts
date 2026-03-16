import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-prova-data',
  standalone: false,
  templateUrl: './prova-data.html',
  styleUrl: './prova-data.css',
})
export class ProvaData {
  @ViewChild('inputSaluti') valoreInput! : ElementRef<HTMLInputElement>

  titolo ='corso angular versione 21';

  oggi = new Date();
  numero:number = 12.12345566

 

  onClick(){
    console.log(this.valoreInput.nativeElement.value);
  }

}
