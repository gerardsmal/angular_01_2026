import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProvaServices } from '../../services/prova-services';

@Component({
  selector: 'app-contatto',
  standalone: false,
  templateUrl: './contatto.html',
  styleUrl: './contatto.css',
})
export class Contatto implements OnInit{
  id:number ;
  persona:any;

  constructor(private route:ActivatedRoute, private service:ProvaServices){}
  
  ngOnInit(): void {
    // controllo della vairazione del parametro
    this.route.paramMap.subscribe(
      (params:ParamMap) => {
        this.id =+ params.get("id"); // equivalent a parsint
        this.persona = this.service.getPersona(this.id)
      }

    )


  }




}
