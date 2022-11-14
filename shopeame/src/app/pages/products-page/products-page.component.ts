import { ServicesService } from './../../shared/services/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {


  isSubmit: boolean = false;
  items: any = [];


  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {

    this.servicesService.getItem().subscribe((res: any) => {
    console.log(res);

    this.items = res;

    })


  }

  }

