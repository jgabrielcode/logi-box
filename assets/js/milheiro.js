//id = quantidade-desejada
//id = itens-milheiro

const QTDDESEJADA = document.querySelector("#quantidade-desejada");
const QTDPORMILHEIRO = document.querySelector("#itens-milheiro");
const btnCoverter = document.querySelector(".btn-submit");
const formContainer = document.querySelector(".form-container");
const resultContainer = document.querySelector("#result-container");
const resultText = document.querySelector("#result-text");
const btnBack = document.querySelector("#btn-back");

btnCoverter.addEventListener("click", (e) => {
  e.preventDefault();
  const quantidadePorMilheiro = Number(QTDPORMILHEIRO.value);
  const quantidadeDesejada = Number(QTDDESEJADA.value);

  if (!quantidadePorMilheiro || !quantidadeDesejada) {
    alert("Preencha todos os campos!");
    return;
  }

  const calculo = quantidadeDesejada / quantidadePorMilheiro;
  const milheiros = Math.floor(calculo);
  const unidades = quantidadeDesejada - milheiros * quantidadePorMilheiro;

  let resultado = `Você precisa de ${milheiros} milheiro(s)`;
  if (unidades > 0) {
    resultado += ` e ${unidades} unidade(s) avulsa(s).`;
  } else {
    resultado += `.`;
  }

  // Transição: esconder form e mostrar resultado
  formContainer.classList.add("hide");
  setTimeout(() => {
    formContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultText.textContent = resultado;
    setTimeout(() => {
      resultContainer.classList.add("show");
    }, 10);
  }, 500);
});

btnBack.addEventListener("click", () => {
  resultContainer.classList.remove("show");
  setTimeout(() => {
    resultContainer.style.display = "none";
    formContainer.style.display = "block";
    setTimeout(() => {
      formContainer.classList.remove("hide");
    }, 10);
  }, 500);
});
