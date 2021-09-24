import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/Service/form.service';
import { LoaderService } from 'src/app/Service/loader.service';
import { FormBuilderComponent } from '../form-builder/form-builder.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public loaderService: LoaderService,
    private formService: FormService
  ) { }

  ngOnInit() {
  }
}
