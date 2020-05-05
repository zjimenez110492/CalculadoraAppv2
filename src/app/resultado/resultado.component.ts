import { Component, OnInit, Input } from '@angular/core';
import { operacion } from '../operacion.model';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent  {
  resultado:number;
  v1:number;
  v2:number;
  oper:string;
  @Input() operRes:operacion;
  onRealizarOperacion()
  {
    
    console.log("Resultado.component.ts   onRealizarOperacion()");
    this.v1=this.operRes.onGetv1();
    this.v2=this.operRes.onGetv2();
    this.oper=this.operRes.onGetOp();

    switch(this.oper)
    {
      case "+":
        {
          console.log("SE ESTA HACIENDO UNA SUMA VALOR1: "+this.v1+this.operRes.onGetv1()+"+  vALOR2: "+this.v2);
          this.resultado=this.v1+this.v2;
          break;
        }
        case "-":
          {
            this.resultado=this.v1-this.v2;
            break;
          }
          case "*":
            {
              this.resultado=this.v1*this.v2;
              break;
            }
            case "/":
              {
                this.resultado=this.v1/this.v2;
                break;
              }
        
    }
  }

}
