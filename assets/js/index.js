document.getElementById("btnStart").addEventListener("click", function () {
  const selectedType = document.querySelector(
    'input[name="conversionType"]:checked',
  ).value;
  localStorage.setItem("conversionType", selectedType);
  if (selectedType === "caixas") {
    window.location.href = "./pages/cadastro.html";
  } else if (selectedType === "milheiro") {
    window.location.href = "./pages/milheiro.html";
  }
});

// Adicionar listeners para mudança de cor de fundo baseada na seleção
const radioButtons = document.querySelectorAll('input[name="conversionType"]');
const optionCaixas = document.querySelector(".option.caixas");
const optionMilheiro = document.querySelector(".option.milheiro");

radioButtons.forEach((radio) => {
  radio.addEventListener("change", function () {
    const selectedValue = this.value;
    // Resetar cores
    optionCaixas.style.backgroundColor = "";
    optionMilheiro.style.backgroundColor = "";
    // Aplicar cor ao selecionado
    if (selectedValue === "caixas") {
      optionCaixas.style.backgroundColor = "#32ac46";
      optionCaixas.querySelector("span").style.color = "#ffffff";
      // Verde claro para caixas
    } else if (selectedValue === "milheiro") {
      optionMilheiro.style.backgroundColor = "#3abb4f";
      optionMilheiro.querySelector("span").style.color = "#ffffff";
       // Laranja claro para milheiro
    }
  });
});
