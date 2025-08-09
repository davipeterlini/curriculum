// PDF Export functionality with improved error handling

// Função para exportar o currículo para PDF
function exportToPDF() {
    console.log('Iniciando exportação para PDF');
    
    // Verificar se a biblioteca html2pdf está disponível
    if (typeof html2pdf === 'undefined') {
        console.error('Biblioteca html2pdf não carregada');
        alert('Erro: Biblioteca de exportação PDF não carregada. Por favor, recarregue a página.');
        return;
    }
    
    try {
        // Mostrar indicador de carregamento
        const loadingIndicator = document.getElementById('pdf-loading');
        const exportButton = document.getElementById('export-pdf-btn');
        
        if (loadingIndicator) loadingIndicator.classList.remove('hidden');
        if (exportButton) exportButton.classList.add('hidden');
        
        // Obter o idioma atual para definir o nome do arquivo
        const currentLanguage = document.documentElement.lang;
        const fileName = currentLanguage === 'pt-BR' ? 'Curriculo_Davi_Peterlini.pdf' : 'Resume_Davi_Peterlini.pdf';
        
        // Criar um container temporário para o conteúdo do PDF
        const pdfContainer = document.createElement('div');
        pdfContainer.className = 'pdf-container';
        pdfContainer.style.width = '210mm'; // Tamanho A4
        pdfContainer.style.padding = '15mm';
        pdfContainer.style.backgroundColor = 'white';
        pdfContainer.style.color = 'black';
        
        // Clonar o conteúdo principal
        const mainContent = document.querySelector('main').cloneNode(true);
        
        // Adicionar cabeçalho
        const header = document.createElement('div');
        header.style.marginBottom = '20px';
        header.style.textAlign = 'center';
        
        const name = document.createElement('h1');
        name.textContent = 'Davi Peterlini';
        name.style.fontSize = '24px';
        name.style.fontWeight = 'bold';
        name.style.marginBottom = '5px';
        
        const role = document.createElement('p');
        role.textContent = document.querySelector('[data-i18n="role"]').textContent;
        role.style.fontSize = '16px';
        role.style.color = '#3b82f6';
        role.style.marginBottom = '10px';
        
        const contact = document.createElement('p');
        contact.textContent = 'davipeterlini@gmail.com | linkedin.com/in/davi-peterlini-7aa0b737';
        contact.style.fontSize = '14px';
        
        header.appendChild(name);
        header.appendChild(role);
        header.appendChild(contact);
        
        // Adicionar o cabeçalho e o conteúdo principal ao container
        pdfContainer.appendChild(header);
        pdfContainer.appendChild(mainContent);
        
        // Expandir todos os detalhes para o PDF
        const detailsContents = pdfContainer.querySelectorAll('.details-content');
        detailsContents.forEach(detail => {
            detail.classList.add('open');
            detail.style.maxHeight = 'none';
            detail.style.opacity = '1';
        });
        
        // Remover elementos interativos e desnecessários
        const elementsToRemove = pdfContainer.querySelectorAll('#skills-filters button, canvas');
        elementsToRemove.forEach(el => {
            if (el && el.parentNode) el.parentNode.removeChild(el);
        });
        
        // Adicionar o container ao documento temporariamente
        document.body.appendChild(pdfContainer);
        pdfContainer.style.position = 'absolute';
        pdfContainer.style.left = '-9999px';
        
        // Configurar opções do html2pdf
        const opt = {
            margin: 10,
            filename: fileName,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2,
                useCORS: true,
                logging: true,
                allowTaint: true,
                letterRendering: true
            },
            jsPDF: { 
                unit: 'mm', 
                format: 'a4', 
                orientation: 'portrait',
                compress: true
            }
        };
        
        // Gerar PDF com tratamento de erros aprimorado
        html2pdf().from(pdfContainer).set(opt).save()
            .then(() => {
                console.log('PDF gerado com sucesso');
                // Remover o container temporário
                document.body.removeChild(pdfContainer);
                // Restaurar a interface
                if (loadingIndicator) loadingIndicator.classList.add('hidden');
                if (exportButton) exportButton.classList.remove('hidden');
            })
            .catch(error => {
                console.error('Erro ao gerar PDF:', error);
                alert('Erro ao gerar o PDF. Por favor, tente novamente.');
                // Remover o container temporário
                if (document.body.contains(pdfContainer)) {
                    document.body.removeChild(pdfContainer);
                }
                // Restaurar a interface
                if (loadingIndicator) loadingIndicator.classList.add('hidden');
                if (exportButton) exportButton.classList.remove('hidden');
                
                // Tentar método alternativo se o primeiro falhar
                tryAlternativeExport();
            });
    } catch (error) {
        console.error('Erro na função exportToPDF:', error);
        alert('Erro ao gerar o PDF. Por favor, tente novamente.');
        
        // Restaurar a interface
        const loadingIndicator = document.getElementById('pdf-loading');
        const exportButton = document.getElementById('export-pdf-btn');
        if (loadingIndicator) loadingIndicator.classList.add('hidden');
        if (exportButton) exportButton.classList.remove('hidden');
        
        // Tentar método alternativo
        tryAlternativeExport();
    }
}

