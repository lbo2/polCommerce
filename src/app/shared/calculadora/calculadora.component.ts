import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  forma:string;
  mostrarVolumen:boolean = false;
  volumen:number = 0;
  losaForm: FormGroup = this.formBuilder.group({
    grosor: ['', { validators: [Validators.required], updateOn: "change" }],
    ancho: ['',{validators: [Validators.required], updateOn: "change",}],
    longitud: ['', { validators: [Validators.required], updateOn: "change" }],
    grosorEscala: ['cm', { validators: [Validators.required], updateOn: 'change' }],
    anchoEscala: ['m', { validators: [Validators.required], updateOn: 'change' }],
    longitudEscala: ['m', { validators: [Validators.required], updateOn: 'change' }],
  });
  piscinaForm: FormGroup = this.formBuilder.group({
    profundidad: ['', { validators: [Validators.required], updateOn: "change" }],
    ancho: ['',{validators: [Validators.required], updateOn: "change",}],
    longitud: ['', { validators: [Validators.required], updateOn: "change" }],
    espesor: ['', { validators: [Validators.required], updateOn: "change" }],
    profundidadEscala: ['m', { validators: [Validators.required], updateOn: 'change' }],
    anchoEscala: ['m', { validators: [Validators.required], updateOn: 'change' }],
    longitudEscala: ['m', { validators: [Validators.required], updateOn: 'change' }],
    espesorEscala: ['cm', { validators: [Validators.required], updateOn: 'change' }],
  });
  escaleraForm: FormGroup = this.formBuilder.group({
    altura: ['', { validators: [Validators.required], updateOn: "change" }],
    ancho: ['',{validators: [Validators.required], updateOn: "change",}],
    longitud: ['', { validators: [Validators.required], updateOn: "change" }],
    escalones: ['', { validators: [Validators.required], updateOn: "change" }],
    alturaEscala: ['m', { validators: [Validators.required], updateOn: 'change' }],
    anchoEscala: ['m', { validators: [Validators.required], updateOn: 'change' }],
    longitudEscala: ['m', { validators: [Validators.required], updateOn: 'change' }],
  });

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<CalculadoraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  isFormValid() {
    switch (this.forma) {
      case 'losa':
        return this.losaForm.valid;
      case 'piscina':
        return this.piscinaForm.valid;
      case 'escalera':
        return this.escaleraForm.valid;
      default:
        break;
    }
  }

  calcular() {
    switch (this.forma) {
      case 'losa':
        console.log(this.losaForm.get('grosor').value);
        let grosor = this.losaForm.get('grosor').value * (this.losaForm.get('grosorEscala').value == 'cm' ? 0.01 : 1);
        let ancho = this.losaForm.get('ancho').value * (this.losaForm.get('anchoEscala').value == 'cm' ? 0.01 : 1);
        let longitud = this.losaForm.get('longitud').value * (this.losaForm.get('longitudEscala').value == 'cm' ? 0.01 : 1);
        this.volumen = grosor * ancho * longitud;
        break;
      case 'piscina':
        let profundidad = this.piscinaForm.get('profundidad').value * (this.piscinaForm.get('profundidadEscala').value == 'cm' ? 0.01 : 1);
        let anchoPiscina = this.piscinaForm.get('ancho').value * (this.piscinaForm.get('anchoEscala').value == 'cm' ? 0.01 : 1);
        let largo = this.piscinaForm.get('longitud').value * (this.piscinaForm.get('longitudEscala').value == 'cm' ? 0.01 : 1);
        let espesor = this.piscinaForm.get('espesor').value * (this.piscinaForm.get('espesorEscala').value == 'cm' ? 0.01 : 1);
        let volLargos = 2 * ((largo + 2 * espesor) * (profundidad + espesor) * espesor); 
        let volAnchos = 2 *((profundidad + espesor) * espesor * anchoPiscina);
        let volBase = largo * anchoPiscina * espesor;
        this.volumen = volAnchos + volLargos + volBase;
        break;
      case 'escalera':
        console.log(this.escaleraForm.get('altura').value);
        console.log(this.escaleraForm.get('ancho').value);
        console.log(this.escaleraForm.get('longitud').value);
        console.log(this.escaleraForm.get('escalones').value);
        let altura = this.escaleraForm.get('altura').value * (this.escaleraForm.get('alturaEscala').value == 'cm' ? 0.01 : 1);
        let anchoEscalera = this.escaleraForm.get('ancho').value * (this.escaleraForm.get('anchoEscala').value == 'cm' ? 0.01 : 1);
        let largoEscalera = this.escaleraForm.get('longitud').value * (this.escaleraForm.get('longitudEscala').value == 'cm' ? 0.01 : 1);
        let escalones = this.escaleraForm.get('escalones').value;
        this.volumen = 0;
        for(let i=1; i<= this.escaleraForm.get('escalones').value; i++) {
          this.volumen += (largoEscalera/escalones) * anchoEscalera * (altura/escalones) * i;
        }
        break;
    
      default:
        break;
    }
    this.volumen = Math.ceil(this.volumen * 1.05);
    this.mostrarVolumen = true;
  }

  resetForms() {
    this.losaForm.get('grosor').reset();
    this.losaForm.get('grosorEscala').setValue('cm');
    this.losaForm.get('ancho').reset();
    this.losaForm.get('anchoEscala').setValue('m');
    this.losaForm.get('longitud').reset();
    this.losaForm.get('longitudEscala').setValue('m');
    this.piscinaForm.get('ancho').reset();
    this.piscinaForm.get('anchoEscala').setValue('m');
    this.piscinaForm.get('longitud').reset();
    this.piscinaForm.get('longitudEscala').setValue('m');
    this.piscinaForm.get('profundidad').reset();
    this.piscinaForm.get('profundidadEscala').setValue('m');
    this.piscinaForm.get('espesor').reset();
    this.piscinaForm.get('espesorEscala').setValue('cm');
    this.escaleraForm.get('ancho').reset();
    this.escaleraForm.get('anchoEscala').setValue('m');
    this.escaleraForm.get('longitud').reset();
    this.escaleraForm.get('longitudEscala').setValue('m');
    this.escaleraForm.get('altura').reset();
    this.escaleraForm.get('alturaEscala').setValue('m');
    this.escaleraForm.get('escalones').reset();
  }

  agregar() {
    this.dialogRef.close(this.volumen);
  }

  selectForma(){
    this.mostrarVolumen = false;
    this.resetForms();
    this.volumen = null;
  }

}
