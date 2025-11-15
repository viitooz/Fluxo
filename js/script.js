

let seguidores = document.querySelector('#seguidores');
let qtdeSeguindo = document.querySelector('#seguindo');
let btnSeguir = document.querySelector('#btnSeguir');

btnSeguir.addEventListener('click', () => {
    if (btnSeguir.classList.contains("seguir")) {
        btnSeguir.classList.remove("seguir");
        btnSeguir.classList.add("seguindo");
        btnSeguir.textContent = "Seguindo";
        seguidores.textContent = '347';
    } else {
        btnSeguir.classList.remove("seguindo");
        btnSeguir.classList.add("seguir");
        btnSeguir.textContent = "Seguir";
        seguidores.textContent = '346';
    }
});



let sectionSugestoes = document.querySelector('#sugestoes');
function exibirSugestoes() {
    sectionSugestoes.classList.toggle("sugestoesExibidas");
}

const btnSeguirSugestao = document.querySelectorAll('.btnSeguirSugestao');
btnSeguirSugestao.forEach((btn) => {
    btn.addEventListener('click', () => {
        let textBtn = btn.textContent;
        let valorAtual = parseInt(qtdeSeguindo.textContent);

        if (textBtn === 'Seguindo') {
            btn.textContent = 'Seguir';
            qtdeSeguindo.textContent = valorAtual - 1;
        } else {
            btn.textContent = 'Seguindo';
            qtdeSeguindo.textContent = valorAtual + 1;
        }
    });
});


let btnsRespostaComentario = document.querySelectorAll('.btnRespostaComentario');
btnsRespostaComentario.forEach(btn => {
    btn.addEventListener('click', () => {
        const resposta = btn.nextElementSibling;
        resposta.classList.toggle('divRespostaComentarioExibida');
    });
});

let btnsCurtirComentario = document.querySelectorAll('.btnCurtirComentario');
btnsCurtirComentario.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('comentario-curtido');
    });
});

let btnPublicar = document.querySelector('#btnPublicar');
let inputPublicacao = document.querySelector('#inputPublicacao');
let sectionPublicacoes = document.querySelector('#publicacoes');

// FUNÇÃO PARA CRIAR UMA PUBLICAÇÃO, JÁ ADICIONANDO SEUS RESPECTIVOS EVENTOS//

