// Espera o HTML ser totalmente carregado antes de rodar o script
// Isso CORRIGE o bug de não funcionamento
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os itens da lista de competências
    const skillItems = document.querySelectorAll('.competencias-list li');
    const modal = document.getElementById('skill-modal');
    
    // Verifica se o modal existe na página antes de continuar
    if (modal) {
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const closeModalBtn = document.getElementById('modal-close-btn');

        skillItems.forEach(item => {
            item.addEventListener('click', () => {
                // Pega o título e a descrição do item clicado
                const title = item.innerText;
                const description = item.getAttribute('data-description');
                
                // Popula o modal
                modalTitle.innerText = title;
                modalDescription.innerText = description;
                
                // Mostra o modal
                modal.style.display = 'flex';
            });
        });

        // Função para fechar o modal
        const closeModal = () => {
            modal.style.display = 'none';
        };

        // Event Listeners para fechar
        closeModalBtn.addEventListener('click', closeModal);
        
        // Fecha o modal se clicar fora do 'modal-content' (no overlay)
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

});
