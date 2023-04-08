function Rettangolo() {

    TogliFigura()
    var svg = document.getElementById("figura_svg");
    var rettangolo = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rettangolo.setAttribute("x", "25");
    rettangolo.setAttribute("y", "25");
    rettangolo.setAttribute("width", "250");
    rettangolo.setAttribute("height", "150");
    rettangolo.setAttribute("fill", "purple");
    rettangolo.setAttribute("stroke", "blue");
    rettangolo.setAttribute("stroke-width", "5");
    svg.appendChild(rettangolo);

}

function Esagono() {

    TogliFigura()
    var svg = document.getElementById("figura_svg");
    var esagono = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    esagono.setAttribute("points", "160,40 120,107 160,176 240,175 280,107 239,40");
    esagono.setAttribute("fill", "orange");
    esagono.setAttribute("stroke", "yellow");
    esagono.setAttribute("stroke-width", "6");
    svg.appendChild(esagono);

}

function Ellisse() {

    TogliFigura()
    var svg = document.getElementById("figura_svg");
    var ellisse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    ellisse.setAttribute("cx", "150");
    ellisse.setAttribute("cy", "75");
    ellisse.setAttribute("rx", "125");
    ellisse.setAttribute("ry", "50");
    ellisse.setAttribute("fill", "yellow");
    ellisse.setAttribute("stroke", "red");
    ellisse.setAttribute("stroke-width", "5");
    svg.appendChild(ellisse);

}

function Quadrato() {

    TogliFigura()
    var svg = document.getElementById("figura_svg");
    var quadrato = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    quadrato.setAttribute("x", "75");
    quadrato.setAttribute("y", "50");
    quadrato.setAttribute("width", "150");
    quadrato.setAttribute("height", "150");
    quadrato.setAttribute("fill", "green");
    quadrato.setAttribute("stroke", "aquamarine");
    quadrato.setAttribute("stroke-width", "10");
    svg.appendChild(quadrato);
    
}

function TogliFigura(){
    var svg = document.getElementById("figura_svg");
    while (svg.lastChild) {
        svg.removeChild(svg.lastChild);
    }
  }