import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,  EventEmitter,  Input,  OnChanges,  OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-prova',
  standalone: false,
  templateUrl: './prova.html',
  styleUrl: './prova.css',
})
export class Prova implements OnInit, OnChanges{
  
  title ="Corso Angular"
  @Input() data:any;
  @Output() mandaDatiEvent = new EventEmitter<string>(); 

  ngOnInit(): void {
    console.log(this.data)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  cani = [
    {
      nome:'roger',
      razza:'golden',
      descrizione:'bla bla bal e compania...'
    }
  ]
/*
  persone = [
    {nome:'Luca', cognome:'Purino', isOnline:true, colore:'green'},
    {nome:'Paola', cognome:'Strumel', isOnline:false, colore:'red'},
    {nome:'Anna', cognome:'Berola', isOnline:true, colore:'grey'},
    {nome:'Marcello', cognome:'Zuchetti', isOnline:false, colore:'blue'},
    {nome:'Francesco', cognome:'Andreotti', isOnline:true, colore:'pink'},
  ]
*/
  numero=3;
  stringa='pluto';
  coloreOn='green';
  coloreOff='red';

  daVedere:Boolean = true;
  msgToSend="msg da Prova";
  isDisable = true;

  hoCliccato(e:any){
    console.log(e);
  }

  onInput(e:Event){
    console.log((<HTMLInputElement>e.target).value);
    // console.log(e);
  }

  mandaDati(){
    this.mandaDatiEvent.emit(this.msgToSend);
  }
}
