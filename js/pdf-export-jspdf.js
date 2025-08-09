// PDF Export functionality using print-friendly approach

// Função para exportar o currículo para PDF
function exportToPDF() {
    console.log('Iniciando exportação para PDF');
    
    try {
        // Mostrar indicador de carregamento
        const loadingIndicator = document.getElementById('pdf-loading');
        const exportButton = document.getElementById('export-pdf-btn');
        
        if (loadingIndicator) loadingIndicator.classList.remove('hidden');
        if (exportButton) exportButton.classList.add('hidden');
        
        // Obter o idioma atual e tema
        const currentLanguage = document.documentElement.lang;
        const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        
        // Criar uma nova janela para o conteúdo de impressão
        const printWindow = window.open('', '_blank', 'width=800,height=600');
        
        if (!printWindow) {
            alert('Por favor, permita pop-ups para este site para gerar o PDF.');
            if (loadingIndicator) loadingIndicator.classList.add('hidden');
            if (exportButton) exportButton.classList.remove('hidden');
            return;
        }
        
        // Escrever o conteúdo HTML na nova janela
        printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="${currentLanguage}" ${currentTheme === 'dark' ? 'class="dark"' : ''}>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${currentLanguage === 'pt-BR' ? 'Currículo - Davi Peterlini' : 'Resume - Davi Peterlini'}</title>
                <style>
                    /* Base styles */
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        max-width: 210mm;
                        margin: 0 auto;
                        padding: 20mm;
                    }
                    h1, h2, h3 {
                        margin-top: 0;
                    }
                    h1 {
                        font-size: 24px;
                        text-align: center;
                        margin-bottom: 5px;
                    }
                    h2 {
                        font-size: 18px;
                        padding-bottom: 5px;
                        margin-top: 20px;
                    }
                    h3 {
                        font-size: 16px;
                        margin-bottom: 5px;
                    }
                    .header {
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    .role {
                        font-size: 16px;
                        margin-bottom: 5px;
                    }
                    .contact {
                        font-size: 14px;
                        margin-bottom: 20px;
                    }
                    .section {
                        margin-bottom: 20px;
                    }
                    .job {
                        margin-bottom: 15px;
                    }
                    .job-title {
                        font-weight: bold;
                        margin-bottom: 0;
                    }
                    .job-company {
                        font-weight: bold;
                        margin-bottom: 0;
                    }
                    .job-date {
                        font-style: italic;
                        margin-bottom: 5px;
                    }
                    ul {
                        margin-top: 5px;
                    }
                    .skills-category {
                        margin-bottom: 10px;
                    }
                    .skills-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 5px;
                    }
                    .footer {
                        text-align: center;
                        font-size: 12px;
                        font-style: italic;
                        margin-top: 30px;
                    }
                    
                    /* Light theme (default) */
                    body {
                        color: #333;
                        background-color: #ffffff;
                    }
                    h1, h2, h3 {
                        color: #1e3a8a;
                    }
                    h2 {
                        border-bottom: 1px solid #ddd;
                    }
                    .role, .job-company {
                        color: #3b82f6;
                    }
                    .footer {
                        color: #666;
                    }
                    
                    /* Dark theme */
                    html.dark body {
                        color: #e5e7eb;
                        background-color: #1f2937;
                    }
                    html.dark h1, html.dark h2, html.dark h3 {
                        color: #f3f4f6;
                    }
                    html.dark h2 {
                        border-bottom: 1px solid #4b5563;
                    }
                    html.dark .role, html.dark .job-company {
                        color: #60a5fa;
                    }
                    html.dark .footer {
                        color: #9ca3af;
                    }
                    
                    @media print {
                        body {
                            padding: 0;
                            font-size: 12px;
                            background-color: #ffffff !important;
                            color: #333 !important;
                        }
                        h1, h2, h3 {
                            color: #1e3a8a !important;
                        }
                        h1 {
                            font-size: 18px;
                        }
                        h2 {
                            font-size: 16px;
                            border-bottom: 1px solid #ddd !important;
                        }
                        h3 {
                            font-size: 14px;
                        }
                        .role, .job-company {
                            color: #3b82f6 !important;
                        }
                        .footer {
                            color: #666 !important;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>Davi Peterlini</h1>
                    <p class="role">${document.querySelector('[data-i18n="role"]').textContent}</p>
                    <p class="contact">davipeterlini@gmail.com | linkedin.com/in/davi-peterlini-7aa0b737</p>
                </div>
                
                <div class="section">
                    <h2>${document.querySelector('[data-i18n="overview_title"]').textContent}</h2>
                    <p>${document.querySelector('[data-i18n="professional_summary_text"]').textContent}</p>
                    
                    <h3>${document.querySelector('[data-i18n="ai_focus"]').textContent}</h3>
                    <p>${document.querySelector('[data-i18n="ai_focus_text"]').textContent}</p>
                    
                    <h3>${document.querySelector('[data-i18n="leadership"]').textContent}</h3>
                    <p>${document.querySelector('[data-i18n="leadership_text"]').textContent}</p>
                </div>
                
                <div class="section">
                    <h2>${document.querySelector('[data-i18n="timeline_title"]').textContent}</h2>
                    ${generateTimelineHTML(currentLanguage)}
                </div>
                
                <div class="section">
                    <h2>${document.querySelector('[data-i18n="skills_title"]').textContent}</h2>
                    ${generateSkillsHTML(currentLanguage)}
                </div>
                
                <div class="section">
                    <h2>${document.querySelector('[data-i18n="education_title"]').textContent}</h2>
                    
                    <h3>${document.querySelector('[data-i18n="bachelor"]').textContent}</h3>
                    <p>${document.querySelector('[data-i18n="university"]').textContent}</p>
                    
                    <h3>${document.querySelector('[data-i18n="masters"]').textContent}</h3>
                    <p>${document.querySelector('[data-i18n="masters_details"]').textContent}</p>
                    
                    <h3>${document.querySelector('[data-i18n="highlights"]').textContent}</h3>
                    <ul>
                        <li>${document.querySelector('[data-i18n="highlight1"]').textContent}</li>
                        <li>${document.querySelector('[data-i18n="highlight2"]').textContent}</li>
                    </ul>
                </div>
                
                <div class="footer">
                    ${document.querySelector('[data-i18n="footer_year"]').textContent}
                </div>
            </body>
            </html>
        `);
        
        // Fechar o documento para finalizar a escrita
        printWindow.document.close();
        
        // Aguardar o carregamento completo da página
        printWindow.onload = function() {
            setTimeout(function() {
                try {
                    // Imprimir a página como PDF
                    printWindow.print();
                    
                    // Restaurar a interface após um tempo
                    setTimeout(function() {
                        if (loadingIndicator) loadingIndicator.classList.add('hidden');
                        if (exportButton) exportButton.classList.remove('hidden');
                    }, 1000);
                    
                    console.log('PDF gerado com sucesso');
                } catch (error) {
                    console.error('Erro ao imprimir:', error);
                    alert('Erro ao gerar o PDF. Por favor, tente novamente.');
                    
                    if (loadingIndicator) loadingIndicator.classList.add('hidden');
                    if (exportButton) exportButton.classList.remove('hidden');
                }
            }, 1000);
        };
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

// Função para gerar o HTML da timeline
function generateTimelineHTML(lang) {
    let html = '';
    
    timelineData[lang].forEach(item => {
        html += `
            <div class="job">
                <h3 class="job-title">${item.role}</h3>
                <p class="job-company">${item.company}</p>
                <p class="job-date">${item.dates}</p>
                <ul>
                    ${item.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        `;
    });
    
    return html;
}

// Função para gerar o HTML das habilidades
function generateSkillsHTML(lang) {
    let html = '';
    
    const skillsCategories = skillsData[lang];
    
    Object.keys(skillsCategories).forEach(category => {
        html += `
            <div class="skills-category">
                <h3>${category}</h3>
                <div class="skills-grid">
        `;
        
        const skills = skillsCategories[category];
        Object.entries(skills).forEach(([skill, level]) => {
            html += `<div>${skill}: ${level}/10</div>`;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    return html;
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