/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal
da etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo
adequado.

Código Condição de pagamento:
1 - À vista débito, recebe 10% de desconto;
2 - À vista no dinheiro ou pix, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const formaPgto = 4;


if (formaPgto === 1) {
  console.log(precoEtiqueta -(precoEtiqueta * 0.1));
} else if (formaPgto === 2) {
  console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaPgto === 3) {
  console.log(precoEtiqueta);
} else {
  console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}


