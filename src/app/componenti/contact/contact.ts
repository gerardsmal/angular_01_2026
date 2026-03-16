import { Component } from '@angular/core';
import { ProvaServices } from '../../services/prova-services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  persone:any;
  persona:any;
  isProfile:Boolean=false;
  
  constructor(private service:ProvaServices, 
              private route: ActivatedRoute){}


  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get("id")){
      this.isProfile=true;
      this.persona = this.service.getPersona(parseInt(this.route.snapshot.paramMap.get("id")!))
      console.log(this.persona);
    }  else {
      this.isProfile = false;
      this.persone = this.service.getPersone();
    }
  }



}
