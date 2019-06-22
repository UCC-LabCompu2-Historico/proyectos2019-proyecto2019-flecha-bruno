function resolver() {var solution1,solution2;
var a= parseFloat(document.getElementById("num1").value);
var b= parseFloat(document.getElementById("num2").value);
var c= parseFloat(document.getElementById("num3").value);
if (((b*b)+(-4*a*c))>=0) {
    solution1 = ((-1 * b) + ((Math.sqrt(Math.pow(b, 2) - (4 * a * c))))) / (2 * a);
    solution2 = ((-1 * b) - ((Math.sqrt(Math.pow(b, 2) - (4 * a * c))))) / (2 * a);
    document.write("la primer raiz es ="+ solution1+ "</br>");
    document.write("la segunda raiz es ="+ solution2);
}
else{document.write("la raiz es imaginaria")}}
