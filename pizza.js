function pizzaHorno(tipoMasa, tipoSalsa, quesos, ingredientes) {
    var pizza = {};
    pizza.tipoMasa = tipoMasa;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.ingredientes = ingredientes;
    return pizza;
}

var pizza1 = pizzaHorno("deep dish", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);

var pizza2 = pizzaHorno("a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

var tiposMasa = [
    "deep dish",
    "a mano",
    "fina y crujiente",
    "coliflor",
    "sin gluten",
    "pan hawaiano"
];

var tiposSalsa = [
    "tradicional",
    "marinara",
    "bbq",
    "salsa blanca",
    "queso nacho",
    "tikka masala"
];

var quesos = [
    "mozzarella",
    "cheddar",
    "feta",
    "queso suizo",
    "queso azul",
    "queso de cabra",
    "provolone",
    "parmesano",
    "queso vegano"
];

var ingredientes = [
    "pepperoni",
    "salchicha",
    "pollo",
    "maíz",
    "aceitunas",
    "pimientos",
    "cebollas",
    "champiñones",
    "anchoas"
];

function rangoAleatorio(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function eleccionAleatoria(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function pizzaAleatoria() {
    var pizza = {};
    pizza.tipoMasa = eleccionAleatoria(tiposMasa);
    pizza.tipoSalsa = eleccionAleatoria(tiposSalsa);
    pizza.quesos = [];
    pizza.ingredientes = [];
    for(var i=0; i<rangoAleatorio(5, 1); i++) {
        pizza.quesos.push(eleccionAleatoria(quesos));
    }
    for(var i=0; i<rangoAleatorio(4, 0); i++) {
        pizza.ingredientes.push(eleccionAleatoria(ingredientes));
    }
    return pizza;
}

console.log(pizzaAleatoria());
