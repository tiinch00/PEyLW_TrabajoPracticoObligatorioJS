
/**Da un mensaje de error en rojo
 * @param string id, mensaje
 */
function darError(id,mensaje) {
    let element = document.getElementById(id); //llamamos al elemento por el id
    element.style.border = '2px solid red';    //bordeamos con rojo
    element.style.backgroundColor = '#f8d7da';  //cambio de color del fondo
    let element2 = document.getElementById("divUsoOpcional");  //llamamos al elemento por el id
    let errorDiv = document.createElement('div');  
    errorDiv.style.color = 'red';
    errorDiv.innerText = mensaje;    //insertamos el mensaje 
    element2.appendChild(errorDiv); // Insertamos el errorDiv dentro de element2
    let tiempo = 3000;
    // Borrar el mensaje despues del tiempo especificado (en milisegundos)
    setTimeout(function() {
       errorDiv.remove();
    }, tiempo);
    
}


/**Verificamos que el valor dentro del id sea tipo string 
 * @param string id
 * @return boolean
*/
function esString(id) {

    let esString = false;

    let element = document.getElementById(id).value;
    
    // Verificar si la entrada es una cadena de al menos 2 letras
    if (/^[a-zA-Z]{2,}$/.test(element)) {  //testeo de expresion regular
        esString = true;
    } 
    return esString;
}

/**funcion que bordea en verde si cumple con el requisito
 * @param string id;
 */
function todoOK(id){
    let element = document.getElementById(id);
    element.style.border = '2px solid green';
    
}

/**Funcion que corrobora si el valor ingresado es numerico
 * @param int valor
 */
function esNumerico(valor) {
    return /^\d+$/.test(valor);  // expresion regular* 
}
// otra forma de validar si es numerico
/**function esNumerico(valor) {                          
    return !isNaN(parseFloat(valor)) && isFinite(valor);
}*/

/** valida el mail usando expresiones regulares
 * @param string email;
 */
function validarEmail(email){

    let expresion = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/;  // expresion regular*
    return expresion.test(email);  // .test corrobora que este bien

}

//*expresion regular (incioCadena)/^ minusculas,mayusculas,numeros ._%+- @ minusculas,mayusculas,numeros .- \.  minusculas,mayusculas 2(al menos 2 caracteres) $ (finCadena)



/** Validar fecha 
 * @param int anio , mes, dia
 * @return Boolean
 */
function validarFecha(dia,mes,anio){

    let valido = true;

   let day = parseInt(dia, 10);       //convierte dia en un numero igual para mes y anio
   let month = parseInt(mes, 10) - 1; // restar 1 al mes
   let year = parseInt(anio, 10);    
   let date = new Date(year, month, day);

   if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) { //Se compara el año, mes y dia de la fecha calculada con los valores proporcionados originalmente
       valido = false;
      
   }

   let anioActual = new Date();

   let edad = anioActual.getFullYear() - year;

   
    //// Verifica si la fecha ingresada es del mismo año y si el mes ingresado esta adelantado
   if (anioActual.getFullYear() === year && anioActual.getMonth() < month) {
       valido = false;
    //lo mismo pero con el dia
    } else if (anioActual.getFullYear() === year && anioActual.getMonth() === month && anioActual.getDate() < day) {
       valido = false;
    }  
    if (edad<0||edad>90){

        valido = false;
  }
      return valido;
}

   






//FUNCION MAIN

/**Valida cada una las variables devuele true o false
 *@return boolean 
*/
function validar(){
    esValido= true;

    let nombre = document.getElementById('nombre').value.trim(); //.value trae el valor y .trim sin espacios en blanco
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value.trim();
    let dia = document.getElementById('dia').value.trim();
    let mes = document.getElementById('mes').value.trim();
    let anio = document.getElementById('anio').value.trim();
    let obrasSociales = document.getElementById('obras_sociales').value.trim();

  

    // Validacion 
    if (!nombre) {
        darError('nombre','El nombre es obligatorio');
        esValido = false;
    }else if(!esString('nombre')){
        darError('nombre','Nombre deben ser letras');
        esValido = false;
    }
    else {
        todoOK('nombre');
        
    }
    if (!apellido) {
        darError('apellido','El apellido es obligatorio');
        esValido = false;
    }else if(!esString('apellido')){
        darError('apellido','Apellido deben ser letras');
        esValido = false;
    }else {
        todoOK('apellido');
        
    }
    if (!email) {
        darError('email','El email es obligatorio');
        esValido = false;
    } else if (!validarEmail(email)) {
        darError('email','El email no es válido');
        esValido = false;
    } else {
        todoOK('email');
        
    }
    if (!dia || !mes || !anio) {
        darError('dia', 'La fecha de nacimiento es obligatoria');
        darError('mes', 'La fecha de nacimiento es obligatoria');
        darError('anio', 'La fecha de nacimiento es obligatoria');
        esValido = false;
    } else if (!esNumerico(dia) || !esNumerico(mes) || !esNumerico(anio) || !validarFecha(dia, mes, anio)) {
        darError('dia', 'Fecha de nacimiento no válida');
        darError('mes', 'Fecha de nacimiento no válida');
        darError('anio', 'Fecha de nacimiento no válida');
        esValido = false;
    }else {
        todoOK('dia');
        todoOK('mes');
        todoOK('anio');
        
    }
    if (!obrasSociales) {
        darError('obras_sociales', 'La obra social es obligatoria');
        esValido = false;
    }else {
        todoOK('obras_sociales');
        
    }
    if(esValido){

        alert('Todos los datos son correctos');
    }

   

    return esValido;
}


