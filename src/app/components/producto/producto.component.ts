import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CalculadoraComponent } from '../../shared/calculadora/calculadora.component';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  readyToShow:boolean = false;
  session:any;
  product:any;
  volumen:number;
  cantidadCamiones:number;
  camionesForm: FormGroup = this.formBuilder.group({
    volumen: [null, { validators: [Validators.required], updateOn: "change" }],
    volumenCamion: [null,{validators: [Validators.required], updateOn: "change",}],
  });

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.session = JSON.parse(sessionStorage.getItem('session'));
    this.product = this.session.product;
    console.log(this.camionesForm.get('volumen'));
    this.camionesForm.valueChanges.subscribe(val => {
      console.log(val);
      if(val.volumen && val.volumenCamion) {
        this.cantidadCamiones = Math.ceil(val.volumen / val.volumenCamion);
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CalculadoraComponent, {
      // width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.volumen = result;
      this.camionesForm.get('volumen').setValue(this.volumen);
    });
  }

  siguiente() {
    this.session.cubicacion = {
      cantidadM3: this.camionesForm.get('volumen').value,
      m3PorCamion: this.camionesForm.get('volumenCamion').value,
      totalCamiones: this.cantidadCamiones
    }
    sessionStorage.setItem('session', JSON.stringify(this.session));
    this.router.navigate(['agenda']);
  }

}