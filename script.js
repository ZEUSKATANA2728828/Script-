function go(page){
  sessionStorage.setItem("next", page);
  window.location.href = "loading.html";
}

function copy(){
  let text = document.getElementById("code");
  text.select();
  document.execCommand("copy");
  alert("Copiado com sucesso!");
}
