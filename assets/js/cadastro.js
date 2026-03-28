//id = quantidade-desejada
//id = itens-caixa

const QTDDESEJADA = document.querySelector("#quantidade-desejada");
const QTDPORCAIXAS = document.querySelector("#itens-caixa");
const btnCoverter = document.querySelector(".btn-submit");
const formContainer = document.querySelector(".form-container");
const resultContainer = document.querySelector("#result-container");
const resultText = document.querySelector("#result-text");
const btnBack = document.querySelector("#btn-back");

btnCoverter.addEventListener("click", (e) => {
  e.preventDefault();
  const quantidadePorCaixa = Number(QTDPORCAIXAS.value);
  const quantidadeDesejada = Number(QTDDESEJADA.value);

  if (!quantidadePorCaixa || !quantidadeDesejada) {
    alert("Preencha todos os campos!");
    return;
  }

  const calculo = quantidadeDesejada / quantidadePorCaixa;
  const caixas = Math.floor(calculo);
  const unidades = quantidadeDesejada - caixas * quantidadePorCaixa;

  let resultado = `Você precisa de ${caixas} caixa(s)`;
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
