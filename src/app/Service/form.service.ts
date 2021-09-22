import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }
  type : any;

  getFieldTypes () {
    this.http.get<any>('http://localhost:8080/fieldType/list').subscribe(data => {
      this.type = data;
    });
  }

  indexOf(name: string) : any{
    for (var i in this.type){
      if(this.type[i].name.toLowerCase() == name){
        return this.type[i].id;
      }
    }

  }
}
