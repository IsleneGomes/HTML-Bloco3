let peca = " ";

peca = "BISPO";

switch (peca.toLowerCase()) {
    case "rainha":
        console.log("->Em todas as direções");
        break;
    case "bispo":
        console.log("->Diagonais");
        break;  
    case "torre":
        console.log("->Norte, Sul, Leste, Oeste");
        break;  
    case "cavalo":
        console.log("->Em L");
        break;
    case "rei":
        console.log("->Em todas as direções de 1 em 1 casa");
        break;
    case "peao":
        console.log("->Para frente");
        break;
    default :
        console.log("->Peça Inválida");
        break;
}

