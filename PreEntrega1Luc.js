// Simulador de seguros de viaje con descuento

// Precios de los seguros
var precioSeguro1 = 450;
var precioSeguro2 = 600;
var precioSeguro3 = 1000;

// Solicitar al usuario que elija un seguro
var eleccion = parseInt(prompt("Elige un seguro de viaje:\n1. Seguro Básico ($" + precioSeguro1 + ")\n2. Seguro Estándar ($" + precioSeguro2 + ")\n3. Seguro Premium ($" + precioSeguro3 + ")"));

// Calcular el precio base según la elección
var precioBase;

if (eleccion === 1) {
    precioBase = precioSeguro1;
} else if (eleccion === 2) {
    precioBase = precioSeguro2;
} else if (eleccion === 3) {
    precioBase = precioSeguro3;
} else {
    console.log("Elección inválida.");
}

// Solicitar al usuario que elija el método de pago
var metodoPago = prompt("Elige un método de pago:\n1. Efectivo\n2. Crédito\n3. Débito");

// Calcular el precio final con descuento según el método de pago
var descuento = 0;
var metodoPagoTexto = "";

if (metodoPago === "1") {
    descuento = precioBase * 0.1; // 10% de descuento para efectivo
    metodoPagoTexto = "Efectivo";
} else if (metodoPago === "2") {
    descuento = precioBase * 0.05; // 5% de descuento para crédito
    metodoPagoTexto = "Crédito";
} else if (metodoPago === "3") {
    metodoPagoTexto = "Débito";
} else {
    console.log("Método de pago inválido.");
}

var precioFinal = precioBase - descuento;

// Mostrar el resumen al usuario
console.log("Resumen de la compra:");
console.log("Seguro elegido: " + eleccion);
console.log("Precio base: $" + precioBase);
if (descuento > 0) {
    console.log("Descuento: $" + descuento.toFixed(2) + " (" + metodoPagoTexto + ")");
}
console.log("Precio final: $" + precioFinal.toFixed(2));
