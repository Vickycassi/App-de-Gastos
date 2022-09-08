const nombres = [];
const pagos = [];

function tocar() {
  let x = document.getElementById("nombre").value;
  let y = document.getElementById("pago").value;
  nombres.push(x);
  pagos.push(y);
  mostrar(x + ": $" + y);
  recorrer();
}

function mostrar(x) {
  let newDiv = document.createElement("li");
  let newContent = document.createTextNode(x);
  newDiv.appendChild(newContent);

  let currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
  newDiv.className += "list-group-item";
}

function recorrer() {
  let suma = 0;
  for (let i = 0; i < pagos.length; i++) {
    suma += Number(pagos[i]);
  }
  num = suma / pagos.length;
  mostrar(
    "el total acumulado es: $" +
      suma +
      " y cada uno tiene que aportar $" +
      num.toFixed(2)
  );
}
