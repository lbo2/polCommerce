import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {

  session:any;

  constructor() { }

  ngOnInit() {
    this.session = JSON.parse(sessionStorage.getItem('session'));
  }

}
