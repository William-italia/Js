let x = 1;

while(x <= 10) {

    if (x === 5) {
        console.log('Eu sou o ' + x);
    } else {
        console.log(x);
    }
    
    x++;
}

let Fruta = "MaMaO";



Fruta = Fruta.toLowerCase();
Fruta = Fruta.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

console.log(Fruta);

let tipoFruta = Fruta.charAt(0).toUpperCase() + Fruta.slice(1);

switch (tipoFruta) {
    case "Laranja":
    console.log("O quilo da laranja está R$0,59.<br>");
    break;
  case "Maca":
    console.log("O quilo da maçã está R$0,32.<br>");
    break;
  case "Banana":
    console.log("O quilo da banana está R$0,48.<br>");
    break;
  case "Cereja":
    console.log("O quilo da cereja está R$3,00.<br>");
    break;
  case "Manga":
    console.log("O quilo da manga está R$0,56.<br>");
    break;
  case "Mamao":
    console.log("O quilo do mamão está R$2,23.<br>");
    break;
   default: 
    console.log("Desculpe, não temos " + tipoFruta + ".<br>");
}

