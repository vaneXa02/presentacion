var operandoa;
var operandob;
var operacion;

 // val  = input, textarea
 // html = p, h1,h2.etc
/*function asd()
{
  var input = document.getElementById('resultado').value;
  alert(input);
}*/
 
$(document).ready(function(){
 $("#uno").on("click",function(){
 $("#resultado").append("1");
 });
 $("#dos").on("click",function(){
 $("#resultado").append("2");
 });
 $("#tres").on("click",function(){
 $("#resultado").append("3");
 });
 $("#cuatro").on("click",function(){
 $("#resultado").append("4");
 });
 $("#cinco").on("click",function(){
 $("#resultado").append("5");
 });
 $("#seis").on("click",function(){
 $("#resultado").append("6");
 });
 $("#siete").on("click",function(){
 $("#resultado").append("7");
 });
 $("#ocho").on("click",function(){
 $("#resultado").append("8");
 });
 $("#nueve").on("click",function(){
 $("#resultado").append("9");
 });
 $("#cero").on("click",function(){
 $("#resultado").append("0");
 });
 $("#punto").on("click",function(){
 $("#resultado").append(".");
 });
 
 $("#reset").on("click",function(){
 resetear();
 });
 $("#suma").on("click",function(){
 operandoa = $("#resultado").html();
   operacion = "+";
   limpiar();
 });
 $("#resta").on("click",function(){
 operandoa = $("#resultado").html();
   operacion = "-";
   limpiar();
 });
 $("#multiplicacion").on("click",function(){
 operandoa = $("#resultado").html();
   operacion = "*";
   limpiar();
 });
 $("#division").on("click",function(){
 operandoa = $("#resultado").html();
   operacion = "/";
   limpiar();
 });
 $("#porcentaje").on("click",function(){
 operandoa = $("#resultado").html();
   operacion = "%";
   limpiar();
 });
 $("#igual").on("click",function(){
 operandob = $("#resultado").html();
   resolver();
 });

});
 
//Operaciones
function limpiar(){
 $("#resultado").html("");
 $('#dell').val('');
}
 
function resetear(){
 $("#resultado").html("");
 operandoa = 0;
 operandob = 0;
 operacion = "";
}

function resolver(){
 var res = 0;
 switch(operacion){
 case "+":
 res = parseFloat(operandoa) + parseFloat(operandob);
 break;
 
 case "-":
     res = parseFloat(operandoa) - parseFloat(operandob);
     break;
 
 case "*":
 res = parseFloat(operandoa) * parseFloat(operandob);
 break;
 
 case "/":
 res = parseFloat(operandoa) / parseFloat(operandob);
 break;

 case "%":
 res = parseFloat(operandoa) % parseFloat(operandob);
 break;

 }
 resetear();
 $("#resultado").html(res);
 $('#dell').val(res);
}



var conteo=0;
var primerDato=0;
var segundoDato=0;

$('button').click(function(){
  var tipo=$(this).attr('tipo-botton');
  var dato=$(this).attr('data');  
  $('#resultado').val(dato);

  if(tipo=='number'){
    if(operation==true){
      segundoDato=primerDato+''+dato;
      $('#dell').val(primerDato.replace(/^0+/,''));
      $('#resultado').val(primerDato.replace(/^0+/,''));
    }
    else{
      primerDato=primerDato+''+dato;
      $('#dell').val(primerDato.replace(/^0+/,''));
      $('#resultado').val(primerDato.replace(/^0+/,''));
    }

  }
   else if(tipo=='operation'){
    var operation=true;
    primerDato=primerDato+''+dato;
    $('#resultado').val(primerDato.replace(/^0+/,''));
  }
  if(tipo=='delete-all'){
    $('#resultado').val('');
    primerDato=0;
    segundoDato=0;
  }

  });

$('#borrar').click(function(){
 var borrar1 = document.getElementById('dell').value;
 var borrar2 = borrar1.slice(0, -1);
 $('#dell').val(borrar2);
 $('#resultado').val(borrar2);
});



function capturar()
    {
       
        var porId=document.getElementById("resultado").value;
        document.getElementById("resultado").innerHTML="\ "+porId+""
      }

function raiz(){
  document.getElementById('formulario');
  var raiz = formulario.valor.value;
  raiz = (Math.sqrt(raiz));
  var resultado = raiz;
  formulario.resultado.value= resultado;
   var porId=document.getElementById("porpor").value;
   document.getElementById("resultado").innerHTML="\ "+porId+""
}

