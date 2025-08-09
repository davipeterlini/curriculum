// Abordagem alternativa para exportação de PDF usando iframe e impressão direta

// Função para exportar o currículo para PDF
function exportToPDF() {
    console.log('Iniciando exportação para PDF (método alternativo)');
    
    try {
        // Mostrar indicador de carregamento
        const loadingIndicator = document.getElementById('pdf-loading');
        const exportButton = document.getElementById('export-pdf-btn');
        
        if (loadingIndicator) loadingIndicator.classList.remove('hidden');
        if (exportButton) exportButton.classList.add('hidden');
        
        // Obter o idioma atual
        const currentLanguage = document.documentElement.lang;
        
        // Criar um iframe oculto
        const iframe = document.createElement('iframe');
        iframe.style.visibility = 'hidden';
        iframe.style.position = 'absolute';
        iframe.style.left = '-9999px';
        iframe.style.height = '0';
        document.body.appendChild(iframe);
        
        // Escrever o conteúdo HTML no iframe
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(`
            <!DOCTYPE html>
            <html lang="${currentLanguage}">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${currentLanguage === 'pt-BR' ? 'Currículo - Davi Peterlini' : 'Resume - Davi Peterlini'}</title>
                <style>
                    @page {
                        size: A4;
                        margin: 20mm;
                    }
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                        margin: 0;
                        padding: 0;
                    }
                    h1, h2, h3 {
                        margin-top: 0;
                        color: #1e3a8a;
                    }
                    h1 {
                        font-size: 24px;
                        text-align: center;
                        margin-bottom: 5px;
                    }
                    h2 {
                        font-size: 18px;
                        border-bottom: 1px solid #ddd;
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
                        color: #3b82f6;
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
                        color: #3b82f6;
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
                        color: #666;
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
                
                <script>
                    // Imprimir automaticamente quando o conteúdo estiver carregado
                    window.onload = function() {
                        setTimeout(function() {
                            window.print();
                            window.parent.postMessage('print-complete', '*');
                        }, 1000);
                    };
                </script>
            </body>
            </html>
        `);
        iframeDoc.close();
        
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
        
        // Ouvir mensagem de conclusão da impressão
        window.addEventListener('message', function(event) {
            if (event.data === 'print-complete') {
                // Remover o iframe
                if (document.body.contains(iframe)) {
                    document.body.removeChild(iframe);
                }
                
                // Restaurar a interface
                if (loadingIndicator) loadingIndicator.classList.add('hidden');
                if (exportButton) exportButton.classList.remove('hidden');
                
                console.log('PDF gerado com sucesso (método iframe)');
            }
        });
        
        // Timeout de segurança para restaurar a interface caso algo dê errado
        setTimeout(function() {
            if (document.body.contains(iframe)) {
                document.body.removeChild(iframe);
            }
            
            if (loadingIndicator && loadingIndicator.classList.contains('hidden') === false) {
                loadingIndicator.classList.add('hidden');
            }
            
            if (exportButton && exportButton.classList.contains('hidden') === true) {
                exportButton.classList.remove('hidden');
            }
        }, 10000);
        
    } catch (error) {
        console.error('Erro na função exportToPDF (método alternativo):', error);
        alert('Erro ao gerar o PDF. Por favor, tente novamente.');
        
        // Restaurar a interface
        const loadingIndicator = document.getElementById('pdf-loading');
        const exportButton = document.getElementById('export-pdf-btn');
        if (loadingIndicator) loadingIndicator.classList.add('hidden');
        if (exportButton) exportButton.classList.remove('hidden');
        
        // Tentar método de fallback
        tryFallbackExport();
    }
}

// Método de fallback para exportação de PDF
function tryFallbackExport() {
    console.log('Tentando método de fallback para exportação de PDF');
    
    try {
        // Criar um link para uma versão estática do currículo
        const staticURL = 'version/index-curriculum-full.html';
        const link = document.createElement('a');
        link.href = staticURL;
        link.target = '_blank';
        link.click();
        
        alert('Não foi possível gerar o PDF automaticamente. Uma versão para impressão será aberta em uma nova aba. Use a função de impressão do navegador (Ctrl+P ou Cmd+P) para salvar como PDF.');
    } catch (error) {
        console.error('Erro no método de fallback:', error);
        alert('Não foi possível gerar o PDF. Por favor, tente novamente mais tarde.');
    }
}

// Inicializar botões de exportação
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando botões de exportação PDF (método alternativo)');
    
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