var capital = 2100
var juros = parseFloat("13.7%")
var tempo = parseInt("12 meses")
var taxa_juros_fixa = juros / 100
var calculomont = (1 + taxa_juros_fixa)**12
var montante = calculomont.toFixed(3)
console.log("sua taxa de juros fixa é " + taxa_juros_fixa.toFixed(3))
console.log("montante " + capital + montante)