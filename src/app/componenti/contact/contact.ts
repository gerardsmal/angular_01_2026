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
 
  
  constructor(private service:ProvaServices, 
              private route: ActivatedRoute){}


  ngOnInit(): void {
      this.persone = this.service.getPersone();
  }
}
