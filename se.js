/*/var media = 7
if(media >=7) {
console.log("aprovado");
} else {
console.log("Reprovado");*/

var media = 4;
var faltas = 1;
if(media >= 7) {
    console.log("Aprovado");
} else if(media >=5 && faltas <2) {
    console.log("recuperação");
} else {
    console.log("reprovado");
}