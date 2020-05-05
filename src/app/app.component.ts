import { Component } from '@angular/core';
import { operacion } from './operacion.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculadoraApp';
  operac:operacion;
  v1:number;
  v2:number;
  op:string;
  onEjecutar(oper:operacion)
  {
    this.operac=oper;
    this.v1=oper.onGetv1();
    this.v2=oper.onGetv2();
    this.op=oper.onGetOp();
    console.log("APP.COMPONENT.TS:   onEjecutar(oper:operacion).  Valor1: "+this.v1+" Valor2: "+this.v2);
  }
  
}
