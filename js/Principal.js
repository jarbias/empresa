//En una empresa se asignará un aumento del 20% a todo el personal obrero y 
//un 10% al personal administrativo.
// Se conoce de cada empleado su cédula, sueldo actual y el tipo de empleado (1-Obrero, 2-Administrativo).
// Al procesar todos los empleados, la empresa desea saber: 
//a) el nuevo sueldo de cada empleado, 
//por la empresa: b) el monto total que deberá  pagar sólo por concepto de incremento de sueldo a todo el personal y
// c) el porcentaje de personal obrero.//
import  Empresa  from "./Empresa.js";
import  Trabajadores  from "./Trabajadores.js";

let empleado1 = new Trabajadores(555, 200, 2);
let empleado2 = new Trabajadores(888, 500, 1);
let empleado3 = new Trabajadores(777, 400, 2);
let empleado4 = new Trabajadores(666, 600, 1);
let empleado5 = new Trabajadores(444, 800, 1);

let empresa = new Empresa();
empresa.procesartrabajadores(empleado1);
empresa.procesartrabajadores(empleado2);
empresa.procesartrabajadores(empleado3);
empresa.procesartrabajadores(empleado4);    
empresa.procesartrabajadores(empleado5);
 
let salida = document.getElementById("salida");
salida.innerHTML += "el nuevo sueldo del empleado es:       "+ empleado1.nuevosueldo() + "$ <br>";
salida.innerHTML += "el nuevo sueldo de cada empleado es:   "+ empleado2.nuevosueldo() + "$ <br>";
salida.innerHTML += "el nuevo sueldo de cada empleado es:   "+ empleado3.nuevosueldo() + "$ <br>";
salida.innerHTML += "el nuevo sueldo de cada empleado es:   "+ empleado4.nuevosueldo() + "$ <br>";
salida.innerHTML += "el nuevo sueldo de cada empleado es:   "+ empleado5.nuevosueldo() + "$ <br><br>";
salida.innerHTML += "el porcentaje de personal obrero es:   "+ empresa.porcentajeobreros() + "% <br>";
salida.innerHTML += "el total a pagar por los aumentos es:   "+ empresa.devolveraumento() + "$ <br>";