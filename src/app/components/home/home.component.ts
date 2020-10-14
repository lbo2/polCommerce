import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public utils: UtilsService, public router: Router) { }

  async ngOnInit() {
    await this.consumirPOST();
    await this.consumirGET();
  }

  async consumirGET(){
    let urlGet:string = "https://devapipolpaico.azurewebsites.net/api/products";
    let response = await this.utils.callGET(urlGet);
    console.log(response);
  }

  async consumirPOST(){
    let urlPost:string = "https://jsonplaceholder.typicode.com/posts";
    let headers:any = { 
      'Content-Type': 'application/json; charset=UTF-8'
    };
    let parametros:any = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }
    let response = await this.utils.callPOST(urlPost, parametros, headers);
    console.log(response);
  }

  goToSeleccion() {
    let session = {
      zipCode: ''
    }
    sessionStorage.setItem('session', JSON.stringify(session));
    this.router.navigate(['seleccion']);
  }

}
