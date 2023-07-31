var raio_da_base = 7
var altura_do_cilindro = 3
var pi = 3.14

var area_base = pi * raio_da_base **2

var area_lateral = 2 * pi * raio_da_base * altura_do_cilindro

var area_total = 2 * area_base + area_lateral

console.log(area_total.toFixed(2))



