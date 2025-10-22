window.addEventListener('load', () => {
    
    const textElement = document.getElementById('text-line');
    const typingSpan = document.getElementById('typing-span');
    const buttonElement = document.getElementById('start-button');
    const overlayElement = document.getElementById('page-fade-overlay');

    const lineas = [
        "Hola...",
        "Hay algo que llevo mucho tiempo queriendo decirte.",
        "Algo que ha estado dandome vueltas en la cabeza.",
        "Y me preguntaste: ¿Qué me detiene?",
        "Pues, siendo honesto... El miedo... El que pasará...",
        "Pero, la verdad, ya no puedo seguir guardándolo más.",
        "Cada día siento más la ansiedad, y me está volviendo loco.",
        "Y yo creo que ya lo sabes.",
        "Porque...",
        "Me gustas.",
        "Y no es algo pequeño.",
        "Es que se me acelera el corazón no más de pensarlo.",
        "Esa es la máxima razón de porqué estaba tan nervioso el sábado.",
        "Es por eso por lo que cada vez que te voy a invitar a hacer algo doy tantas vueltas.",
        "No estoy pidiéndote nada ahora.",
        "Solo necesitaba que ya supieras lo que siento.",
        "Así que si estás dispuesta...",
        "Si tu también sientes un poquito de eso que yo siento...",
        "Quiero que veas lo que hice para estas 7 semanas.",
        "Y quién sabe...",
        "Que pueda pasar cuando llegues al final."
    ];

    const velocidadEscritura = 100;
    const tiempoPausa = 2000;
    const tiempoPausaFinal = 3000;
    const tiempoFadeTexto = 1500;
    const tiempoFadePagina = 1500;
    const urlDestino = 'https://omiher08.github.io/R1ddles/'; 
    
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    async function escribirLinea(linea) {
        typingSpan.classList.remove('done-typing');
        typingSpan.textContent = '';
        textElement.style.opacity = 1;

        const caracteres = linea.split('');
        
        for (const char of caracteres) {
            typingSpan.textContent += char;
            await sleep(velocidadEscritura);
        }
        
        typingSpan.classList.add('done-typing');
    }

    function mostrarBoton() {
        buttonElement.style.display = 'inline-block';
        buttonElement.classList.add('fade-in-button');
    }

    async function iniciarNarrativa() {
        for (let i = 0; i < lineas.length; i++) {
            const linea = lineas[i];
            await escribirLinea(linea);

            if (i === lineas.length - 1) {
                await sleep(tiempoPausaFinal);
            } else {
                await sleep(tiempoPausa);
            }
            
            textElement.style.opacity = 0;
            
            await sleep(tiempoFadeTexto); 
        }

        textElement.style.display = 'none';

        mostrarBoton();
    }

    buttonElement.addEventListener('click', () => {
        overlayElement.classList.add('is-visible');
        
        setTimeout(() => {
            window.location.href = urlDestino;
        }, tiempoFadePagina);
    });

    iniciarNarrativa();
});

