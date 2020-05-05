export class operacion
{
   
    constructor(public valor1:number,public valor2:number,public operador:string)
    {
        
    }
    onGetv1():number
    {
     return this.valor1;
    }
    onGetv2():number
   {
    return this.valor2;
   }
   onGetOp():string
   {
    return this.operador;
   }
}