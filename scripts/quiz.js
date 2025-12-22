function handleInPageAnswer(element, nextStepId) {
    const currentContainer = element.closest('.quiz-block');
    const buttons = currentContainer.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    element.classList.remove('btn-outline-danger', 'btn-outline-success');
    element.classList.add('btn-success');
    
    setTimeout(() => {
        const nextDiv = document.getElementById(nextStepId);
        if (nextDiv) {
            nextDiv.classList.remove('hidden');
            nextDiv.classList.add('visible');
            
            nextDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 1000);
}

function handleWrongAnswer(element, message = "Errou! 😝") {
    const originalText = element.innerText;
    
    // 1. Pinta de vermelho e muda o texto
    element.classList.remove('btn-outline-danger', 'btn-outline-success');
    element.classList.add('btn-danger');
    element.innerText = message;
    
    // 2. Volta ao normal depois de 1.5s
    setTimeout(() => {
        element.classList.remove('btn-danger');
        element.classList.add('btn-outline-danger');
        element.innerText = originalText;
    }, 1500);
}