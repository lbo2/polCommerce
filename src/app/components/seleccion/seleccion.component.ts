import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.scss']
})
export class SeleccionComponent implements OnInit {

  readyToShow:boolean = false;
  products:any;
  session:any;

  constructor(public utils: UtilsService, public router: Router) { }

  async ngOnInit() {
    this.resetSession();
    await this.getProducts();
  }

  async getProducts(){
    let urlGet:string = "https://devapipolpaico.azurewebsites.net/api/products";
    this.products = await this.utils.callGET(urlGet);
    sessionStorage.setItem('products',JSON.stringify(this.products));
    this.readyToShow = true;
    console.log(this.products);
  }

  resetSession() {
    this.session = JSON.parse(sessionStorage.getItem('session'));
    this.session.element = '';
    this.session.product = '';
  }

  selectElement(id) {
    this.session.element = id;
    sessionStorage.setItem('session', JSON.stringify(this.session));
    this.router.navigate(['elemento']);
  }

  selectProduct(index) {
    this.session.product = this.products[index];
    sessionStorage.setItem('session', JSON.stringify(this.session));
    this.router.navigate(['producto']);
  }

}
