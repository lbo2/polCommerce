import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.scss']
})
export class SeleccionComponent implements OnInit {

  readyToShow:boolean = false;
  products:any;
  elements:any;
  session:any;

  constructor(public utils: UtilsService, public prodServ: ProductsService, public router: Router) { }

  async ngOnInit() {
    this.resetSession();
    await this.getElements();
    await this.getProducts();
  }

  async getProducts(){
    let response:any = await this.prodServ.getProducts();
    console.log(response);
    this.products = response.items;
    sessionStorage.setItem('products',JSON.stringify(this.products));
    this.readyToShow = true;
    console.log(this.products);
  }

  async getElements(){
    let response:any = await this.prodServ.getElements();
    console.log(response);
    this.elements = response.items;
    sessionStorage.setItem('elements',JSON.stringify(this.elements));
  }

  resetSession() {
    this.session = JSON.parse(sessionStorage.getItem('session'));
    this.session.element = '';
    this.session.product = '';
  }

  selectElement(index) {
    this.session.element = this.elements[index];
    sessionStorage.setItem('session', JSON.stringify(this.session));
    this.router.navigate(['elemento']);
  }

  selectProduct(index) {
    this.session.product = this.products[index];
    sessionStorage.setItem('session', JSON.stringify(this.session));
    this.router.navigate(['producto']);
  }

}
