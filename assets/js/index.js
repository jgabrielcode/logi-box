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
