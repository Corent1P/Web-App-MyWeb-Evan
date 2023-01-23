function swap() {
  const value1 = document.getElementById("drop1");
  const value2 = document.getElementById("drop2");
  const temp = value1.value;
  value1.value = value2.value;
  value2.value = temp;
}

function convert() {
  const value1 = document.getElementById("drop1").value;
  const value2 = document.getElementById("drop2").value;
  const x = document.getElementById("number").value;

  if (x === "") {
    document.getElementById("Result").innerHTML =
      "TU VEUX CONVERTIR QUOI FREROT ???";
    return;
  }
  if (value1 === value2) {
    document.getElementById("Result").innerHTML = x;
    return;
  }

  if (value1 === "GIO") {
    switch (value2) {
      case "MIO":
        document.getElementById("Result").innerHTML = (x * 1024).toFixed(4);
        break;
      case "MO":
        document.getElementById("Result").innerHTML = (x * 1070).toFixed(4);
        break;
      case "GO":
        document.getElementById("Result").innerHTML = (x * 1.07).toFixed(4);
        break;

      default:
        break;
    }
  }

  if (value1 === "MIO") {
    switch (value2) {
      case "GIO":
        document.getElementById("Result").innerHTML = (x / 1024).toFixed(4);
        break;
      case "MO":
        document.getElementById("Result").innerHTML = (
          (x / 1024) *
          1070
        ).toFixed(4);
        break;
      case "GO":
        document.getElementById("Result").innerHTML = (
          (x / 1024) *
          1.07
        ).toFixed(4);
        break;

      default:
        break;
    }
  }

  if (value1 === "MO") {
    switch (value2) {
      case "GIO":
        document.getElementById("Result").innerHTML = (x / 1000 / 1.07).toFixed(4);
        break;
      case "MIO":
        document.getElementById("Result").innerHTML = (
          1024 *
          (x / 1000 / 1.07)
        ).toFixed(4);
        break;
      case "GO":
        document.getElementById("Result").innerHTML = (x / 1000).toFixed(4);
        break;

      default:
        break;
    }
  }

  if (value1 === "GO") {
    switch (value2) {
      case "GIO":
        document.getElementById("Result").innerHTML = (x / 1.07).toFixed(4);
        break;
      case "MO":
        document.getElementById("Result").innerHTML = (x * 1000).toFixed(4);
        break;
      case "MIO":
        document.getElementById("Result").innerHTML = (
          (x / 1.07) *
          1024
        ).toFixed(4);
        break;

      default:
        break;
    }
  }
}
