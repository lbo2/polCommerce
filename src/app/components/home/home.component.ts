import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public utils: UtilsService) { }

  async ngOnInit() {
    await this.consumirPOST();
    await this.consumirGET();
  }

  async consumirGET(){
    let urlGet:string = "https://jsonplaceholder.typicode.com/posts";
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

}
