function calcularPromedio(){
    var v1 = document.getElementById("n1").value;
    var v2 = document.getElementById("n2").value;
    var v3 = document.getElementById("n3").value;
    var pro = (parseFloat(v1)+parseFloat(v2)+parseFloat(v3))/3;
    document.getElementById("promedio").innerHTML = pro;
}


const resultado2 = document.getElementById("resultado2");
const btnEnviar2 = document.getElementById("btnEjercicio2")
btnEnviar2.onclick = function(){
    let sb = 1800;
    let aumento = sb * 0.10;
    let neto = sb + aumento;

    resultado2.innerText = neto.toFixed(2);
}

const resp = document.getElementById("resultado");
const boton = document.getElementById("btnEnviar");

boton.onclick = function(){
    let nota1 = 17;
    let nota2 = 17;
    let nota3 = 7;
    let prom =nota1*0.2 + nota2*0.3 + nota3*0.5;
    prom = prom.toFixed(2);
    if (prom>10){
        resp.innerText = "prom: " + prom "estas aporbado";
    }elseif (prom >=7){
        resp.innerText ="prom:" + pro,

    }
}