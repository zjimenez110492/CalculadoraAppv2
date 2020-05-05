import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { operacion } from '../operacion.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {
  @Output() operar= new EventEmitter();
  valor1Input:number;
  valor2Input:number;
  operacodInput:string;
  operacion:operacion;
  onSuma():void
  {
    
    let oper=new operacion(this.valor1Input,this.valor2Input,"+");
    console.log("HOLAAAAAAAA: Valor1 a pasar: "+this.valor1Input);
    this.operar.emit(oper);
    console.log("Formulario.component.ts:  onSuma");
  }
  onResta():void
  {
    let oper=new operacion(this.valor1Input,this.valor2Input,"-");
    this.operar.emit(oper);
    
    console.log("Formulario.component.ts:  onResta");
  }
  onMultiplicacion():void
  {
    let oper=new operacion(this.valor1Input,this.valor2Input,"*");
    this.operar.emit(oper);
    
    console.log("Formulario.component.ts:  onMultiplicar");
  }
  onDivision():void
  {
    let oper=new operacion(this.valor1Input,this.valor2Input,"/");
    this.operar.emit(oper);
    
    console.log("Formulario.component.ts:  onDivision");
  }

  

}
