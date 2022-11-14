import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private http: HttpClient) { }

  getItem(){
    return this.http.get("http://localhost:3000/products")
  }

  postItem(item: any){
    return this.http.post("http://localhost:3000/products", item)
  }

}
