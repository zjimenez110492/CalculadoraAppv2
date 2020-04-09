import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculadoraApp';
  valor1:number=0;
  valor2:number=0;
  resultado:number=0;
  onSuma()
  {
   this.resultado=this.valor1+this.valor2;
  }
  onResta()
  {
    this.resultado=this.valor1-this.valor2;  
  }
  onMultiplicar()
  {
    this.resultado=this.valor1*this.valor2;  
  }
  onDividir()
  {
    this.resultado=this.valor1/this.valor2;  
  }
}
