import { Component, OnInit } from '@angular/core';
import { ProvaServices } from '../../services/prova-services';

@Component({
  selector: 'app-prova-persona-service',
  standalone: false,
  templateUrl: './prova-persona-service.html',
  styleUrl: './prova-persona-service.css',
})
export class ProvaPersonaService implements OnInit{
  persone:any;

  constructor(private service:ProvaServices){}


  ngOnInit(): void {
    this.persone = this.service.getPersone();
  }


}
