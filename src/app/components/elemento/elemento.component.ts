import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.scss']
})
export class ElementoComponent implements OnInit {

  session:any;

  constructor(public router: Router) { }

  ngOnInit() {
    this.session = JSON.parse(sessionStorage.getItem('session'));
  }

  selectMethod(id) {
    this.session.method = id;
    sessionStorage.setItem('session', JSON.stringify(this.session));
    this.router.navigate(['productos']);
  }

}
