import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProvaServices } from '../../services/prova-services';
import { PersoneServices } from '../../services/persone-services';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatto',
  standalone: false,
  templateUrl: './contatto.html',
  styleUrl: './contatto.css',
})
export class Contatto implements OnInit{
  id:number ;
  persona=signal<any | null>(null);
  
  updateForm:FormGroup = new FormGroup({
    nome: new FormControl(null, Validators.required),
    cognome: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    colore: new FormControl(null, Validators.required),
  })
  
  constructor(private route:ActivatedRoute, private service:PersoneServices){}
  
  ngOnInit(): void {
    // controllo della vairazione del parametro
    this.route.paramMap.subscribe(
      (params:ParamMap) => {
        this.id =+ params.get("id"); // equivalent a parsint
        this.service.findById(this.id)
          .subscribe({
            next:((r:any) => {
              this.persona.set(r);
              this.updateForm.patchValue({
                nome:r.nome,
                cognome:r.cognome,
                email:r.email,
                colore:r.colore
              })

            }),
            error:((r:any) => {
              console.log(r);
            })
          })
      }

    )


  }

  onSubmit(){
    
  }


}
