// Funcion #1
function suma(){
    let a;
    let b;
    let s;
    a = parseInt(prompt("ingrese el primer valor"))
    b = parseInt(prompt("ingrese el segundo valor"))
    s = a + b
    console.log("el resultado es: "+ s)
    alert("el resultado es: "+ s)
}

// Funcion #2
function todas(){
    let a;
    let b
    let s
    let r
    let m
    let d
    a = parseInt(prompt("ingrese el primer valor"))
    b = parseInt(prompt("ingrese el segundo valor"))
    s = a + b
    r = a - b
    m = a * b
    d = a / b
    console.log("el resultado es: "+ s +" la resta es: " + r + " la multiplicacion es: " + m + " la division es: ")
    alert("el resultado es: "+ s + " la resta es: "+r+" la multiplicacion es: " + m + " la division es: " + d)
}

// Funcion #3
function cuadrado(){
    let a;
    a = parseInt(prompt("ingrese el numero para potenciar"))
    b = a * a 
    console.log("el resultado es: " + b)
    alert("el resultado es: " + b)
}

// Funcion #4
function area_triangulo(){
    let a;
    a = parseInt(prompt("ingrese la base"))
    b = parseInt(prompt("ingrese la altura"))
    t = (a*b)/2
    console.log("el resultado es: " + t)
    alert("el resultado es: " + t)
}

// Funcion #5
function conversion_unidades(){
    let m;
    m = parseFloat(prompt("ingrese las unidades en metros"))
    cm = 100 * m
    km = m / 1000
    console.log("la cantidad de " + m + " en centimetros son " + cm + " en kilometros son " + km)
    alert("la cantidad de " + m + " en centimetros son " + cm + " en kilometros son " + km)
}

// Funcion #6
function mayor_num_2() {
    let a
    let b
    a = parseInt(prompt("ingrese primer valor "))
    b = parseInt(prompt("ingrese el segundo valor"))
    if (a>b) {
        console.log(a + " es mayor a " + b)
        alert(a + " es mayor a " + b)  
    }else{
        console.log(b + " es mayor a " + a)
        alert(b + " es mayor a " + a)
    }
}

// Funcion #7
function mayor_num_3() {
    let a
    let b
    let c
    a = parseInt(prompt("ingrese primer valor "))
    b = parseInt(prompt("ingrese el segundo valor"))
    c = parseInt(prompt("ingrese el tercer valor"))
    if (a > b & a > c) {
        console.log(a +" es mayor a "+ b + " y " + c)
        alert(a + " es mayor a " + b + " y " + c)  
    }else if (b > a & b > c){
        console.log(b +" es mayor a " + a + " y " + c)
        alert(b+" es mayor a " + a + " y " + c)
    }else if(c>a & c>b){
        console.log(c +" es mayor a " + a +  " y " + b)
        alert(c + " es mayor a " + a + " y " + b)
    }
}

// Funcion #8
function promedio() {
    let a
    let b
    let c
    let p
    a = parseInt(prompt("ingrese la primera nota con multiplos de 10 a 50"))
    b = parseInt(prompt("ingrese la segunda nota con multiplos de 10 a 50"))
    c = parseInt(prompt("ingrese la tercera nota con multiplos de 10 a 50"))
    p = (a + b + c)/3
    console.log("el promedio de la notas es de " + p)
        alert("el promedio de la notas es de " + p)
}

// Funcion #9
function par_impar(){
    let t
    t = parseInt(prompt("ingrese el numero"))
    if (t % 2 ==0){
        console.log(t + " es par");
        alert(t + " es par");
    } else {
        console.log(t+" es impar");
        alert(t+" es impar")
    }
}

// Funcion #10
function celsiusAFahrenheit() {
    let celsius
    celsius =  parseInt(prompt("ingrese la temperatura"))
    celsius = celsius * 9 / 5 + 32
    console.log("Grados Celsius a Fahrenheit")
    alert("Grados Celsius a Fahrenheit es:" + celsius)
}

// Funcion #11
function promedio(){
    let a
    let b
    a = parseInt(prompt("ingrese el primer dijito"))
    b = parseInt(prompt("ingrese el segundo dijito"))
    t = (a + b) / 2
  console.log("el promedio de los dos numeros es:")
  alert("el promedio de los dos numeros es:" + t)
}

// Funcion #12
function doble(){
    let num
    num = parseInt(prompt("ingrese el un dijito"))
    num =  num + num
  console.log("el doble del numero ingresado es: ")
  alert("el doble del numero ingresado es: " + num)
}

// Funcion #13
function interes() {
    let a
    let g
    let i
}