function criaPublicacaoTexto(conteudoInput) {
    let container = document.createElement('div');
    container.className = 'container mt-3';

    let divPublicacao = document.createElement('div');
    divPublicacao.className = 'col-lg-9 ms-auto me-auto bg-white publicacao';

    let divUsuario = document.createElement('div');
    divUsuario.className = 'd-flex';

    let divImagem = document.createElement('div');
    divImagem.className = 'col-lg-1 col-md-1 col-2';
    let img = document.createElement('img');
    img.src = './imagens/Rony Weasley.jpeg';
    img.className = 'img-fluid rounded-circle';
    divImagem.appendChild(img);

    let divInfo = document.createElement('div');
    divInfo.className = 'col-lg-2 col-md-2 col-3 ms-2';
    divInfo.innerHTML = '<span class="fw-bold">rony_weasley</span><br><span>Agora - <i class="bi bi-globe-americas-fill"></i></span>';

    divUsuario.appendChild(divImagem);
    divUsuario.appendChild(divInfo);
    divPublicacao.appendChild(divUsuario);

    let texto = document.createElement('h4');
    texto.className = 'mt-3';
    texto.textContent = conteudoInput;
    divPublicacao.appendChild(texto);

    divPublicacao.appendChild(document.createElement('hr'));

    let divReacoes = document.createElement('div');
    divReacoes.className = 'd-flex mt-2';

    let iconCurtida = document.createElement('i');
    iconCurtida.className = 'bi bi-hand-thumbs-up-fill bg-primary rounded-circle text-white px-2 py-1';

    let qtdeCurtidas = 0;
    let curtidas = document.createElement('span');
    curtidas.className = 'ms-2';
    curtidas.textContent = ` ${qtdeCurtidas} curtidas`;

    divReacoes.appendChild(iconCurtida);
    divReacoes.appendChild(curtidas);

    let divComentCompart = document.createElement('div')
    divComentCompart.className = 'ms-auto'

    let qtdeComentarios = 0
    let comentarios = document.createElement('span')
    comentarios.textContent = qtdeComentarios

    let iconComentario = document.createElement('i')
    iconComentario.className = 'bi bi-chat-fill ms-1'

    divComentCompart.appendChild(comentarios)
    divComentCompart.appendChild(iconComentario)

    let qtdeCompartilhamentos = 0
    let compartilhamentos = document.createElement('span')
    compartilhamentos.textContent = qtdeCompartilhamentos

    let iconCompartilhamentos = document.createElement('i')
    iconCompartilhamentos.className = 'bi bi-send-fill ms-2'

    divComentCompart.appendChild(compartilhamentos)
    divComentCompart.appendChild(iconCompartilhamentos)

    divReacoes.appendChild(divComentCompart)

    divPublicacao.appendChild(divReacoes);

    divPublicacao.appendChild(document.createElement('hr'));

    let linhaInteracoes = document.createElement('div');
    linhaInteracoes.className = 'row text-center';

    let col1 = document.createElement('div');
    col1.className = 'col-4';

    let btnCurtir = document.createElement('button');
    btnCurtir.className = 'w-100 btnInteragir p-1 curtir';
    let iconCurtir = document.createElement('i');
    iconCurtir.className = 'bi bi-hand-thumbs-up';
    btnCurtir.appendChild(iconCurtir);
    btnCurtir.appendChild(document.createTextNode(" Curtir"));

    btnCurtir.addEventListener('click', () => {
        let estaCurtido = btnCurtir.classList.toggle('curtido');
        if (estaCurtido) {
            qtdeCurtidas++;
            curtidas.textContent = `${qtdeCurtidas} curtida`;
        } else {
            qtdeCurtidas--;
            curtidas.textContent = `${qtdeCurtidas} curtidas`;
        }
    });

    col1.appendChild(btnCurtir);

    let col2 = document.createElement('div');
    col2.className = 'col-4';

    let btnComentar = document.createElement('button');
    btnComentar.className = 'w-100 btnInteragir p-1';
    let iconComentar = document.createElement('i');
    iconComentar.className = 'bi bi-chat';
    btnComentar.appendChild(iconComentar);
    btnComentar.appendChild(document.createTextNode(" Comentar"));
    col2.appendChild(btnComentar);

    let col3 = document.createElement('div');
    col3.className = 'col-4';

    let btnCompartilhar = document.createElement('button');
    btnCompartilhar.className = 'w-100 btnInteragir p-1';
    let iconCompartilhar = document.createElement('i');
    iconCompartilhar.className = 'bi bi-send';
    btnCompartilhar.appendChild(iconCompartilhar);
    btnCompartilhar.appendChild(document.createTextNode(" Compartilhar"));
    col3.appendChild(btnCompartilhar);

    btnCompartilhar.addEventListener('click', () => {
        qtdeCompartilhamentos++
        compartilhamentos.textContent = qtdeCompartilhamentos
    })

    linhaInteracoes.appendChild(col1);
    linhaInteracoes.appendChild(col2);
    linhaInteracoes.appendChild(col3);
    divPublicacao.appendChild(linhaInteracoes);

    let tituloComent = document.createElement('span')
    tituloComent.textContent = 'Comentários'
    tituloComent.style.fontWeight = 'bold'
    divPublicacao.appendChild(tituloComent)


    let secaoComentarios = document.createElement('section');
    secaoComentarios.className = 'secaoComentarios';

    let linhaComentar = document.createElement('div');
    linhaComentar.className = 'row align-items-center mt-2 linhaComentar linhaComentarOculta';

    let divFoto = document.createElement('div');
    divFoto.className = 'col-lg-1 col-md-1 col-sm-2 col-2';
    let imgPerfil = document.createElement('img');
    imgPerfil.src = './imagens/Rony Weasley.jpeg';
    imgPerfil.className = 'img-fluid rounded-circle';
    divFoto.appendChild(imgPerfil);
    linhaComentar.appendChild(divFoto);

    let divInput = document.createElement('div');
    divInput.className = 'col-lg-8 col-md-9 col-sm-7 col-6';
    let inputComentarPub = document.createElement('input');
    inputComentarPub.type = 'text';
    inputComentarPub.placeholder = 'Comentar como Rony Weasley';
    inputComentarPub.className = 'w-100 rounded inputComentarPub';
    divInput.appendChild(inputComentarPub);
    linhaComentar.appendChild(divInput);

    let divBtnComentar = document.createElement('div');
    divBtnComentar.className = 'col-lg-1 col-md-2 col-sm-1 col-1';
    let btnPublicarComentario = document.createElement('button');
    btnPublicarComentario.className = 'btnPublicarComentario';
    btnPublicarComentario.textContent = 'Comentar';
    divBtnComentar.appendChild(btnPublicarComentario);
    linhaComentar.appendChild(divBtnComentar);


    btnComentar.addEventListener('click', () => {
        linhaComentar.classList.toggle('linhaComentarOculta');
        btnComentar.classList.toggle('comentario-clicado')
    });

    btnPublicarComentario.addEventListener('click', () => {
        let inputTexto = inputComentarPub.value.trim();

        if (inputTexto !== '') {
            qtdeComentarios++;
            comentarios.textContent = qtdeComentarios


            let divComentario = document.createElement('div');
            divComentario.className = 'row mb-3 mt-3';

            let divFotoComent = document.createElement('div');
            divFotoComent.className = 'col-lg-1 col-md-1 col-sm-2 col-2';
            let imgComent = document.createElement('img');
            imgComent.src = './imagens/Rony Weasley.jpeg';
            imgComent.className = 'img-fluid rounded-circle';
            divFotoComent.appendChild(imgComent);
            divComentario.appendChild(divFotoComent);

            let divTextoComent = document.createElement('div');
            divTextoComent.className = 'col-lg-11 col-md-11 col-10';

            divTextoComent.innerHTML = `
                <div class="comentario">
                    <span class="fw-bold">rony_weasley</span><br>
                    <span>${inputTexto}</span><br>
                </div>
                <div class="d-flex">
                    <span>Agora</span>
                    <button class="btnCurtirComentario ms-2">Curtir</button>
                    <button class="btnResponderComentario ms-2">Responder</button>
                    <span class="ms-auto me-3"><span class="qtdeCurtidasComentario">0</span> curtida(s)</span>
                </div>`;

            let btnCurtirComentario = divTextoComent.querySelector('.btnCurtirComentario')
            let comentarios2 = divTextoComent.querySelector('.qtdeCurtidasComentario')
            let qtdeComentarios2 = parseInt(comentarios2.textContent)
            btnCurtirComentario.addEventListener('click', () => {
                btnCurtirComentario.classList.toggle('curtido')

                if (qtdeComentarios2 == 0) {
                    qtdeComentarios2++
                    comentarios2.textContent = qtdeComentarios2
                } else {
                    qtdeComentarios2--
                    comentarios2.textContent = qtdeComentarios2
                }

            })

            divComentario.appendChild(divTextoComent);
            secaoComentarios.prepend(divComentario);

            inputComentarPub.value = '';
        }
    });

    secaoComentarios.appendChild(linhaComentar);
    divPublicacao.appendChild(secaoComentarios);
    container.appendChild(divPublicacao);


    sectionPublicacoes.prepend(container);
}

