import { Component, OnInit, ViewChild } from '@angular/core';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';
import { Field, Response, Section, value } from '../global.model';
import swal from 'sweetalert2';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { FormService } from '../Service/form.service';

@Component({
  selector: 'app-edit-app',
  templateUrl: './edit-app.component.html',
  styleUrls: ['./edit-app.component.css']
})
export class EditAppComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    public formService: FormService
  ) { }

  private r = new Response();

  fieldOptionList: value = {
    name: "",
    value: "",
    isDeleted: false,
    isActive: true,
  };
  success = false;

  fieldModels: Array<Field> = [
    {
      "type": "text",
      "icon": "fa-font",
      "label": "Text",
      "placeholder": "Enter your name",
      "className": "form-control",
      "handle": true,
      "isActive": true,
      "isRequired": false,
      "isFilterable": false,
      "isSortable": false
    },
    {
      "type": "number",
      "label": "Number",
      "icon": "fa-html5",
      "placeholder": "Enter your age",
      "className": "form-control",
      "value": "20",
      "min": 12,
      "max": 90,
      "isActive": true,
      "isRequired": false,
      "isFilterable": false,
      "isSortable": false
    },
    {
      "type": "date",
      "icon": "fa-calendar",
      "label": "Date",
      "placeholder": "Date",
      "className": "form-control",
      "isActive": true,
      "isRequired": false,
      "isFilterable": false,
      "isSortable": false
    },
    {
      "type": "time",
      "icon": "fa-clock-o",
      "label": "Time",
      "placeholder": "Time",
      "className": "form-control",
      "isActive": true,
      "isRequired": false,
      "isFilterable": false,
      "isSortable": false
    },
    {
      "type": "checkbox",
      "label": "Checkbox",
      "icon": "fa-list",
      "inline": true,
      "isActive": true,
      "isRequired": false,
      "isFilterable": false,
      "isSortable": false,
      "fieldOptionList": {
        "fieldOptionList": [
          {
            "name": "Option 1",
            "value": "option-1",
            "isDeleted": false,
            "isActive": true
          },
          {
            "name": "Option 2",
            "value": "option-2",
            "isDeleted": false,
            "isActive": true
          }
        ]
      }
    },
    {
      "type": "radio",
      "icon": "fa-list-ul",
      "label": "Radio",
      "isActive": true,
      "isRequired": false,
      "isFilterable": false,
      "isSortable": false,
      "fieldOptionList": {
        "fieldOptionList": [
          {
            "name": "Option 1",
            "value": "option-1",
            "isDeleted": false,
            "isActive": true
          },
          {
            "name": "Option 2",
            "value": "option-2",
            "isDeleted": false,
            "isActive": true
          }
        ]
      }
    },
    {
      "type": "autocomplete",
      "icon": "fa-bars",
      "label": "Dropdown",
      "placeholder": "Select",
      "className": "form-control",
      "isActive": true,
      "isRequired": false,
      "isFilterable": false,
      "isSortable": false,
      "fieldOptionList": {
        "fieldOptionList": [
          {
            "name": "Option 1",
            "value": "option-1",
            "isDeleted": false,
            "isActive": true
          },
          {
            "name": "Option 2",
            "value": "option-2",
            "isDeleted": false,
            "isActive": true
          },
          {
            "name": "Option 3",
            "value": "option-3",
            "isDeleted": false,
            "isActive": true
          }
        ]
      }
    },
  ];


  section: Array<Section> = [{
    "name": "Section",
    "isActive": true,
    "isDeleted": false,
    "fieldList": { "fieldToList": new Array<Response>() }
  }];

  modelsection: Array<Section> = [{
    "name": "Section",
    "isActive": true,
    "isDeleted": false,
    "fieldList": { "fieldToList": new Array<Field>() }
  }];

  model: any = {
    name: 'New Form',
    isActive: true,
    isDelete: false,
    theme: {
      bgColor: "ffffff",
      textColor: "555555",
      bannerImage: ""
    },
    formSectionList: { attributes: this.modelsection },

  };

  response: any = {
    name: 'From Name',
    isActive: true,
    isDelete: false,
    formSectionList: { formSectionList: this.section },
  }

  report = false;
  reports: any = [];

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 700px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  ngOnInit() {
    this.formService.getFieldTypes();
    //this.addSection();
    // this.route.params.subscribe( params =>{
    //   console.log(params);
    //   this.us.getDataApi('/admin/getFormById',{id:params.id}).subscribe(r=>{
    //     console.log(r);
    //     this.model = r['data'];
    //   });
    // });


    // this.model = this.cs.data;
    // console.log(this.model.data);

  }

  onDragStart(event: DragEvent) {
    console.log("drag started", JSON.stringify(event, null, 2));
  }

  onDragEnd(event: DragEvent) {
    console.log("drag ended", JSON.stringify(event, null, 2));
  }

  onDraggableCopied(event: DragEvent) {
    console.log("draggable copied", JSON.stringify(event, null, 2));
  }

  onDraggableLinked(event: DragEvent) {
    console.log("draggable linked", JSON.stringify(event, null, 2));
  }

  onDragged(item: any, list: any[], resp: any[], effect: DropEffect) {
    if (effect === "move") {
      const index = list.indexOf(item);
      list.splice(index, 1);
      resp.splice(index, 1);
    }
  }

  onDragCanceled(event: DragEvent) {
    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }

  onDragover(event: DragEvent) {
    console.log("dragover", JSON.stringify(event, null, 2));
  }

  onDrop(event: DndDropEvent, list?: any[], resplist?: any[]) {
    if (list && resplist && (event.dropEffect === "copy" || event.dropEffect === "move")) {
      if (event.dropEffect === "copy")
        event.data.name = event.data.type;
      let index = event.index;
      if (typeof index === "undefined") {
        index = list.length;
      }
      list.splice((index == 0) ? 0 : index - 1, 0, event.data);
      resplist.splice((index == 0) ? 0 : index - 1, 0, this.mapper(event.data));
    }
  }

  addValue(values) {
    values.push(this.fieldOptionList);
    this.fieldOptionList = { name: "", value: "", isActive: true, isDeleted: false };
  }

  addSection() {
    this.section.push({
      "name": "New Section",
      "isActive": true,
      "isDeleted": false,
      "fieldList": { "fieldToList": new Array<Response>() }
    })
    this.modelsection.push({
      "name": "New Section",
      "isActive": true,
      "isDeleted": false,
      "fieldList": { "fieldToList": new Array<Field>() }
    });
  }

  removeField(i: any, s_index: any) {
    swal({
      title: 'Are you sure?',
      text: "Do you want to remove this field?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove!'
    }).then((result) => {
      if (result.value) {
        this.model.formSectionList.attributes[s_index].fieldList.fieldToList.splice(i, 1);
        this.response.formSectionList.formSectionList[s_index].fieldList.fieldToList.splice(i, 1);
      }
    });

  }

  removeSection(s_index: any) {
    swal({
      title: 'Are you sure?',
      text: "Do you want to remove \""+ this.response.formSectionList.formSectionList[s_index].name +"\" field?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove!'
    }).then((result) => {
      this.response.formSectionList.formSectionList.splice(s_index, 1);
      this.model.formSectionList.attributes.splice(s_index, 1);
    });
  }

  updateForm() {
    let input = new FormData;
    input.append('id', this.model._id);
    input.append('name', this.model.name);
    input.append('description', this.model.description);
    input.append('bannerImage', this.model.theme.bannerImage);
    input.append('bgColor', this.model.theme.bgColor);
    input.append('textColor', this.model.theme.textColor);
    input.append('attributes', JSON.stringify(this.model.attributes));

    // this.us.putDataApi('/admin/updateForm',input).subscribe(r=>{
    //   console.log(r);
    //   swal('Success','App updated successfully','success');
    // });
  }

  clearForm() {
    this.model.attributes = [];
  }

  initReport() {
    this.report = true;
    let input = {
      id: this.model._id
    }
    // this.us.getDataApi('/admin/allFilledForms',input).subscribe(r=>{
    //   this.reports = r.data;
    //   console.log('reports',this.reports);
    //   this.reports.map(records=>{
    //     return records.attributes.map(record=>{
    //       if(record.type=='checkbox'){
    //         record.value = record.values.filter(r=>r.selected).map(i=>i.value).join(',');
    //       }
    //     })
    //   });
    // });
  }

  toggleValue(item) {
    item.selected = !item.selected;
  }

  submit() {
    let valid = true;
    let validationArray = JSON.parse(JSON.stringify(this.model.attributes));
    validationArray.reverse().forEach(field => {
      console.log(field.label + '=>' + field.required + "=>" + field.value);
      if (field.required && !field.value && field.type != 'checkbox') {
        swal('Error', 'Please enter ' + field.label, 'error');
        valid = false;
        return false;
      }
      if (field.required && field.regex) {
        let regex = new RegExp(field.regex);
        if (regex.test(field.value) == false) {
          swal('Error', field.errorText, 'error');
          valid = false;
          return false;
        }
      }
      if (field.required && field.type == 'checkbox') {
        if (field.values.filter(r => r.selected).length == 0) {
          swal('Error', 'Please enterrr ' + field.label, 'error');
          valid = false;
          return false;
        }

      }
    });
    if (!valid) {
      return false;
    }
    console.log('Save', this.model);
    let input = new FormData;
    input.append('formId', this.model._id);
    input.append('attributes', JSON.stringify(this.model.attributes))
    // this.us.postDataApi('/user/formFill',input).subscribe(r=>{
    //   console.log(r);
    //   swal('Success','You have contact sucessfully','success');
    //   this.success = true;
    // },error=>{
    //   swal('Error',error.message,'error');
    // });
  }

  change(event: any, index: any, list?: any[], resplist?: any[]) {
    const value: any = event.target.value.split(' ');
    console.log(value);
    list[index].type = value[0];
    resplist[index].fkFieldTypeId = value[1];
  }

  private mapper(f: Field): any {
    this.r = new Response();

    this.r.name = f.name;
    this.r.placeholder = f.placeholder;
    this.r.isActive = f.isActive;
    this.r.isFilterable = f.isFilterable;
    this.r.isRequired = f.isRequired;
    this.r.isSortable = f.isSortable;
    this.r.fkFieldTypeId = this.formService.indexOf(f.type);
    this.r.fieldOptionList = f.fieldOptionList;

    return this.r;
  }
}

