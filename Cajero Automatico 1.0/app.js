
// Definimos las cuentas disponibles
var cuentas = [
  { nombre: "Persona 1", saldo: 200 },
  { nombre: "Persona 2", saldo: 290 },
  { nombre: "Persona 3", saldo: 67 }
];

let cuentaSeleccionada;
let saldoActual;

// Función que se ejecuta al presionar el botón "Ingresar"
function validarPassword() {
  const password = document.getElementById("password").value;
  const indexCuenta = document.getElementById("cuenta").value;

  // Si la contraseña es correcta, se muestra el menú de opciones
  if (password === "1234") {
    cuentaSeleccionada = cuentas[indexCuenta];
    document.getElementById("opciones").style.display = "block";
    document.getElementById("password").value = "";
    document.getElementById("password").disabled = true;
    document.getElementById("robo").style.display = "none";
  } else {
    alert("Contraseña incorrecta. Intenta de nuevo.");
    document.getElementById("robo").style.display = "block";
  }
}

// Función que se ejecuta al presionar el botón "Consultar saldo"
function consultarSaldo() {
  saldoActual = cuentaSeleccionada.saldo;
  document.getElementById("saldo-actual").textContent = "$" + saldoActual;
  document.getElementById("saldo").style.display = "block";
}

// Función que se ejecuta al presionar el botón "Ingresar monto"
function ingresarMonto() {
  document.getElementById("ingreso").style.display = "block";
}

// Función que se ejecuta al presionar el botón "Retirar monto"
function retirarMonto() {
  document.getElementById("retiro").style.display = "block";
}

// Función que se ejecuta al presionar el botón "Ingresar" dentro de la sección de ingreso
function realizarIngreso() {
  const montoIngreso = parseInt(document.getElementById("monto-ingreso").value);

  if (montoIngreso <= 0 || cuentaSeleccionada.saldo + montoIngreso > 990) {
    alert("El monto ingresado no es válido.");
    return;
  }

  cuentaSeleccionada.saldo += montoIngreso;
  saldoActual = cuentaSeleccionada.saldo;
  document.getElementById("saldo-actual").textContent = "$" + saldoActual;
  document.getElementById("ingreso").style.display = "none";
  document.getElementById("monto-ingreso").value = "";
}

// Función que se ejecuta al presionar el botón "Retirar" dentro de la sección de retiro
function realizarRetiro() {
  const montoRetiro = parseInt(document.getElementById("monto-retiro").value);

  if (montoRetiro <= 0 || montoRetiro > 990 || montoRetiro > cuentaSeleccionada.saldo) {
    alert("El monto ingresado no es válido.");
    return;
  }

  const saldoRestante = cuentaSeleccionada.saldo - montoRetiro;

  if (saldoRestante < 10) {
    alert("No puedes retirar esa cantidad. El saldo mínimo permitido es de $10.");
    return;
  }

  cuentaSeleccionada.saldo = saldoRestante;
  saldoActual = cuentaSeleccionada.saldo;
  document.getElementById("saldo-actual").textContent = "$" + saldoActual;
  document.getElementById("retiro").style.display = "none";
  document.getElementById("monto-retiro").value = "";
}