btnPublicar.addEventListener('click', () => {
    let conteudoInput = inputPublicacao.value.trim();
    if (conteudoInput !== '') {
        criaPublicacaoTexto(conteudoInput);
        inputPublicacao.value = '';
    }
});





// APLICA OS EVENTOS NAS POSTAGENS JÁ FEITAS NO HTML //

// Primeira publicação //

let btnCurtir1 = document.querySelector('#btnCurtir1')
let curtidas1 = document.querySelector('#qtdeCurtidas1')
let qtdeCurtidas1 = parseInt(curtidas1.textContent)

btnCurtir1.addEventListener('click', () => {
    btnCurtir1.classList.toggle('curtido')
    if (btnCurtir1.classList.contains('curtido')) {
        qtdeCurtidas1++
    } else {
        qtdeCurtidas1--
    }
    curtidas1.textContent = qtdeCurtidas1
})

let btnComentar1 = document.querySelector('#btnComentar1')
let comentarios1 = document.querySelector('#qtdeComentarios1')
let qtdeComentarios1 = parseInt(comentarios1.textContent)
let secaoComentarios1 = document.querySelector('#secaoComentarios1')
let linhaComentarPub1 = document.querySelector('#linhaComentarPub1')
let btnPublicarComentario1 = document.querySelector('#btnPublicarComentario1')
let inputComentarPub1 = document.querySelector('#inputComentarPub1')

btnComentar1.addEventListener('click', () => {
    linhaComentarPub1.classList.toggle('linhaComentarOculta')
    btnComentar1.classList.toggle('comentario-clicado')
})

btnPublicarComentario1.addEventListener('click', () => {
    let conteudoInput = inputComentarPub1.value.trim()

    if (conteudoInput !== '') {
        qtdeComentarios1++
        comentarios1.textContent = qtdeComentarios1


        let divComentario = document.createElement('div')
        divComentario.className = 'row mb-3 mt-3'

        let divFoto = document.createElement('div')
        divFoto.className = 'col-lg-1 col-md-1 col-sm-2 col-2'
        let img = document.createElement('img')
        img.src = './imagens/Rony Weasley.jpeg'
        img.className = 'img-fluid rounded-circle'

        divFoto.appendChild(img)
        divComentario.appendChild(divFoto)

        let divTextoComent = document.createElement('div')
        divTextoComent.className = 'col-lg-11 col-md-11 col-10'

        let divComent = document.createElement('div')
        divComent.className = 'comentario'
        divComent.innerHTML = `<span class="fw-bold">rony_weasley</span><br>
                                <span>${conteudoInput}</span><br>`

        let divInteracaoComent = document.createElement('div')
        divInteracaoComent.className = 'd-flex align-items-center'
        divInteracaoComent.innerHTML = `
            <span>Agora</span>
            <button class="btnCurtirComentario ms-2">Curtir</button>
            <button class="btnResponderComentario ms-2">Responder</button>
            <span class="ms-auto me-3 texto_qtde_curtidas">
                <span class="qtde_curtidas">0</span> curtida(s)
            </span>`

        let btnCurtirComentario = divInteracaoComent.querySelector('.btnCurtirComentario')
        let spanQtdeCurtidas = divInteracaoComent.querySelector('.qtde_curtidas')

        btnCurtirComentario.addEventListener('click', () => {
            btnCurtirComentario.classList.toggle('curtido')
            let qtdeCurtidas = parseInt(spanQtdeCurtidas.textContent)
            if (qtdeCurtidas == 0) {
                qtdeCurtidas++
                spanQtdeCurtidas.textContent = qtdeCurtidas
            } else {
                qtdeCurtidas--
                spanQtdeCurtidas.textContent = qtdeCurtidas
            }
        })

        divTextoComent.appendChild(divComent)
        divTextoComent.appendChild(divInteracaoComent)
        divComentario.appendChild(divTextoComent)

        secaoComentarios1.prepend(divComentario)

        inputComentarPub1.value = ''
    }
})

