function resolver() {var solution1,solution2;
var a= parseFloat(document.getElementById("num1").value);/*toma valor introducido en html y lo guarda en variable*/
var b= parseFloat(document.getElementById("num2").value);
var c= parseFloat(document.getElementById("num3").value);
    if(isNaN(a)) a=0;/*controla que el valor no sea Nan y si lo es lo cambia por 0*/
    if(isNaN(b)) b=0;
    if(isNaN(c)) c=0;
    if(a===0&&b===0){document.write("no hay raices");}/*controla si la raiz existe*/
    if(a===0){document.write("es una raiz de primer grado use el otro metodo");}/*controla si el metodo es correcto*/
    else if (((b*b)+(-4*a*c))>=0) {/*resuelve la ecuacion de segundo grado*/
    solution1 = ((-1 * b) + ((Math.sqrt(Math.pow(b, 2) - (4 * a * c))))) / (2 * a);
    solution2 = ((-1 * b) - ((Math.sqrt(Math.pow(b, 2) - (4 * a * c))))) / (2 * a);
    document.write("La primer raiz es ="+ solution1+ "</br>");
    document.write("La segunda raiz es ="+ solution2);
}
else{document.write("La raiz es imaginaria")}}

