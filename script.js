function verificar() {
    var pi = parseFloat(prompt("Qual era o preço anterior do produto?"));
    var pif = Number(pi).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    var pa = parseFloat(prompt(" Qual é o preço atual do produto?"));
    var paf = Number(pa).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    var queda = pi - pa
    var quedaf = queda.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    var aumento = pa - pi
    var aumentof = aumento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    var porcento = (pi - pa) / pi * 100
    var porcentoqd = porcento.toFixed(2)
    var porcentoa = (pa - pi) / pi * 100
    var porcentoad = porcentoa.toFixed(2)
    if (pa < pi) {
        analise.innerHTML = `Hoje o produto está mais barato.
   <p> O preço caiu ${quedaf} em relação ao preço anterior</p><p>
   Uma variação de ${porcentoqd}% para baixo</p>`

    } else if (pa > pi)
        analise.innerHTML = `Hoje o produto está mais caro. <p>
    O preço subiu ${aumentof} em relação ao preço anterior</p> <p>
    Uma variação de ${porcentoad}% para cima</p>`





    res.innerHTML = `<strong>Analisando os valores informados</strong> <br> O produto custava ${pif}
    e agora custa ${paf} `
}
