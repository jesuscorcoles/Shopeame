import { ServicesService } from './../../shared/services/services.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  registerForm!: FormGroup;
  isSubmit: boolean = false;
  newProduct: any;


  constructor(private formBuilder: FormBuilder, private servicesService: ServicesService) { }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      routeImg: ['',],
      opinions: ['',]
    })
  }

  submit(){
    this.isSubmit = true;
    this.newProduct = this.registerForm.value

    console.log(this.newProduct);
    this.servicesService.postItem(this.newProduct).subscribe();
  }


}
