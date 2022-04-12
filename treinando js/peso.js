let peso, altura, imc;
peso = 53.3;
altura = 1.71;
imc = peso / (altura ^ 2);

console.log(imc);

if (imc < 15) {
  console.log("desnutrido");
} else {
  if (imc < 20) {
    console.log("2");
  } else {
    if (imc < 25) {
      console.log("3");
    } else {
      if (imc < 30) {
        console.log("4");
      } else {
        if (imc < 35) {
          console.log("5");
        }
      }
    }
  }
}
