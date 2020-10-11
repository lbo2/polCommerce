import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  forma:string;
  mostrarVolumen:boolean = false;
  volumen:number = 0;
  losa = {
    grosor: null,
    ancho: null,
    longitud: null,
    grosorEscala: 'cm',
    anchoEscala: 'm',
    longitudEscala: 'm'
  }
  piscina = {
    profundidad: null,
    ancho: null,
    longitud: null,
    espesor: null,
    profundidadEscala: 'm',
    espesorEscala: 'cm',
    anchoEscala: 'm',
    longitudEscala: 'm'
  }
  escalera = {
    altura: null,
    ancho: null,
    longitud: null,
    escalones: null,
    alturaEscala: 'm',
    anchoEscala: 'm',
    longitudEscala: 'm'
  }

  constructor(public dialogRef: MatDialogRef<CalculadoraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  calcular() {
    switch (this.forma) {
      case 'losa':
        let grosor = this.losa.grosor * (this.losa.grosorEscala == 'cm' ? 0.01 : 1);
        let ancho = this.losa.ancho * (this.losa.anchoEscala == 'cm' ? 0.01 : 1);
        let longitud = this.losa.longitud * (this.losa.longitudEscala == 'cm' ? 0.01 : 1);
        this.volumen = grosor * ancho * longitud;
        break;
      case 'piscina':
        let profundidad = this.piscina.profundidad * (this.piscina.profundidadEscala == 'cm' ? 0.01 : 1);
        let anchoPiscina = this.piscina.ancho * (this.piscina.anchoEscala == 'cm' ? 0.01 : 1);
        let largo = this.piscina.longitud * (this.piscina.longitudEscala == 'cm' ? 0.01 : 1);
        let espesor = this.piscina.espesor * (this.piscina.espesorEscala == 'cm' ? 0.01 : 1);
        let volLargos = 2 * ((largo + 2 * espesor) * (profundidad + espesor) * espesor); 
        let volAnchos = 2 *((profundidad + espesor) * espesor * anchoPiscina);
        let volBase = largo * anchoPiscina * espesor;
        this.volumen = volAnchos + volLargos + volBase;
        break;
      case 'escalera':
        let altura = this.escalera.altura * (this.escalera.alturaEscala == 'cm' ? 0.01 : 1);
        let anchoEscalera = this.escalera.ancho * (this.escalera.anchoEscala == 'cm' ? 0.01 : 1);
        let largoEscalera = this.escalera.longitud * (this.escalera.longitudEscala == 'cm' ? 0.01 : 1);
        let escalones = this.escalera.escalones;
        this.volumen = 0;
        for(let i=1; i<= this.escalera.escalones; i++) {
          this.volumen += (largoEscalera/escalones) * anchoEscalera * (altura/escalones) * i;
        }
        break;
    
      default:
        break;
    }
    this.volumen = Math.ceil(this.volumen);
    this.mostrarVolumen = true;
  }

  agregar() {
    this.dialogRef.close(this.volumen);
  }

  selectForma(value){
    this.mostrarVolumen = false;
    this.volumen = 0;
    this.losa = {
      grosor: null,
      ancho: null,
      longitud: null,
      grosorEscala: 'cm',
      anchoEscala: 'm',
      longitudEscala: 'm'
    }
    this.piscina = {
      profundidad: null,
      ancho: null,
      longitud: null,
      espesor: null,
      profundidadEscala: 'm',
      espesorEscala: 'cm',
      anchoEscala: 'm',
      longitudEscala: 'm'
    }
    console.log(value);
  }

}
