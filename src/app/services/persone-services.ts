import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersoneServices {
  url = "http://localhost:9090/rest/persone/";

  persone = signal<any[]>([])
  constructor(private http:HttpClient){}

  list() {
     this.http.get<any[]>(this.url + 'list')
      .subscribe({
        next: (resp) => 
          {
            this.persone.set(resp)
          }
      })
  }
  
  findById(id:number){
    let params = new HttpParams().set('id',id);
    return this.http.get(this.url + "findById", {params});
  }

}
