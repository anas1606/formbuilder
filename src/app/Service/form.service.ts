import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }
  type: any;

  getFieldTypes() {
    this.http.get<any>('http://localhost:8080/fieldType/list').subscribe(data => {
      this.type = data.fieldTypeList;
    });
  }

  saveForm(data : any) {
    const json = JSON.stringify(data);
    const headers = { 'Content-Type': 'application/json' };
    const body = json ;
    this.http.post<any>('http://localhost:8080/form/addForm', body, { headers }).subscribe(data => {
      console.log(data)
      alert("Done");
    });
  }

  indexOf(name: string): any {
    for (var i in this.type) {
      if (this.type[i].name.toLowerCase() == name) {
        return this.type[i].id;
      }
    }

  }
}
