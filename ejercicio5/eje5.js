const formulario = $('formulario')
const resultado = $('resultado')

formulario.addEventListener('submit', (e)=> {
    const ladoA = +formulario['ladoA'].value
    const ladoB = +formulario['ladoB'].value
    const ladoC = +formulario['ladoC'].value
    if (ladoA > ladoC){
    const AreaTri = (ladoB * (ladoA-ladoC))/2
    const AreaRect = (ladoB * ladoC)
    const Total = AreaRect + AreaTri
    resultado.innerText += Total
}
else{
    alert("Lado C no puede ser igual o mayor que LadoA")
}
    e.preventDefault()
})

function $(elemento) {
    return document.getElementById(elemento)
}