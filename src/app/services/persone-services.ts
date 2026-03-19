import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';

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

  create(body: {}){
    return this.http.post(this.url + "create" , body)
      .pipe(tap(() => this.list()))
  }

  update(body: {}){
    return this.http.put(this.url + "update" , body)
      .pipe(tap(() => this.list()))
  }
  delete(id:number){
  //  return this.http.delete(this.url + "delete/" + id)
      return this.http.delete (`${this.url}delete/${id}`) // backtick option + \ 
      .pipe(tap(() => this.list()))
  }
}
