import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { FlightService } from '../flight-service.service';

@Component({
  selector: 'app-flight-add',
  templateUrl: './flight-add.component.html',
  styleUrls: ['./flight-add.component.scss']
})
export class FlightAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: FlightService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      person_name: ['', Validators.required ],
      business_name: ['', Validators.required ],
      business_gst_number: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

  addBusiness(person_name, busines_name, business_gst_number) {
    this.bs.addBusiness(person_name, busines_name, business_gst_number);
  }
}
