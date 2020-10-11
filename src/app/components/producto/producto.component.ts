import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CalculadoraComponent } from '../calculadora/calculadora.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  volumen:number;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CalculadoraComponent, {
      // width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.volumen = result;
    });
  }

}