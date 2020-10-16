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
  }

  goToSeleccion() {
    let session = {
      zipCode: ''
    }
    sessionStorage.setItem('session', JSON.stringify(session));
    this.router.navigate(['seleccion']);
  }

}
