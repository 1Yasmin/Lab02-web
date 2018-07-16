const state = {
    player: 'x',
    casilla: [{ numero: 1, activa: 0, valor: '' },
        { numero: 2, activa: 0, valor: '' },
        { numero: 3, activa: 0, valor: '' },
        { numero: 4, activa: 0, valor: '' },
        { numero: 5, activa: 0, valor: '' },
        { numero: 6, activa: 0, valor: '' },
        { numero: 7, activa: 0, valor: '' },
        { numero: 8, activa: 0, valor: '' },
        { numero: 9, activa: 0, valor: '' }
    ]
}

const render = lState => {
    const title = document.createElement('h1');
    title.innerHTML = 'TOTITO';

    const turno = document.createElement('div');
    turno.className = 'turno';

    const turnoTitle = document.createElement('h2');
    turnoTitle.innerHTML = 'Turno de: '

    const turnoImg = document.createElement("img");
    turnoImg.className = 'turnoImg';
    turnoImg.src = 'imagenes/X.png';

    const totito = document.createElement('div');
    totito.className = 'gameContainer';

    const casillasH1 = document.createElement('div');
    casillasH1.className = 'casillasH';

    const casillasH2 = document.createElement('div');
    casillasH2.className = 'casillasH';

    const casillasH3 = document.createElement('div');
    casillasH3.className = 'casillasH';

    const casilla1 = document.createElement('div');
    casilla1.className = 'casillasv';

    const casilla2 = document.createElement('div');
    casilla2.className = 'casillasv';

    const casilla3 = document.createElement('div');
    casilla3.className = 'casillasv';

    const casilla4 = document.createElement('div');
    casilla4.className = 'casillasv';

    const casilla5 = document.createElement('div');
    casilla5.className = 'casillasv';

    const casilla6 = document.createElement('div');
    casilla6.className = 'casillasv';

    const casilla7 = document.createElement('div');
    casilla7.className = 'casillasv';

    const casilla8 = document.createElement('div');
    casilla8.className = 'casillasv';

    const casilla9 = document.createElement('div');
    casilla9.className = 'casillasv';

    const iniciarP = document.createElement('button');
    iniciarP.className = 'btnIniciar';
    iniciarP.innerHTML = 'Iniciar Partida';

    // Clear previous root content
    if (root.hasChildNodes()) {
        root.innerHTML = null;
    }

    root.appendChild(title);
    root.appendChild(iniciarP);
    root.appendChild(totito);
    totito.appendChild(casillasH1);
    casillasH1.appendChild(casilla1);
    casillasH1.appendChild(casilla2);
    casillasH1.appendChild(casilla3);
    totito.appendChild(casillasH2);
    casillasH2.appendChild(casilla4);
    casillasH2.appendChild(casilla5);
    casillasH2.appendChild(casilla6);
    totito.appendChild(casillasH3);
    casillasH3.appendChild(casilla7);
    casillasH3.appendChild(casilla8);
    casillasH3.appendChild(casilla9);
    root.appendChild(turno);
    turno.appendChild(turnoTitle);
    turno.appendChild(turnoImg);


    function textoGanador(ganador) {
        console.log(typeof ganador);
        turno.removeChild(turnoImg);
        turnoTitle.innerHTML = 'El ganador es: ';
        const winImg = document.createElement("img");
        winImg.className = 'turnoImg';
        turno.appendChild(winImg);
        if (ganador == 'x') {
            winImg.src = 'imagenes/X.png';
        }
        if (ganador == 'o') {
            winImg.src = 'imagenes/O.png';
        }
    }

    function verificarGanador() {
        //horizontal casilla 1,2 y 3
        if (lState.casilla[0].valor === lState.casilla[1].valor && lState.casilla[0].valor === lState.casilla[2].valor &&
            lState.casilla[0].valor !== '') {
            textoGanador(lState.casilla[0].valor);
            casilla1.classList.add('win');
            casilla2.classList.add('win');
            casilla3.classList.add('win');
        }
        //horizontal 4,5 y 6
        else if (lState.casilla[3].valor === lState.casilla[4].valor && lState.casilla[3].valor === lState.casilla[5].valor &&
            lState.casilla[3].valor !== '') {
            textoGanador(lState.casilla[3].valor);
            casilla4.classList.add('win');
            casilla5.classList.add('win');
            casilla6.classList.add('win');
        }
        //horizontal 7,8 y 9
        else if (lState.casilla[6].valor === lState.casilla[7].valor && lState.casilla[6].valor === lState.casilla[8].valor &&
            lState.casilla[6].valor !== '') {
            textoGanador(lState.casilla[6].valor);
            casilla7.classList.add('win');
            casilla8.classList.add('win');
            casilla9.classList.add('win');
        }
        //vertical 1, 4 y 7
        else if (lState.casilla[0].valor === lState.casilla[3].valor && lState.casilla[0].valor === lState.casilla[6].valor &&
            lState.casilla[0].valor !== '') {
            textoGanador(lState.casilla[0].valor);
            casilla1.classList.add('win');
            casilla4.classList.add('win');
            casilla7.classList.add('win');
        }
        //vertical 2, 5 y 8
        else if (lState.casilla[1].valor === lState.casilla[4].valor && lState.casilla[1].valor === lState.casilla[7].valor &&
            lState.casilla[1].valor !== '') {
            textoGanador(lState.casilla[1].valor);
            casilla2.classList.add('win');
            casilla5.classList.add('win');
            casilla8.classList.add('win');
        }
        //vertical 3, 6 y 9
        else if (lState.casilla[2].valor === lState.casilla[5].valor && lState.casilla[2].valor === lState.casilla[8].valor &&
            lState.casilla[2].valor !== '') {
            textoGanador(lState.casilla[2].valor);
            casilla3.classList.add('win');
            casilla6.classList.add('win');
            casilla9.classList.add('win');

        }
        //diagonal 1, 5 y 9
        else if (lState.casilla[0].valor === lState.casilla[4].valor && lState.casilla[0].valor === lState.casilla[8].valor &&
            lState.casilla[0].valor !== '') {
            textoGanador(lState.casilla[0].valor);
            casilla1.classList.add('win');
            casilla5.classList.add('win');
            casilla9.classList.add('win');
        }
        //diagonal 3, 5 y 7
        else if (lState.casilla[2].valor === lState.casilla[4].valor && lState.casilla[2].valor === lState.casilla[6].valor &&
            lState.casilla[2].valor !== '') {
            textoGanador(lState.casilla[2].valor);
            casilla3.classList.add('win');
            casilla5.classList.add('win');
            casilla7.classList.add('win');
        } else if (lState.casilla[0].activa === 1 && lState.casilla[0].activa === lState.casilla[1].activa &&
            lState.casilla[0].activa === lState.casilla[2].activa &&
            lState.casilla[0].activa === lState.casilla[3].activa &&
            lState.casilla[0].activa === lState.casilla[4].activa &&
            lState.casilla[0].activa === lState.casilla[5].activa &&
            lState.casilla[0].activa === lState.casilla[6].activa &&
            lState.casilla[0].activa === lState.casilla[7].activa &&
            lState.casilla[0].activa === lState.casilla[8].activa) {
            turno.removeChild(turnoImg);
            turnoTitle.innerHTML = 'EMPATE!';

        }

    };

    function evento(num, cas) {
        if (lState.casilla[num].activa === 1) {
            console.log('casilla usada');
        } else {
            lState.casilla[num].activa = 1;
            let elemento = document.createElement("img");
            elemento.className = 'imagenX';
            cas.appendChild(elemento);
            if (lState.player === 'x') {
                lState.casilla[num].valor = 'x';
                elemento.src = 'imagenes/X.png';
                lState.player = 'o'
                turnoImg.src = 'imagenes/O.png';
            } else {
                lState.casilla[num].valor = 'o';
                elemento.src = 'imagenes/O.png';
                lState.player = 'x'
                turnoImg.src = 'imagenes/X.png';
            }
        }
        console.log(lState);

    }
    casilla1.onclick = () => {
        evento(0, casilla1);
        verificarGanador();
    };

    casilla2.onclick = () => {
        evento(1, casilla2);
        verificarGanador();

    };

    casilla3.onclick = () => {
        evento(2, casilla3);
        verificarGanador();
    };

    casilla4.onclick = () => {
        evento(3, casilla4);
        verificarGanador();

    };

    casilla5.onclick = () => {
        evento(4, casilla5);
        verificarGanador();
    };

    casilla6.onclick = () => {
        evento(5, casilla6);
        verificarGanador();
    };

    casilla7.onclick = () => {
        evento(6, casilla7);
        verificarGanador();
    };

    casilla8.onclick = () => {
        evento(7, casilla8);
        verificarGanador();
    };

    casilla9.onclick = () => {
        evento(8, casilla9);
        verificarGanador();
    };

    iniciarP.onclick = () => {
        render(lState);
        lState.player = 'x';
        lState.casilla[0].activa = 0;
        lState.casilla[1].activa = 0;
        lState.casilla[2].activa = 0;
        lState.casilla[3].activa = 0;
        lState.casilla[4].activa = 0;
        lState.casilla[5].activa = 0;
        lState.casilla[6].activa = 0;
        lState.casilla[7].activa = 0;
        lState.casilla[8].activa = 0;
        lState.casilla[0].valor = '';
        lState.casilla[1].valor = '';
        lState.casilla[2].valor = '';
        lState.casilla[3].valor = '';
        lState.casilla[4].valor = '';
        lState.casilla[5].valor = '';
        lState.casilla[6].valor = '';
        lState.casilla[7].valor = '';
        lState.casilla[8].valor = '';
        casilla1.classList.remove('win');
        casilla2.classList.remove('win');
        casilla3.classList.remove('win');
        casilla4.classList.remove('win');
        casilla5.classList.remove('win');
        casilla6.classList.remove('win');
        casilla7.classList.remove('win');
        casilla8.classList.remove('win');
        casilla9.classList.remove('win');
    }

}

render(state);