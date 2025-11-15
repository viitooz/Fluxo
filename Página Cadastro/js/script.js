function mostrarSenha() {
    const inputSenha = document.querySelector("#senha");
    const icon = document.querySelector(".mostrar-senha");
    
    if (inputSenha.type === "password") {
      inputSenha.type = "text";
      icon.textContent = "🙈";
    } else {
      inputSenha.type = "password";
      icon.textContent = "👁️";
    }
  }

let btnCadastrar = document.querySelector('#btnCadastrar')
btnCadastrar.addEventListener('click', () => {
  window.location.href = '../Página Login/index.html'
})
