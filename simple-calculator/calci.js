function showPanel(operation) {

    document.getElementById("addPanel").style.display = "none";
    document.getElementById("subPanel").style.display = "none";
    document.getElementById("mulPanel").style.display = "none";
    document.getElementById("divPanel").style.display = "none";


    if (operation == "add") {

        document.getElementById("addPanel").style.display = "block";

    }

    else if (operation == "sub") {

        document.getElementById("subPanel").style.display = "block";

    }

    else if (operation == "mul") {

        document.getElementById("mulPanel").style.display = "block";

    }

    else if (operation == "div") {

        document.getElementById("divPanel").style.display = "block";

    }
}


function add() {

    let a = parseInt(document.getElementById("add1").value);

    let b = parseInt(document.getElementById("add2").value);

    let result = a + b;

    document.getElementById("addResult").innerHTML = result;
}


function sub() {

    let a = parseInt(document.getElementById("sub1").value);

    let b = parseInt(document.getElementById("sub2").value);

    let result = a - b;

    document.getElementById("subResult").innerHTML = result;
}


function mul() {

    let a = parseInt(document.getElementById("mul1").value);

    let b = parseInt(document.getElementById("mul2").value);

    let result = a * b;

    document.getElementById("mulResult").innerHTML = result;
}


function divide() {

    let a = parseInt(document.getElementById("div1").value);

    let b = parseInt(document.getElementById("div2").value);

    let result = a / b;

    document.getElementById("divResult").innerHTML = result;
}