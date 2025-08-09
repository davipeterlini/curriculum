// PDF Export functionality with improved error handling and rendering

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
        
        // Criar um elemento para o conteúdo do PDF
        const pdfContent = document.createElement('div');
        pdfContent.id = 'pdf-content';
        pdfContent.style.width = '210mm'; // Tamanho A4
        pdfContent.style.backgroundColor = 'white';
        pdfContent.style.color = 'black';
        pdfContent.style.padding = '20mm';
        pdfContent.style.fontFamily = 'Arial, sans-serif';
        
        // Adicionar cabeçalho
        const header = document.createElement('div');
        header.style.textAlign = 'center';
        header.style.marginBottom = '20px';
        
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
        pdfContent.appendChild(header);
        
        // Adicionar seção de visão geral
        const overviewSection = document.createElement('div');
        overviewSection.style.marginBottom = '30px';
        
        const overviewTitle = document.createElement('h2');
        overviewTitle.textContent = document.querySelector('[data-i18n="overview_title"]').textContent;
        overviewTitle.style.fontSize = '20px';
        overviewTitle.style.fontWeight = 'bold';
        overviewTitle.style.marginBottom = '10px';
        overviewTitle.style.color = '#1e3a8a';
        
        const overviewText = document.createElement('p');
        overviewText.textContent = document.querySelector('[data-i18n="professional_summary_text"]').textContent;
        overviewText.style.marginBottom = '15px';
        
        overviewSection.appendChild(overviewTitle);
        overviewSection.appendChild(overviewText);
        pdfContent.appendChild(overviewSection);
        
        // Adicionar seção de carreira
        const careerSection = document.createElement('div');
        careerSection.style.marginBottom = '30px';
        
        const careerTitle = document.createElement('h2');
        careerTitle.textContent = document.querySelector('[data-i18n="timeline_title"]').textContent;
        careerTitle.style.fontSize = '20px';
        careerTitle.style.fontWeight = 'bold';
        careerTitle.style.marginBottom = '15px';
        careerTitle.style.color = '#1e3a8a';
        
        careerSection.appendChild(careerTitle);
        
        // Obter dados da timeline no idioma atual
        const currentLanguage = document.documentElement.lang;
        const timelineItems = timelineData[currentLanguage];
        
        // Adicionar cada item da timeline
        timelineItems.forEach(item => {
            const jobItem = document.createElement('div');
            jobItem.style.marginBottom = '20px';
            
            const jobTitle = document.createElement('h3');
            jobTitle.textContent = item.role;
            jobTitle.style.fontSize = '18px';
            jobTitle.style.fontWeight = 'bold';
            jobTitle.style.marginBottom = '5px';
            
            const jobCompany = document.createElement('p');
            jobCompany.textContent = item.company;
            jobCompany.style.fontWeight = 'bold';
            jobCompany.style.color = '#3b82f6';
            jobCompany.style.marginBottom = '3px';
            
            const jobDates = document.createElement('p');
            jobDates.textContent = item.dates;
            jobDates.style.fontStyle = 'italic';
            jobDates.style.marginBottom = '10px';
            
            const jobDetails = document.createElement('ul');
            jobDetails.style.paddingLeft = '20px';
            
            item.details.forEach(detail => {
                const detailItem = document.createElement('li');
                detailItem.textContent = detail;
                detailItem.style.marginBottom = '5px';
                jobDetails.appendChild(detailItem);
            });
            
            jobItem.appendChild(jobTitle);
            jobItem.appendChild(jobCompany);
            jobItem.appendChild(jobDates);
            jobItem.appendChild(jobDetails);
            
            careerSection.appendChild(jobItem);
        });
        
        pdfContent.appendChild(careerSection);
        
        // Adicionar seção de competências
        const skillsSection = document.createElement('div');
        skillsSection.style.marginBottom = '30px';
        
        const skillsTitle = document.createElement('h2');
        skillsTitle.textContent = document.querySelector('[data-i18n="skills_title"]').textContent;
        skillsTitle.style.fontSize = '20px';
        skillsTitle.style.fontWeight = 'bold';
        skillsTitle.style.marginBottom = '15px';
        skillsTitle.style.color = '#1e3a8a';
        
        skillsSection.appendChild(skillsTitle);
        
        // Obter dados de habilidades no idioma atual
        const skillsData = window.skillsData[currentLanguage];
        
        // Adicionar cada categoria de habilidades
        Object.keys(skillsData).forEach(category => {
            const categoryTitle = document.createElement('h3');
            categoryTitle.textContent = category;
            categoryTitle.style.fontSize = '16px';
            categoryTitle.style.fontWeight = 'bold';
            categoryTitle.style.marginTop = '10px';
            categoryTitle.style.marginBottom = '5px';
            
            const skillsList = document.createElement('ul');
            skillsList.style.columns = '2';
            skillsList.style.paddingLeft = '20px';
            
            Object.entries(skillsData[category]).forEach(([skill, level]) => {
                const skillItem = document.createElement('li');
                skillItem.textContent = `${skill}: ${level}/10`;
                skillItem.style.marginBottom = '3px';
                skillsList.appendChild(skillItem);
            });
            
            skillsSection.appendChild(categoryTitle);
            skillsSection.appendChild(skillsList);
        });
        
        pdfContent.appendChild(skillsSection);
        
        // Adicionar seção de educação
        const educationSection = document.createElement('div');
        
        const educationTitle = document.createElement('h2');
        educationTitle.textContent = document.querySelector('[data-i18n="education_title"]').textContent;
        educationTitle.style.fontSize = '20px';
        educationTitle.style.fontWeight = 'bold';
        educationTitle.style.marginBottom = '15px';
        educationTitle.style.color = '#1e3a8a';
        
        const bachelorTitle = document.createElement('h3');
        bachelorTitle.textContent = document.querySelector('[data-i18n="bachelor"]').textContent;
        bachelorTitle.style.fontSize = '16px';
        bachelorTitle.style.fontWeight = 'bold';
        bachelorTitle.style.marginBottom = '5px';
        
        const university = document.createElement('p');
        university.textContent = document.querySelector('[data-i18n="university"]').textContent;
        university.style.marginBottom = '15px';
        
        const mastersTitle = document.createElement('h3');
        mastersTitle.textContent = document.querySelector('[data-i18n="masters"]').textContent;
        mastersTitle.style.fontSize = '16px';
        mastersTitle.style.fontWeight = 'bold';
        mastersTitle.style.marginBottom = '5px';
        
        const mastersDetails = document.createElement('p');
        mastersDetails.textContent = document.querySelector('[data-i18n="masters_details"]').textContent;
        mastersDetails.style.marginBottom = '15px';
        
        const highlightsTitle = document.createElement('h3');
        highlightsTitle.textContent = document.querySelector('[data-i18n="highlights"]').textContent;
        highlightsTitle.style.fontSize = '16px';
        highlightsTitle.style.fontWeight = 'bold';
        highlightsTitle.style.marginBottom = '5px';
        
        const highlightsList = document.createElement('ul');
        highlightsList.style.paddingLeft = '20px';
        
        const highlight1 = document.createElement('li');
        highlight1.textContent = document.querySelector('[data-i18n="highlight1"]').textContent;
        highlight1.style.marginBottom = '5px';
        
        const highlight2 = document.createElement('li');
        highlight2.textContent = document.querySelector('[data-i18n="highlight2"]').textContent;
        highlight2.style.marginBottom = '5px';
        
        highlightsList.appendChild(highlight1);
        highlightsList.appendChild(highlight2);
        
        educationSection.appendChild(educationTitle);
        educationSection.appendChild(bachelorTitle);
        educationSection.appendChild(university);
        educationSection.appendChild(mastersTitle);
        educationSection.appendChild(mastersDetails);
        educationSection.appendChild(highlightsTitle);
        educationSection.appendChild(highlightsList);
        
        pdfContent.appendChild(educationSection);
        
        // Adicionar o container ao documento temporariamente
        document.body.appendChild(pdfContent);
        pdfContent.style.position = 'absolute';
        pdfContent.style.left = '-9999px';
        
        // Configurar opções do html2pdf
        const opt = {
            margin: 10,
            filename: fileName,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2,
                useCORS: true,
                logging: false,
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
        html2pdf().from(pdfContent).set(opt).save()
            .then(() => {
                console.log('PDF gerado com sucesso');
                // Remover o container temporário
                if (document.body.contains(pdfContent)) {
                    document.body.removeChild(pdfContent);
                }
                // Restaurar a interface
                if (loadingIndicator) loadingIndicator.classList.add('hidden');
                if (exportButton) exportButton.classList.remove('hidden');
            })
            .catch(error => {
                console.error('Erro ao gerar PDF:', error);
                alert('Erro ao gerar o PDF. Por favor, tente novamente.');
                // Remover o container temporário
                if (document.body.contains(pdfContent)) {
                    document.body.removeChild(pdfContent);
                }
                // Restaurar a interface
                if (loadingIndicator) loadingIndicator.classList.add('hidden');
                if (exportButton) exportButton.classList.remove('hidden');
            });
    } catch (error) {
        console.error('Erro na função exportToPDF:', error);
        alert('Erro ao gerar o PDF. Por favor, tente novamente.');
        
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