function calcular() {
    const peso = parseFloat(document.getElementById("peso").value);
    const estatura = parseFloat(document.getElementById("estatura").value);
    let IMC = peso / (estatura * estatura);
    alert("IMC: " + IMC);
}