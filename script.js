
// Função para copiar o texto do input
document.getElementById("btnCopyInput").addEventListener("click", function() {
  // Seleciona o input
  var copyInput = document.getElementById("copyInput");
  copyInput.select();
  copyInput.setSelectionRange(0, 99999); // Para dispositivos móveis

  // Copia o texto do input para a área de transferência
  document.execCommand("copy");
});



// Função para copiar o texto do parágrafo
document.getElementById("btnCopyText").addEventListener("click", function() {
  // Seleciona o texto do parágrafo
  var copyText = document.getElementById("copyText").innerText;

  // Cria um elemento de input temporário
  var inputTemp = document.createElement("input");
  inputTemp.value = copyText;
  document.body.appendChild(inputTemp);

  // Seleciona o texto no input temporário
  inputTemp.select();
  inputTemp.setSelectionRange(0, 99999); // Para dispositivos móveis

  // Copia o texto para a área de transferência
  document.execCommand("copy");

  // Remove o input temporário
  document.body.removeChild(inputTemp);
});
