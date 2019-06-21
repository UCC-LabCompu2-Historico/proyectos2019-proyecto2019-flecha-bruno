function ECU2(num1, num2, num3){
    var a= document.getElementById("num1").value;
    var b= document.getElementById("num2").value;
    var c= document.getElementById("num3").value;
    solution1 =(-b+((Math.sqrt(Math.pow(b,2)-(4*a*c)))))/(2*a);
    solution2 =(-b-((Math.sqrt(Math.pow(b,2)-(4*a*c)))))/(2*a);

    return solution1;
    return solution2;
}