
// TypeWriter
document.addEventListener("DOMContentLoaded", function() {
    // Selects all elements with the 'typewriter' class
    const elements = document.querySelectorAll('.typewriter');

    elements.forEach(element => {
        const text = element.innerText;
        element.innerHTML = '';
        
        let i = 0;
        const speed = 25;

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // TEXT FINISHED!
                // Check if there is an element to reveal afterwards
                const targetId = element.getAttribute('data-reveal');
                
                if (targetId) {
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        // Waits 1 second (1000ms) before fading in
                        setTimeout(() => {
                            targetElement.classList.add('visible');
                        }, 1000); 
                    }
                }
            }
        }
        // Start the typing animation for this element
        type();
    });
});


// hearts
function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.innerHTML = "❤";

    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 5000);
}
setInterval(criarCoracao, 300);

/* * handleAnswerFeedback
 * element: O botão clicado
 * nextPage: A próxima página
 * message: A mensagem que vai aparecer EMBAIXO
 */
function handleAnswerFeedback(element, nextPage, message) {
    // 1. Desabilita todos os botões para ela não clicar em outro
    const buttons = document.querySelectorAll('.quiz-option');
    buttons.forEach(btn => btn.disabled = true);

    // 2. Destaca o botão clicado (ficando preenchido)
    element.classList.remove('btn-outline-success');
    element.classList.add('btn-success');

    // 3. Coloca a mensagem na div de resposta
    const feedbackElement = document.getElementById('resposta-texto');
    feedbackElement.innerText = message;
    
    // Opcional: Adiciona uma cor ou animação ao texto
    feedbackElement.style.opacity = "1";

    // 4. Espera 2.5 segundos e muda de página
    setTimeout(() => {
        window.location.href = nextPage;
    }, 3000);
}