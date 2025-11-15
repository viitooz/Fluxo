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

let btnEntrar = document.querySelector('#btnEntrar')
btnEntrar.addEventListener('click', () => {
  window.location.href = '../index.html'
})