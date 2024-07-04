export default class Trabajadores {
    constructor(c, s, t) {
        this.cedula = c;
        this.sueldo = s;
        this.tipo = t;
    }

setcedula(c) {
    this._cedula = c;}

setsueldo(s) {
    this._sueldo = s;}

settipo(t) {
    this._tipo = t;}

getcedula() {
    return this._cedula;}

getsueldo() {    
    return this._sueldo;}

gettipo() {
    return this._tipo;}
    //metodos
    aumento(){
        if(this.tipo== 1){
            return this.sueldo*0.2;
        }else if(this.tipo== 2){
           return  this.sueldo*0.1;
        }
    }
   
      nuevosueldo(){
        return this.sueldo+ this.aumento();
      }



}