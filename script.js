document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const btn = document.querySelector("#calcular");
        btn.click();
    }
});

function calculo() {
    var qtd_programada = document.getElementById("qtd-programada").value;
    var qtd_produzida = document.getElementById("qtd-produzida").value;
    var volume_selecionado = document.querySelector(
        "input[name='volume']:checked"
    ).value;

    if (qtd_programada == "") {
        var result = "Por favor, digite a quantidade programada.";
        document.getElementById("qtd-programada").focus();
        return result;

    } else if (qtd_produzida == "") {
        result = "Por favor, digite a quantidade produzida.";
        document.getElementById("qtd-produzida").focus();
        return result;
    }

    if (volume_selecionado == "100") {
        var qtd_por_carro = 1904;
        var minutos_por_carro = 29;

    } else if (volume_selecionado == "250") {
        qtd_por_carro = 1372;
        minutos_por_carro = 38;

    } else if (volume_selecionado == "500") {
        qtd_por_carro = 936;
        minutos_por_carro = 19;

    } else if (volume_selecionado == "1000") {
        qtd_por_carro = 550;
        minutos_por_carro = 18;

    } else {
        alert("Você precisa escolher um volume!");
    }

    var qtd_restante = qtd_programada - qtd_produzida;
    var carros_restantes = qtd_restante / qtd_por_carro;
    var minutos_restantes = carros_restantes * minutos_por_carro;

    if (qtd_restante < 0) {
        result = "A quantidade produzida não pode ser maior do que a quantidade programada. Por favor, verificar.";
        return result;
    }

    var data = new Date();

    data.setMinutes(data.getMinutes() + minutos_restantes);

    var dataFormatada = data.toLocaleString("pt-br");


    if (minutos_restantes > 60) {
        var horas = (minutos_restantes / 60) | 0;
        var minutos = minutos_restantes % 60;

        result =
            "Tempo restante: " +
            horas +
            " horas e " +
            Math.floor(minutos) +
            " minutos." +
            " Horário previsto: " + dataFormatada;

    } else {
        result =
            "Tempo restante: " +
            Math.floor(minutos_restantes) +
            " minutos." +
            " Horário previsto: " + dataFormatada;
    }

    return result;
}
