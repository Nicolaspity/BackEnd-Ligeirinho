// seleciona com checagem para evitar erros caso o id mude
    const envelope    = document.getElementById('envelope');
    const page1       = document.getElementById('page1');
    const page2       = document.getElementById('page2');
    const page3       = document.getElementById('page3');
    const page4       = document.getElementById('page4');
    const page5       = document.getElementById('page5');
    const page6       = document.getElementById('page6');

    const btnNext     = document.getElementById('btnNext');
    const btnToPage4  = document.getElementById('btnToPage4');
    const btnToPage5  = document.getElementById('btnToPage5');
    const btnToPage6  = document.getElementById('btnToPage6');
    const btnComecar  = document.getElementById('btnComecar');

    const msgBox      = page2 ? page2.querySelector('.msg-box') : null;
    const captionBox3 = page3 ? page3.querySelector('.caption-box') : null;
    const captionBox4 = page4 ? page4.querySelector('.caption-box') : null;
    const dialogTopBox = document.getElementById('dialogTopBox');
    // Animação dos textos se escrevendo
    function typeWriter(element, text, speed = 70, callback) {
        let i = 0;
        element.textContent = ''; // garante que começa vazio
        function typing() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            } else if (callback) {
                callback();
            }
        }
        typing();
    }
    // Flags para controlar execução única do typeWriter em cada página
    const typeWriterExecuted = {
        page2: false,
        page3: false,
        page4: false
    };

    function showPage(target) {
        // esconde todas
        [page1, page2, page3, page4, page5, page6].forEach(p => {
            if (!p) return;
            p.classList.add('hidden');
            p.setAttribute('aria-hidden', 'true');
            p.classList.remove('enter-page', 'show');
        });
        // mostra a escolhida
        if (!target) return;
        target.classList.remove('hidden');
        target.classList.add('enter-page', 'show');
        target.setAttribute('aria-hidden', 'false');

        // disparar typeWriter apenas na primeira vez que a página aparece
        if (target === page2 && !typeWriterExecuted.page2) {
            const el = document.getElementById('typed-text');
            if (el) {
                typeWriter(el, "Você é um grande apreciador de história e viaja até o Rio de Janeiro a fim de descobrir mais sobre o estado");
                typeWriterExecuted.page2 = true;
            }
        }

        if (target === page3 && !typeWriterExecuted.page3) {
            const text3 = document.getElementById('page3-text');
            if (text3) {
                typeWriter(text3, "Uma grande viagem no tempo acontece após o grande Caos (o desconhecimento) dominar o Rio");
                typeWriterExecuted.page3 = true;
            }
        }

        if (target === page4 && !typeWriterExecuted.page4) {
            const text4 = document.getElementById('page4-text');
            if (text4) {
                typeWriter(text4, "Agora és convidado a reconstruir a história do nosso estado e descobrir as origens do Caos.");
                typeWriterExecuted.page4 = true;
            }
        }
    }

    
    if (envelope) {
        envelope.addEventListener('click', () => {
            if (dialogTopBox) dialogTopBox.classList.add('hide');
            // animação do envelope -> mostra page2 após pequena pausa
            envelope.classList.add('opened');
            setTimeout(() => showPage(page2), 600);
        });
    }

    if (btnNext) {
        btnNext.addEventListener('click', () => {
            showPage(page3);
        });
    }

    if (btnToPage4) {
        btnToPage4.addEventListener('click', () => {
            showPage(page4);
        });
    }

    if (btnToPage5) {
        btnToPage5.addEventListener('click', () => {
            showPage(page5);
            const wrapper = page5.querySelector('.ligeirinho-wrapper');
            if (wrapper) wrapper.classList.add('enter-ligeirinho');
        });
    }

    if (btnToPage6) {
        btnToPage6.addEventListener('click', () => showPage(page6));
    }

    if (btnComecar) {
        btnComecar.addEventListener('click', () => {
            window.location.href = 'map1.html';
        });
    }
    // animação inicial do título
    // Animação inicial do título (checando se existe)
    setTimeout(() => {
        if (dialogTopBox) dialogTopBox.classList.add("show");
    }, 300);
    //Animação da caixa de mensagem
    setTimeout(() => {
        if (msgBox) msgBox.classList.add('show');
    }, 500);
    // mostra inicialmente a page1
    showPage(page1);
    
