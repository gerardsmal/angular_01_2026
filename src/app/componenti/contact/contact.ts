import { Component } from '@angular/core';
import { ProvaServices } from '../../services/prova-services';
import { ActivatedRoute } from '@angular/router';
import { PersoneServices } from '../../services/persone-services';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  persone:any;
 
  
  constructor(private service:PersoneServices, 
              private route: ActivatedRoute){
      this.persone = this.service.persone;            
  }


  ngOnInit(): void {
    this.service.list();
  }
}