let btnCurtirComentario1 = document.querySelector('.btnCurtirComentario1')
let curtidasComent1 = document.querySelector('.qtdeCurtidasComentario1')
btnCurtirComentario1.addEventListener('click', () => {
    let qtdeComentarios1 = parseInt(curtidasComent1.textContent)
    if (qtdeComentarios1 == 1) {
        qtdeComentarios1++
        curtidasComent1.textContent = qtdeComentarios1
    } else {
        qtdeComentarios1--
        curtidasComent1.textContent = qtdeComentarios1
    }
})

let btnCompartilhar1 = document.querySelector('#btnCompartilhar1')
let spanCompartilhamentos1 = document.querySelector('#qtdeCompartilhamentos1')
btnCompartilhar1.addEventListener('click', () => {
    let qtdeCompartilhamentos1 = parseInt(spanCompartilhamentos1.textContent)
    qtdeCompartilhamentos1++
    spanCompartilhamentos1.textContent = qtdeCompartilhamentos1
})


// -------------------------------------

// Segunda publicação

let btnCurtir2 = document.querySelector('#btnCurtir2')
let curtidas2 = document.querySelector('#qtdeCurtidas2')
let qtdeCurtidas2 = parseInt(curtidas2.textContent)

btnCurtir2.addEventListener('click', () => {
    btnCurtir2.classList.toggle('curtido')
    if (btnCurtir2.classList.contains('curtido')) {
        qtdeCurtidas2++
    } else {
        qtdeCurtidas2--
    }
    curtidas2.textContent = qtdeCurtidas2
})


let btnComentar2 = document.querySelector('#btnComentar2')
let comentarios2 = document.querySelector('#qtdeComentarios2')
let qtdeComentarios2 = parseInt(comentarios2.textContent)
let secaoComentarios2 = document.querySelector('#secaoComentarios2')
let linhaComentarPub2 = document.querySelector('#linhaComentarPub2')
let btnPublicarComentario2 = document.querySelector('#btnPublicarComentario2')
let inputComentarPub2 = document.querySelector('#inputComentarPub2')

btnComentar2.addEventListener('click', () => {
    linhaComentarPub2.classList.toggle('linhaComentarOculta')
    btnComentar2.classList.toggle('comentario-clicado')
})

btnPublicarComentario2.addEventListener('click', () => {
    let conteudoInput = inputComentarPub2.value.trim()

    if (conteudoInput !== '') {
        qtdeComentarios2++
        comentarios2.textContent = qtdeComentarios2


        let divComentario = document.createElement('div')
        divComentario.className = 'row mb-3 mt-3'

        let divFoto = document.createElement('div')
        divFoto.className = 'col-lg-1 col-md-1 col-sm-2 col-2'
        let img = document.createElement('img')
        img.src = './imagens/Rony Weasley.jpeg'
        img.className = 'img-fluid rounded-circle'

        divFoto.appendChild(img)
        divComentario.appendChild(divFoto)

        let divTextoComent = document.createElement('div')
        divTextoComent.className = 'col-lg-11 col-md-11 col-10'

        let divComent = document.createElement('div')
        divComent.className = 'comentario'
        divComent.innerHTML = `<span class="fw-bold">rony_weasley</span><br>
                                <span>${conteudoInput}</span><br>`

        let divInteracaoComent = document.createElement('div')
        divInteracaoComent.className = 'd-flex align-items-center'
        divInteracaoComent.innerHTML = `
            <span>Agora</span>
            <button class="btnCurtirComentario ms-2">Curtir</button>
            <button class="btnResponderComentario ms-2">Responder</button>
            <span class="ms-auto me-3 texto_qtde_curtidas">
                <span class="qtde_curtidas">0</span> curtida(s)
            </span>`

        let btnCurtirComentario = divInteracaoComent.querySelector('.btnCurtirComentario')
        let spanQtdeCurtidas = divInteracaoComent.querySelector('.qtde_curtidas')

        btnCurtirComentario.addEventListener('click', () => {
            btnCurtirComentario.classList.toggle('curtido')
            let qtdeCurtidas = parseInt(spanQtdeCurtidas.textContent)
            if (qtdeCurtidas == 0) {
                qtdeCurtidas++
                spanQtdeCurtidas.textContent = qtdeCurtidas
            } else {
                qtdeCurtidas--
                spanQtdeCurtidas.textContent = qtdeCurtidas
            }
        })

        divTextoComent.appendChild(divComent)
        divTextoComent.appendChild(divInteracaoComent)
        divComentario.appendChild(divTextoComent)

        secaoComentarios2.prepend(divComentario)

        inputComentarPub2.value = ''
    }
})

