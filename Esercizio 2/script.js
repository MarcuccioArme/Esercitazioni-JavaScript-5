function Crea() {

    var Base = document.getElementById("base").value;
    var Altezza = document.getElementById("altezza").value;

    if (Base == "" || Altezza == "" || Base > 1000 || Altezza > 1000) {
        alert("Verifica di aver inserito correttamente i dati.");
    } else {

        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        canvas.width = Base;
        canvas.height = Altezza;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, Base, Altezza);

    }

}

function Cancella() {

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("area").value = "";
    document.getElementById("perimetro").value = "";

}

function CalcolaArea() {

    var Base = parseFloat(document.getElementById("base").value);
    var Altezza = parseFloat(document.getElementById("altezza").value);

    if (Base == "" || Altezza == "" || Base > 1000 || Altezza > 1000) {
        alert("Verifica di aver inserito correttamente i dati.");
    } else {
        var Area = Base * Altezza;
        console.log(Area);
        document.getElementById("area").value = Area;
        document.getElementById("area").readOnly = true;
    }

}

function CalcolaPerimetro() {

    var Base = parseFloat(document.getElementById("base").value);
    var Altezza = parseFloat(document.getElementById("altezza").value);

    if (Base == "" || Altezza == "" || Base > 1000 || Altezza > 1000) {
        alert("Verifica di aver inserito correttamente i dati.");
    } else {
        var Perimetro = 2 * (Base += Altezza);
        document.getElementById("perimetro").value = Perimetro;
        document.getElementById("perimetro").readOnly = true;
    }

}