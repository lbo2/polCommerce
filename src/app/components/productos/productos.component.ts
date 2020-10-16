import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  readyToShow:boolean = false;
  products:any;
  session:any;

  constructor(public utils: UtilsService, public router: Router, public prodServ:ProductsService) { }

  async ngOnInit() {
    this.session = JSON.parse(sessionStorage.getItem('session'));
    await this.getProducts();
  }

  async getProducts(){
    let response:any = await this.prodServ.getProducts();
    this.products = response.items;
    sessionStorage.setItem('products',JSON.stringify(this.products));
    this.readyToShow = true;
    console.log(this.products);
  }

  selectProduct(index) {
    this.session.product = this.products[index];
    sessionStorage.setItem('session', JSON.stringify(this.session));
    this.router.navigate(['producto']);
  }

}