let btnCompartilhar2 = document.querySelector('#btnCompartilhar2')
let spanCompartilhamento2 = document.querySelector('#qtdeCompartilhamentos2')
let qtdeCompartilhamentos2 = parseInt(spanCompartilhamento2.textContent)
btnCompartilhar2.addEventListener('click', () => {
    qtdeCompartilhamentos2++
    spanCompartilhamento2.textContent = qtdeCompartilhamentos2
})


let btnsCurtirComent2 = document.querySelectorAll('.btnCurtirComentario2')
let qtdesCurtidasComent2 = document.querySelectorAll('.qtdeCurtidasComentario2')

let curtiu = false
for (let i = 0; i < btnsCurtirComent2.length; i++) {
    btnsCurtirComent2[i].addEventListener('click', () => {
        let qtdeCurtidaComent = parseInt(qtdesCurtidasComent2[i].textContent)
        if (!curtiu) {
            curtiu = true
            qtdeCurtidaComent++
            qtdesCurtidasComent2[i].textContent = qtdeCurtidaComent
        } else {
            curtiu = false
            qtdeCurtidaComent--
            qtdesCurtidasComent2[i].textContent = qtdeCurtidaComent
        }
    })


}

// ------------------------------

const btnPublicarFoto = document.querySelector('#btnPublicarFoto')
const inputFoto = document.querySelector('#inputPublicacaoFoto')
btnPublicarFoto.addEventListener('click', () => {
    let urlImagem = inputFoto.value.trim()

    if (urlImagem !== '') {
        criaPublicacaoImagem(urlImagem)
    }
    inputFoto.value = ''

})

