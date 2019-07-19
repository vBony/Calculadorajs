// var num1 = document.getElementById("num1").value;
// var num2 = document.getElementById("num2").value;
// var result = document.getElementById("resultado").innerHTML;

function botaoAdicao(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = document.getElementById("resultado").innerHTML;

    result = parseInt(num1) + parseInt(num2);
    document.getElementById("resultado").innerHTML = result;
}

function botaoSub(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = document.getElementById("resultado").innerHTML;

    result = parseInt(num1) - parseInt(num2);
    document.getElementById("resultado").innerHTML = result;
}

function botaoDiv(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = document.getElementById("resultado").innerHTML;

    result = parseInt(num1) / parseInt(num2);
    document.getElementById("resultado").innerHTML = result;

}

function botaoMult(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = document.getElementById("resultado").innerHTML;

    result = parseInt(num1) * parseInt(num2);
    document.getElementById("resultado").innerHTML = result;
}

function reset(){
    window.location.href =  window.location.href;
}