// Método alternativo de exportação para PDF (mais simples)
function tryAlternativeExport() {
    console.log('Tentando método alternativo de exportação');
    
    try {
        // Mostrar indicador de carregamento
        const loadingIndicator = document.getElementById('pdf-loading');
        const exportButton = document.getElementById('export-pdf-btn');
        
        if (loadingIndicator) loadingIndicator.classList.remove('hidden');
        if (exportButton) exportButton.classList.add('hidden');
        
        // Obter o idioma atual para definir o nome do arquivo
        const currentLanguage = document.documentElement.lang;
        const fileName = currentLanguage === 'pt-BR' ? 'Curriculo_Davi_Peterlini.pdf' : 'Resume_Davi_Peterlini.pdf';
        
        // Criar um elemento simples com apenas texto
        const simpleContent = document.createElement('div');
        simpleContent.style.padding = '20px';
        simpleContent.style.fontFamily = 'Arial, sans-serif';
        
        // Adicionar informações básicas
        simpleContent.innerHTML = `
            <h1 style="font-size: 24px; margin-bottom: 10px;">Davi Peterlini</h1>
            <p style="font-size: 16px; color: #3b82f6; margin-bottom: 20px;">${document.querySelector('[data-i18n="role"]').textContent}</p>
            <p style="margin-bottom: 20px;">Email: davipeterlini@gmail.com | LinkedIn: linkedin.com/in/davi-peterlini-7aa0b737</p>
            
            <h2 style="font-size: 20px; margin-top: 30px; margin-bottom: 10px;">${document.querySelector('[data-i18n="overview_title"]').textContent}</h2>
            <p style="margin-bottom: 20px;">${document.querySelector('[data-i18n="professional_summary_text"]').textContent}</p>
            
            <h2 style="font-size: 20px; margin-top: 30px; margin-bottom: 10px;">${document.querySelector('[data-i18n="timeline_title"]').textContent}</h2>
        `;
        
        // Adicionar experiência profissional
        const timelineItems = document.querySelectorAll('#timeline-container .timeline-item');
        timelineItems.forEach(item => {
            const role = item.querySelector('h3').textContent;
            const company = item.querySelector('p:nth-child(1)').textContent;
            const dates = item.querySelector('p:nth-child(2)').textContent;
            
            simpleContent.innerHTML += `
                <div style="margin-bottom: 15px;">
                    <h3 style="font-size: 18px; margin-bottom: 5px;">${role}</h3>
                    <p style="font-weight: bold; color: #3b82f6; margin-bottom: 3px;">${company}</p>
                    <p style="font-style: italic; margin-bottom: 10px;">${dates}</p>
                </div>
            `;
        });
        
        // Adicionar educação
        simpleContent.innerHTML += `
            <h2 style="font-size: 20px; margin-top: 30px; margin-bottom: 10px;">${document.querySelector('[data-i18n="education_title"]').textContent}</h2>
            <p style="font-weight: bold; margin-bottom: 5px;">${document.querySelector('[data-i18n="bachelor"]').textContent}</p>
            <p style="margin-bottom: 15px;">${document.querySelector('[data-i18n="university"]').textContent}</p>
        `;
        
        // Adicionar o elemento ao documento temporariamente
        document.body.appendChild(simpleContent);
        simpleContent.style.position = 'absolute';
        simpleContent.style.left = '-9999px';
        
        // Configurar opções simplificadas
        const opt = {
            margin: 15,
            filename: fileName,
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        // Gerar PDF simplificado
        html2pdf().from(simpleContent).set(opt).save()
            .then(() => {
                console.log('PDF alternativo gerado com sucesso');
                // Remover o elemento temporário
                document.body.removeChild(simpleContent);
                // Restaurar a interface
                if (loadingIndicator) loadingIndicator.classList.add('hidden');
                if (exportButton) exportButton.classList.remove('hidden');
            })
            .catch(error => {
                console.error('Erro ao gerar PDF alternativo:', error);
                alert('Não foi possível gerar o PDF. Por favor, tente em outro navegador.');
                // Remover o elemento temporário
                if (document.body.contains(simpleContent)) {
                    document.body.removeChild(simpleContent);
                }
                // Restaurar a interface
                if (loadingIndicator) loadingIndicator.classList.add('hidden');
                if (exportButton) exportButton.classList.remove('hidden');
            });
    } catch (error) {
        console.error('Erro no método alternativo de exportação:', error);
        alert('Não foi possível gerar o PDF. Por favor, tente em outro navegador.');
        
        // Restaurar a interface
        const loadingIndicator = document.getElementById('pdf-loading');
        const exportButton = document.getElementById('export-pdf-btn');
        if (loadingIndicator) loadingIndicator.classList.add('hidden');
        if (exportButton) exportButton.classList.remove('hidden');
    }
}

// Inicializar botões de exportação
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando botões de exportação PDF');
    
    // Adicionar event listeners aos botões
    const exportButton = document.getElementById('export-pdf-btn');
    const mobileExportButton = document.getElementById('export-pdf-btn-mobile');
    
    if (exportButton) {
        exportButton.addEventListener('click', function() {
            console.log('Botão de exportação clicado');
            exportToPDF();
        });
    }
    
    if (mobileExportButton) {
        mobileExportButton.addEventListener('click', function() {
            console.log('Botão de exportação mobile clicado');
            exportToPDF();
        });
    }
});