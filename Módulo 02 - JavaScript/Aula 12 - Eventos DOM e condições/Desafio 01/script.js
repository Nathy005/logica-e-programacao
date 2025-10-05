function calcularMedia() {
  // pega os valores digitados
  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);

  // verifica se os campos foram preenchidos corretamente
  if (isNaN(nota1) || isNaN(nota2)) {
    document.getElementById("resultado").innerText = "Por favor, digite as duas notas.";
    return;
  }

  // calcula a média
  let media = (nota1 + nota2) / 2;

  // exibe o resultado
  document.getElementById("resultado").innerText = "A média é: " + media.toFixed(2);
}
