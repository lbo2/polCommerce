import { Injectable } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public utils: UtilsService) { }

  async getProducts(){
    let urlGet:string = "https://devapipolpaico.azurewebsites.net/api/v1/Product/GetProductList";
    let products = await this.utils.callGET(urlGet);
    sessionStorage.setItem('products',JSON.stringify(products));
    console.log(products);
    return products;
  }

  async getElements() {
    let urlGet:string = "https://devapipolpaico.azurewebsites.net/api/v1/Element/GetElementList";
    let elements = await this.utils.callGET(urlGet);
    console.log(elements);
    return elements;
  }
}
