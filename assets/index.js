function CalcularPromediohtml() {
    var v1 = document.getElementById("n1html").value;
    var v2 = document.getElementById("n2html").value;
    var v3 = document.getElementById("n3html").value;
    var pro0 = ((parseFloat(v1) + parseFloat(v2) + parseFloat(v3)) / 3).toFixed(1);
    document.getElementById("promediohtml").innerHTML = pro0;
    console.log ("probando promedio 0 ",pro0);
}
function CalcularPromediocss() {
    var v4 = document.getElementById("n1css").value;
    var v5 = document.getElementById("n2css").value;
    var v6 = document.getElementById("n3css").value;
    var pro1 = ((parseFloat(v4) + parseFloat(v5) + parseFloat(v6)) / 3).toFixed(1);
    document.getElementById("promediocss").innerHTML = pro1;
    console.log ("probando promedio 1 ",pro1);
}
function CalcularPromediojs() {
    var v7 = document.getElementById("n1js").value;
    var v8 = document.getElementById("n2js").value;
    var v9 = document.getElementById("n3js").value;
    var pro2 = ((parseFloat(v7) + parseFloat(v8) + parseFloat(v9)) / 3).toFixed(1);
    document.getElementById("promediojs").innerHTML = pro2;
    console.log ("probando promedio 2 ",pro2);
}

var v10 = parseFloat (document.getElementById("promediohtml").value); 
var v11 = parseFloat (document.getElementById("promediocss").value);
var v12 = parseFloat (document.getElementById("promediojs").value); 
console.log  ( "probando antes de la funcion", v10); console.log( "probando antes de la funcion", v11); console.log( "probando antes de la funcion", v12);
function CalcularPromediofinal() { 
    var pro3 = (parseFloat(v10) + parseFloat(v11) + parseFloat(v12)) /3;
    document.getElementById("promediofinal").innerHTML = pro3;    
    /*  var pro3 = ((parseFloat(v10) + parseFloat(v11) + parseFloat(v12)) / 3).toFixed(1);
    document.getElementById("promediofinal").innerHTML = pro3; */
    console.log ("probando promedio 3 ",pro3);  
}

var pro0 =