function criaPublicacaoImagem(imagem) {
    const container = document.createElement('div');
    container.className = 'container mt-3';

    const divPublicacao = document.createElement('div');
    divPublicacao.className = 'col-lg-9 ms-auto me-auto bg-white publicacao';

    const divUsuario = document.createElement('div');
    divUsuario.className = 'd-flex';

    const divImagem = document.createElement('div');
    divImagem.className = 'col-lg-1 col-md-1 col-2';
    const imgPerfil = document.createElement('img');
    imgPerfil.src = './imagens/Rony Weasley.jpeg';
    imgPerfil.className = 'img-fluid rounded-circle';
    divImagem.appendChild(imgPerfil);

    const divInfo = document.createElement('div');
    divInfo.className = 'col-lg-2 col-md-2 col-3 ms-2';
    divInfo.innerHTML = '<span class="fw-bold">rony_weasley</span><br><span>Agora - <i class="bi bi-globe-americas-fill"></i></span>';

    divUsuario.appendChild(divImagem);
    divUsuario.appendChild(divInfo);
    divPublicacao.appendChild(divUsuario);

    const hr1 = document.createElement('hr');
    divPublicacao.appendChild(hr1);

    const imgPub = document.createElement('img');
    imgPub.src = imagem;
    imgPub.className = 'img-fluid mx-auto rounded';
    divPublicacao.appendChild(imgPub);

    const divReacoes = document.createElement('div');
    divReacoes.className = 'd-flex mt-2';
    let iconCurtida = document.createElement('i');
    iconCurtida.className = 'bi bi-hand-thumbs-up-fill bg-primary rounded-circle text-white px-2 py-1';

    let qtdeCurtidas = 0;
    let curtidas = document.createElement('span');
    curtidas.className = 'ms-2';
    curtidas.textContent = ` ${qtdeCurtidas} curtidas`;

    divReacoes.appendChild(iconCurtida);
    divReacoes.appendChild(curtidas);

    let divComentCompart = document.createElement('div')
    divComentCompart.className = 'ms-auto'

    let qtdeComentarios = 0
    let comentarios = document.createElement('span')
    comentarios.textContent = qtdeComentarios

    let iconComentario = document.createElement('i')
    iconComentario.className = 'bi bi-chat-fill ms-1'

    divComentCompart.appendChild(comentarios)
    divComentCompart.appendChild(iconComentario)

    let qtdeCompartilhamentos = 0
    let compartilhamentos = document.createElement('span')
    compartilhamentos.textContent = qtdeCompartilhamentos

    let iconCompartilhamentos = document.createElement('i')
    iconCompartilhamentos.className = 'bi bi-send-fill ms-2'

    divComentCompart.appendChild(compartilhamentos)
    divComentCompart.appendChild(iconCompartilhamentos)

    divReacoes.appendChild(divComentCompart)

    divPublicacao.appendChild(divReacoes);

    divPublicacao.appendChild(document.createElement('hr'));

    let linhaInteracoes = document.createElement('div');
    linhaInteracoes.className = 'row text-center';

    let col1 = document.createElement('div');
    col1.className = 'col-4';

    let btnCurtir = document.createElement('button');
    btnCurtir.className = 'w-100 btnInteragir p-1 curtir';
    let iconCurtir = document.createElement('i');
    iconCurtir.className = 'bi bi-hand-thumbs-up';
    btnCurtir.appendChild(iconCurtir);
    btnCurtir.appendChild(document.createTextNode(" Curtir"));

    btnCurtir.addEventListener('click', () => {
        let estaCurtido = btnCurtir.classList.toggle('curtido');
        if (estaCurtido) {
            qtdeCurtidas++;
            curtidas.textContent = `${qtdeCurtidas} curtida`;
        } else {
            qtdeCurtidas--;
            curtidas.textContent = `${qtdeCurtidas} curtidas`;
        }
    });

    col1.appendChild(btnCurtir);

    let col2 = document.createElement('div');
    col2.className = 'col-4';

    let btnComentar = document.createElement('button');
    btnComentar.className = 'w-100 btnInteragir p-1';
    let iconComentar = document.createElement('i');
    iconComentar.className = 'bi bi-chat';
    btnComentar.appendChild(iconComentar);
    btnComentar.appendChild(document.createTextNode(" Comentar"));
    col2.appendChild(btnComentar);

    let col3 = document.createElement('div');
    col3.className = 'col-4';

    let btnCompartilhar = document.createElement('button');
    btnCompartilhar.className = 'w-100 btnInteragir p-1';
    let iconCompartilhar = document.createElement('i');
    iconCompartilhar.className = 'bi bi-send';
    btnCompartilhar.appendChild(iconCompartilhar);
    btnCompartilhar.appendChild(document.createTextNode(" Compartilhar"));
    col3.appendChild(btnCompartilhar);

    btnCompartilhar.addEventListener('click', () => {
        qtdeCompartilhamentos++
        compartilhamentos.textContent = qtdeCompartilhamentos
    })

    linhaInteracoes.appendChild(col1);
    linhaInteracoes.appendChild(col2);
    linhaInteracoes.appendChild(col3);
    divPublicacao.appendChild(linhaInteracoes);

    divPublicacao.appendChild(document.createElement('hr'))

    let secaoComentarios = document.createElement('section');
    secaoComentarios.className = 'secaoComentarios';

    let linhaComentar = document.createElement('div');
    linhaComentar.className = 'row align-items-center mt-2 linhaComentar linhaComentarOculta';

    let divFoto = document.createElement('div');
    divFoto.className = 'col-lg-1 col-md-1 col-sm-2 col-2';
    let imgPerfilComent = document.createElement('img');
    imgPerfilComent.src = './imagens/Rony Weasley.jpeg';
    imgPerfilComent.className = 'img-fluid rounded-circle';
    divFoto.appendChild(imgPerfilComent);
    linhaComentar.appendChild(divFoto);

    let divInput = document.createElement('div');
    divInput.className = 'col-lg-8 col-md-9 col-sm-7 col-6';
    let inputComentarPub = document.createElement('input');
    inputComentarPub.type = 'text';
    inputComentarPub.placeholder = 'Comentar como Rony Weasley';
    inputComentarPub.className = 'w-100 rounded inputComentarPub';
    divInput.appendChild(inputComentarPub);
    linhaComentar.appendChild(divInput);

    let divBtnComentar = document.createElement('div');
    divBtnComentar.className = 'col-lg-1 col-md-2 col-sm-1 col-1';
    let btnPublicarComentario = document.createElement('button');
    btnPublicarComentario.className = 'btnPublicarComentario';
    btnPublicarComentario.textContent = 'Comentar';
    divBtnComentar.appendChild(btnPublicarComentario);
    linhaComentar.appendChild(divBtnComentar);

    secaoComentarios.appendChild(linhaComentar);
    divPublicacao.appendChild(secaoComentarios);
    container.appendChild(divPublicacao);

    btnComentar.addEventListener('click', () => {
        linhaComentar.classList.toggle('linhaComentarOculta');
        btnComentar.classList.toggle('comentario-clicado')
    });

    btnPublicarComentario.addEventListener('click', () => {
        let inputTexto = inputComentarPub.value.trim();
        if (inputTexto !== '') {
            qtdeComentarios++;
            comentarios.textContent = qtdeComentarios


            let divComentario = document.createElement('div');
            divComentario.className = 'row mb-3 mt-3';

            let divFotoComent = document.createElement('div');
            divFotoComent.className = 'col-lg-1 col-md-1 col-sm-2 col-2';
            let imgComent = document.createElement('img');
            imgComent.src = './imagens/Rony Weasley.jpeg';
            imgComent.className = 'img-fluid rounded-circle';
            divFotoComent.appendChild(imgComent);
            divComentario.appendChild(divFotoComent);

            let divTextoComent = document.createElement('div');
            divTextoComent.className = 'col-lg-11 col-md-11 col-10';

            divTextoComent.innerHTML = `
                <div class="comentario">
                    <span class="fw-bold">rony_weasley</span><br>
                    <span>${inputTexto}</span><br>
                </div>
                <div class="d-flex">
                    <span>Agora</span>
                    <button class="btnCurtirComentario ms-2">Curtir</button>
                    <button class="btnResponderComentario ms-2">Responder</button>
                    <span class="ms-auto me-3"><span class="qtdeCurtidasComentario">0</span> curtida(s)</span>
                </div>`;

            let btnCurtirComentario = divTextoComent.querySelector('.btnCurtirComentario')
            let comentarios2 = divTextoComent.querySelector('.qtdeCurtidasComentario')
            let qtdeComentarios2 = parseInt(comentarios2.textContent)
            btnCurtirComentario.addEventListener('click', () => {
                btnCurtirComentario.classList.toggle('curtido')

                if (qtdeComentarios2 == 0) {
                    qtdeComentarios2++
                    comentarios2.textContent = qtdeComentarios2
                } else {
                    qtdeComentarios2--
                    comentarios2.textContent = qtdeComentarios2
                }

            })

            divComentario.appendChild(divTextoComent);
            secaoComentarios.prepend(divComentario);

            inputComentarPub.value = '';
        }
    })

    sectionPublicacoes.prepend(container);
}

