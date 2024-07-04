export default class Empresa { 

    constructor() { 
        this.acumaumento = 0;
        this.conttrab = 0;
        this.contobreros = 0;
    
    }
    
    //metodos
    procesartrabajadores(tr) {
         this.acumaumento = tr.aumento()+this.acumaumento;
         this.conttrab++;
      if (tr.tipo == 1) { return this.contobreros++; }
     

    }
     

     devolveraumento() {
        return this.acumaumento;
    }
    porcentajeobreros() {
        return (this.contobreros / this.conttrab) * 100;
    }

}