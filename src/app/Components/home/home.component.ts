import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/Service/form.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  forms: any;
  status = ["INACTIVE", "ACTIVE"];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.forms, event.previousIndex, event.currentIndex);
  }

  constructor(private formService: FormService) {
  }

  ngOnInit() {
    this.formService.getAllForms().subscribe(data => {
      console.log(data)
      this.forms = data.formList;
    });
  }

  updateStatus(form : any){
    console.log(form);
  }
}