const btnPublicarVideo = document.querySelector('#btnPublicarVideo')
const inputVideo = document.querySelector('#inputPublicacaoVideo')
btnPublicarVideo.addEventListener('click', () => {
    let urlVideo = inputVideo.value.trim()

    if (urlVideo !== '') {
        criaPublicacaoVideo(urlVideo)
        inputVideo.value = ''
    }
})

function criaPublicacaoVideo(video) {

    const container = document.createElement('div');
    container.className = 'container mt-3';

    const divPublicacao = document.createElement('div');
    divPublicacao.className = 'col-lg-9 ms-auto me-auto bg-white publicacao';

    const divUsuario = document.createElement('div');
    divUsuario.className = 'd-flex';

    const divImagem = document.createElement('div');
    divImagem.className = 'col-lg-1 col-md-1 col-2';
    const imgPerfil = document.createElement('img');
    imgPerfil.src = './imagens/Rony Weasley.jpeg';
    imgPerfil.className = 'img-fluid rounded-circle';
    divImagem.appendChild(imgPerfil);

    const divInfo = document.createElement('div');
    divInfo.className = 'col-lg-2 col-md-2 col-3 ms-2';
    divInfo.innerHTML = '<span class="fw-bold">rony_weasley</span><br><span>Agora - <i class="bi bi-globe-americas-fill"></i></span>';

    divUsuario.appendChild(divImagem);
    divUsuario.appendChild(divInfo);
    divPublicacao.appendChild(divUsuario);

    const hr1 = document.createElement('hr');
    divPublicacao.appendChild(hr1);

    let videoPub = document.createElement('video')
    videoPub.src = video;
    videoPub.controls = true;
    videoPub.className = 'mx-auto rounded img-fluid';
    divPublicacao.appendChild(videoPub);

    const hr2 = document.createElement('hr');
    divPublicacao.appendChild(hr2);

    const divReacoes = document.createElement('div');
    divReacoes.className = 'd-flex mt-2';
    let iconCurtida = document.createElement('i');
    iconCurtida.className = 'bi bi-hand-thumbs-up-fill bg-primary rounded-circle text-white px-2 py-1';

    let qtdeCurtidas = 0;
    let curtidas = document.createElement('span');
    curtidas.className = 'ms-2';
    curtidas.textContent = ` ${qtdeCurtidas} curtidas`;

    divReacoes.appendChild(iconCurtida);
    divReacoes.appendChild(curtidas);

    let divComentCompart = document.createElement('div')
    divComentCompart.className = 'ms-auto'

    let qtdeComentarios = 0
    let comentarios = document.createElement('span')
    comentarios.textContent = qtdeComentarios

    let iconComentario = document.createElement('i')
    iconComentario.className = 'bi bi-chat-fill ms-1'

    divComentCompart.appendChild(comentarios)
    divComentCompart.appendChild(iconComentario)

    let qtdeCompartilhamentos = 0
    let compartilhamentos = document.createElement('span')
    compartilhamentos.textContent = qtdeCompartilhamentos

    let iconCompartilhamentos = document.createElement('i')
    iconCompartilhamentos.className = 'bi bi-send-fill ms-2'

    divComentCompart.appendChild(compartilhamentos)
    divComentCompart.appendChild(iconCompartilhamentos)

    divReacoes.appendChild(divComentCompart)

    divPublicacao.appendChild(divReacoes);

    divPublicacao.appendChild(document.createElement('hr'));

    let linhaInteracoes = document.createElement('div');
    linhaInteracoes.className = 'row text-center';

    let col1 = document.createElement('div');
    col1.className = 'col-4';

    let btnCurtir = document.createElement('button');
    btnCurtir.className = 'w-100 btnInteragir p-1 curtir';
    let iconCurtir = document.createElement('i');
    iconCurtir.className = 'bi bi-hand-thumbs-up';
    btnCurtir.appendChild(iconCurtir);
    btnCurtir.appendChild(document.createTextNode(" Curtir"));

    btnCurtir.addEventListener('click', () => {
        let estaCurtido = btnCurtir.classList.toggle('curtido');
        if (estaCurtido) {
            qtdeCurtidas++;
            curtidas.textContent = `${qtdeCurtidas} curtida`;
        } else {
            qtdeCurtidas--;
            curtidas.textContent = `${qtdeCurtidas} curtidas`;
        }
    });

    col1.appendChild(btnCurtir);

    let col2 = document.createElement('div');
    col2.className = 'col-4';

    let btnComentar = document.createElement('button');
    btnComentar.className = 'w-100 btnInteragir p-1';
    let iconComentar = document.createElement('i');
    iconComentar.className = 'bi bi-chat';
    btnComentar.appendChild(iconComentar);
    btnComentar.appendChild(document.createTextNode(" Comentar"));
    col2.appendChild(btnComentar);

    let col3 = document.createElement('div');
    col3.className = 'col-4';

    let btnCompartilhar = document.createElement('button');
    btnCompartilhar.className = 'w-100 btnInteragir p-1';
    let iconCompartilhar = document.createElement('i');
    iconCompartilhar.className = 'bi bi-send';
    btnCompartilhar.appendChild(iconCompartilhar);
    btnCompartilhar.appendChild(document.createTextNode(" Compartilhar"));
    col3.appendChild(btnCompartilhar);

    btnCompartilhar.addEventListener('click', () => {
        qtdeCompartilhamentos++
        compartilhamentos.textContent = qtdeCompartilhamentos
    })

    linhaInteracoes.appendChild(col1);
    linhaInteracoes.appendChild(col2);
    linhaInteracoes.appendChild(col3);
    divPublicacao.appendChild(linhaInteracoes);

    let secaoComentarios = document.createElement('section');
    secaoComentarios.className = 'secaoComentarios';

    let linhaComentar = document.createElement('div');
    linhaComentar.className = 'row align-items-center mt-2 linhaComentar linhaComentarOculta';

    let divFoto = document.createElement('div');
    divFoto.className = 'col-lg-1 col-md-1 col-sm-2 col-2';
    let imgPerfilComent = document.createElement('img');
    imgPerfilComent.src = './imagens/Rony Weasley.jpeg';
    imgPerfilComent.className = 'img-fluid rounded-circle';
    divFoto.appendChild(imgPerfilComent);
    linhaComentar.appendChild(divFoto);

    let divInput = document.createElement('div');
    divInput.className = 'col-lg-8 col-md-9 col-sm-7 col-6';
    let inputComentarPub = document.createElement('input');
    inputComentarPub.type = 'text';
    inputComentarPub.placeholder = 'Comentar como Rony Weasley';
    inputComentarPub.className = 'w-100 rounded inputComentarPub';
    divInput.appendChild(inputComentarPub);
    linhaComentar.appendChild(divInput);

    let divBtnComentar = document.createElement('div');
    divBtnComentar.className = 'col-lg-1 col-md-2 col-sm-1 col-1';
    let btnPublicarComentario = document.createElement('button');
    btnPublicarComentario.className = 'btnPublicarComentario';
    btnPublicarComentario.textContent = 'Comentar';
    divBtnComentar.appendChild(btnPublicarComentario);
    linhaComentar.appendChild(divBtnComentar);

    secaoComentarios.appendChild(linhaComentar);
    divPublicacao.appendChild(secaoComentarios);
    container.appendChild(divPublicacao);

    btnComentar.addEventListener('click', () => {
        linhaComentar.classList.toggle('linhaComentarOculta');
        btnComentar.classList.toggle('comentario-clicado')
    });

    btnPublicarComentario.addEventListener('click', () => {
        let inputTexto = inputComentarPub.value.trim();
        if (inputTexto !== '') {
            qtdeComentarios++;
            comentarios.textContent = qtdeComentarios


            let divComentario = document.createElement('div');
            divComentario.className = 'row mb-3 mt-3';

            let divFotoComent = document.createElement('div');
            divFotoComent.className = 'col-lg-1 col-md-1 col-sm-2 col-2';
            let imgComent = document.createElement('img');
            imgComent.src = './imagens/Rony Weasley.jpeg';
            imgComent.className = 'img-fluid rounded-circle';
            divFotoComent.appendChild(imgComent);
            divComentario.appendChild(divFotoComent);

            let divTextoComent = document.createElement('div');
            divTextoComent.className = 'col-lg-11 col-md-11 col-10';

            divTextoComent.innerHTML = `
                <div class="comentario">
                    <span class="fw-bold">rony_weasley</span><br>
                    <span>${inputTexto}</span><br>
                </div>
                <div class="d-flex">
                    <span>Agora</span>
                    <button class="btnCurtirComentario ms-2">Curtir</button>
                    <button class="btnResponderComentario ms-2">Responder</button>
                    <span class="ms-auto me-3"><span class="qtdeCurtidasComentario">0</span> curtida(s)</span>
                </div>`;

            let btnCurtirComentario = divTextoComent.querySelector('.btnCurtirComentario')
            let comentarios2 = divTextoComent.querySelector('.qtdeCurtidasComentario')
            let qtdeComentarios2 = parseInt(comentarios2.textContent)
            btnCurtirComentario.addEventListener('click', () => {
                btnCurtirComentario.classList.toggle('curtido')

                if (qtdeComentarios2 == 0) {
                    qtdeComentarios2++
                    comentarios2.textContent = qtdeComentarios2
                } else {
                    qtdeComentarios2--
                    comentarios2.textContent = qtdeComentarios2
                }

            })

            divComentario.appendChild(divTextoComent);
            secaoComentarios.prepend(divComentario);

            inputComentarPub.value = '';
        }
    })

    sectionPublicacoes.prepend(container);
}