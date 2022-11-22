function calcularPromedio(){
    var v1 = document.getElementById("n1").value;
    var v2 = document.getElementById("n2").value;
    var v3 = document.getElementById("n3").value;
    var pro = (parseFloat(v1)+parseFloat(v2)+parseFloat(v3))/3;
    document.getElementById("promedio").innerHTML = pro;
}


const resultado2 = document.getElementById("resultado2");
const btnEnviar2 = document.getElementById("btnEjercicio2")
btnEnviar2.onclick= function(){
    let sb = 1800;
    let aumento = sb * 0.10;
    let neto = sb + aumento;

    resultado2.innerText = neto.toFixed(2);
}