function Crea() {

    var Val1 = document.getElementById("val1").value
    var Val2 = document.getElementById("val2").value
    var Val3 = document.getElementById("val3").value

    if (Val1 == "" || Val2 == "" || Val3 == "" || Val1 > 1000 || Val2 > 1000 || Val3 > 1000) {
        alert("Controlla di aver inserito correttamente i campi");
    } else {

        var Valori = [Val1, Val2, Val3];
        const MAX = Math.max(...Valori);

        var Colore1 = document.getElementById("colore1").value;
        var Colore2 = document.getElementById("colore2").value;
        var Colore3 = document.getElementById("colore3").value;
        var Colori = [Colore1, Colore2, Colore3];

        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        canvas.height = MAX;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var width = 100;
        var height = 0;
        var x = 0;

        for (var i = 0; i < Valori.length; i++) {
            height = Valori[i];
            ctx.fillStyle = Colori[i];
            ctx.fillRect(x + 10, canvas.height - height, width, height);
            x += width + 10;
        }

        /*
            - La posizione x del rettangolo viene calcolata utilizzando la variabile x, che viene inizializzata a 0 e aumentata di "width" + 10 
            ad ogni iterazione del ciclo. In questo modo, ogni rettangolo viene disegnato più a destra del precedente, creando uno spazio vuoto tra 
            le barre dell'istogramma.
            - La posizione y del rettangolo viene calcolata prendendo in causa l'altezza del canvas e a questa sottraiamo l'altezza del rettangolo. In 
            questo modo, il rettangolo viene disegnato a partire dalla base del canvas e si estende verso l'alto.
            - La larghezza del rettangolo è fissata ad un valore di 50 pixel.
            - L'altezza del rettangolo viene calcolata utilizzando il valore del vettore in base alla posizione dell'indice.
        */
    }
    
}

function Cancella() {

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

}