// Conta os casos de teste da tabela (a primeira linha é o cabeçalho)
var linhas = document.querySelectorAll("#tabela tr");
var positivos = 0;
var negativos = 0;

for (var i = 1; i < linhas.length; i++) {
    var tipo = linhas[i].cells[2].innerText;
    if (tipo == "Positivo") {
        positivos = positivos + 1;
    } else {
        negativos = negativos + 1;
    }
}

document.getElementById("total").innerText = positivos + negativos;
document.getElementById("positivos").innerText = positivos;
document.getElementById("negativos").innerText = negativos;

// Mostra só os casos do tipo escolhido no select
function filtrar() {
    var escolhido = document.getElementById("filtro").value;

    for (var i = 1; i < linhas.length; i++) {
        var tipo = linhas[i].cells[2].innerText;
        if (escolhido == "todos" || escolhido == tipo) {
            linhas[i].style.display = "";
        } else {
            linhas[i].style.display = "none";
        }
    }
}
