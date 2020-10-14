import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

const MyAwesomeRangeValidator: ValidatorFn = (fg: FormGroup) => {
  let password = fg.get('password').value;
  let password2 = fg.get('password2').value;
  return (password === null && password2 === null) || (password === password2) ? null : { same: true };
};

@Component({
  selector: 'app-datos-entrega',
  templateUrl: './datos-entrega.component.html',
  styleUrls: ['./datos-entrega.component.scss']
})
export class DatosEntregaComponent implements OnInit {

  session:any;
  datosEntrega: FormGroup = this.formBuilder.group({
    nombres: [null, { validators: [Validators.required], updateOn: "change" }],
    email: [null,{validators: [Validators.required, Validators.email], updateOn: "change",}],
    telefono: [null,{validators: [Validators.required], updateOn: "change",}],
    direccion: [null,{validators: [Validators.required], updateOn: "change",}],
    comuna: [null,{validators: [Validators.required], updateOn: "change",}],
    ciudad: [null,{validators: [Validators.required], updateOn: "change",}],
    codigoPostal: [null,{validators: [Validators.required], updateOn: "change",}],
    password: [null,{validators: [], updateOn: "change",}],
    password2: [null,{validators: [], updateOn: "change",}],
  }, { validator: MyAwesomeRangeValidator });

  constructor(public formBuilder: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.session = JSON.parse(sessionStorage.getItem('session'));
  }

  guardarEnvio() {
    if(this.datosEntrega.get('password').value !== null) {
      // CREAR CUENTA
    }
    this.session.despacho = {
      nombres: this.datosEntrega.get('nombres').value,
      email: this.datosEntrega.get('email').value,
      telefono: this.datosEntrega.get('telefono').value,
      direccion: this.datosEntrega.get('direccion').value,
      comuna: this.datosEntrega.get('comuna').value,
      ciudad: this.datosEntrega.get('ciudad').value,
      codigoPostal: this.datosEntrega.get('codigoPostal').value,
    };
    sessionStorage.setItem('session', JSON.stringify(this.session));
    this.router.navigate(['resumen']);

  }

}
