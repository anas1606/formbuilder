import { Component, OnInit, ViewChild } from '@angular/core';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';
import { field, mapper, response, value } from '../global.model';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-edit-app',
  templateUrl: './edit-app.component.html',
  styleUrls: ['./edit-app.component.css']
})
export class EditAppComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  value: value = {
    label: "",
    value: ""
  };
  success = false;

  fieldModels: Array<field> = [
    {
      "type": "text",
      "icon": "fa-th",
      "label": "Section",
      "placeholder": "Enter your name",
      "className": "form-control",
      "handle": true
    },
    {
      "type": "text",
      "icon": "fa-font",
      "label": "Text",
      "placeholder": "Enter your name",
      "className": "form-control",
      "handle": true,
      "is_active": true,
      "is_required": false,
      "is_filterable": false,
      "is_sortable": false
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
      "is_active": true,
      "is_required": false,
      "is_filterable": false,
      "is_sortable": false
    },
    {
      "type": "date",
      "icon": "fa-calendar",
      "label": "Date",
      "placeholder": "Date",
      "className": "form-control",
      "is_active": true,
      "is_required": false,
      "is_filterable": false,
      "is_sortable": false
    },
    {
      "type": "time",
      "icon": "fa-clock-o",
      "label": "Time",
      "placeholder": "Time",
      "className": "form-control",
      "is_active": true,
      "is_required": false,
      "is_filterable": false,
      "is_sortable": false
    },
    {
      "type": "checkbox",
      "label": "Checkbox",
      "icon": "fa-list",
      "inline": true,
      "is_active": true,
      "is_required": false,
      "is_filterable": false,
      "is_sortable": false,
      "values": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        }
      ]
    },
    {
      "type": "radio",
      "icon": "fa-list-ul",
      "label": "Radio",
      "is_active": true,
      "is_required": false,
      "is_filterable": false,
      "is_sortable": false,
      "values": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        }
      ]
    },
    {
      "type": "autocomplete",
      "icon": "fa-bars",
      "label": "Select",
      "placeholder": "Select",
      "className": "form-control",
      "is_active": true,
      "is_required": false,
      "is_filterable": false,
      "is_sortable": false,
      "values": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        },
        {
          "label": "Option 3",
          "value": "option-3"
        }
      ]
    },
  ];

  modelFields: Array<field> = [];
  responseFields: Array<response> = [];

  model: any = {
    name: 'New Form',
    theme: {
      bgColor: "ffffff",
      textColor: "555555",
      bannerImage: ""
    },
    attributes: this.modelFields
  };

  response: any = {
    name: 'From Name',
    fields: this.responseFields
  }

  report = false;
  reports: any = [];

  constructor(
    private observer: BreakpointObserver,
    private route: ActivatedRoute
  ) { }

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
      const resindex = resp.indexOf(item);
      list.splice(index, 1);
      resp.splice(resindex, 1);

    }
  }

  onDragCanceled(event: DragEvent) {
    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }

  onDragover(event: DragEvent) {
    console.log("dragover", JSON.stringify(event, null, 2));
  }

  onDrop(event: DndDropEvent, list?: any[], resplist?: any[] ) {
    if (list && resplist && (event.dropEffect === "copy" || event.dropEffect === "move")) {
      if (event.dropEffect === "copy")
        event.data.name = event.data.type;
      let index = event.index;
      if (typeof index === "undefined") {
        index = list.length;
      }
      list.splice(index, 0, event.data);
      resplist.splice(index, 0, event.data);
    }
  }

  addValue(values) {
    values.push(this.value);
    this.value = { label: "", value: "" };
  }

  removeField(i) {
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
        this.model.attributes.splice(i, 1);
      }
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

}

