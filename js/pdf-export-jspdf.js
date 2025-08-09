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
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
                <style>
                    /* Base styles */
                    :root {
                        --bg-color: #f8fafc;
                        --text-color: #334155;
                        --heading-color: #1e3a8a;
                        --accent-color: #3b82f6;
                        --card-bg: #ffffff;
                        --card-border: rgba(226, 232, 240, 0.8);
                        --section-spacing: 2rem;
                        --border-color: #ddd;
                        --footer-color: #666;
                    }
                    
                    /* Dark theme */
                    html.dark {
                        --bg-color: #0f172a;
                        --text-color: #e2e8f0;
                        --heading-color: #f3f4f6;
                        --accent-color: #60a5fa;
                        --card-bg: #1e293b;
                        --card-border: rgba(51, 65, 85, 0.8);
                        --border-color: #4b5563;
                        --footer-color: #9ca3af;
                    }
                    
                    body {
                        font-family: 'Inter', sans-serif;
                        line-height: 1.6;
                        color: var(--text-color);
                        background-color: var(--bg-color);
                        max-width: 210mm;
                        margin: 0 auto;
                        padding: 20mm;
                    }
                    
                    h1, h2, h3 {
                        margin-top: 0;
                        color: var(--heading-color);
                    }
                    
                    h1 {
                        font-size: 24px;
                        text-align: center;
                        margin-bottom: 5px;
                    }
                    
                    h2 {
                        font-size: 20px;
                        padding-bottom: 8px;
                        margin-top: 20px;
                        border-bottom: 1px solid var(--border-color);
                        text-align: center;
                    }
                    
                    h3 {
                        font-size: 16px;
                        margin-bottom: 5px;
                        color: var(--accent-color);
                    }
                    
                    .header {
                        text-align: center;
                        margin-bottom: var(--section-spacing);
                    }
                    
                    .profile-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: var(--section-spacing);
                    }
                    
                    .profile-photo {
                        width: 120px;
                        height: 120px;
                        border-radius: 50%;
                        object-fit: cover;
                        border: 3px solid var(--accent-color);
                        margin-bottom: 1rem;
                    }
                    
                    .role {
                        color: var(--accent-color);
                        font-size: 16px;
                        margin-bottom: 5px;
                    }
                    
                    .contact {
                        font-size: 14px;
                        margin-bottom: 20px;
                    }
                    
                    .section {
                        margin-bottom: var(--section-spacing);
                    }
                    
                    .grid-container {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 15px;
                        margin-bottom: var(--section-spacing);
                    }
                    
                    .grid-container.education {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    
                    .grid-item {
                        background-color: var(--card-bg);
                        border: 1px solid var(--card-border);
                        border-radius: 8px;
                        padding: 15px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                    }
                    
                    .grid-item.full-width {
                        grid-column: span 2;
                    }
                    
                    .job {
                        margin-bottom: 15px;
                        position: relative;
                        padding-left: 15px;
                        border-left: 2px solid var(--accent-color);
                    }
                    
                    .job:before {
                        content: '';
                        position: absolute;
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        background-color: var(--accent-color);
                        left: -6px;
                        top: 5px;
                    }
                    
                    .job-title {
                        font-weight: bold;
                        margin-bottom: 0;
                    }
                    
                    .job-company {
                        color: var(--accent-color);
                        font-weight: bold;
                        margin-bottom: 0;
                    }
                    
                    .job-date {
                        font-style: italic;
                        margin-bottom: 5px;
                        font-size: 0.9em;
                    }
                    
                    ul {
                        margin-top: 5px;
                        padding-left: 20px;
                    }
                    
                    li {
                        margin-bottom: 3px;
                    }
                    
                    .skills-category {
                        margin-bottom: 15px;
                    }
                    
                    .skills-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 8px;
                    }
                    
                    .skill-item {
                        display: flex;
                        justify-content: space-between;
                        padding: 3px 0;
                    }
                    
                    .footer {
                        text-align: center;
                        font-size: 12px;
                        font-style: italic;
                        margin-top: 30px;
                        color: var(--footer-color);
                        border-top: 1px solid var(--border-color);
                        padding-top: 15px;
                    }
                    
                    @media print {
                        body {
                            padding: 0;
                            font-size: 11px;
                            background-color: white !important;
                            color: black !important;
                        }
                        
                        h1 {
                            font-size: 18px;
                        }
                        
                        h2 {
                            font-size: 16px;
                        }
                        
                        h3 {
                            font-size: 14px;
                        }
                        
                        .grid-container {
                            page-break-inside: avoid;
                        }
                        
                        .job {
                            page-break-inside: avoid;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="profile-container">
                    <img src="assets/profile-photo.png" alt="Davi Peterlini" class="profile-photo">
                    <div class="header">
                        <h1>Davi Peterlini</h1>
                        <p class="role">${document.querySelector('[data-i18n="role"]').textContent}</p>
                        <p class="contact">davipeterlini@gmail.com | linkedin.com/in/davi-peterlini-7aa0b737</p>
                    </div>
                </div>
                
                <div class="section">
                    <h2>${document.querySelector('[data-i18n="overview_title"]').textContent}</h2>
                    
                    <div class="grid-container">
                        <div class="grid-item">
                            <h3>${document.querySelector('[data-i18n="professional_summary"]').textContent}</h3>
                            <p>${document.querySelector('[data-i18n="professional_summary_text"]').textContent}</p>
                        </div>
                        
                        <div class="grid-item">
                            <h3>${document.querySelector('[data-i18n="ai_focus"]').textContent}</h3>
                            <p>${document.querySelector('[data-i18n="ai_focus_text"]').textContent}</p>
                        </div>
                        
                        <div class="grid-item">
                            <h3>${document.querySelector('[data-i18n="leadership"]').textContent}</h3>
                            <p>${document.querySelector('[data-i18n="leadership_text"]').textContent}</p>
                        </div>
                    </div>
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
                    
                    <div class="grid-container education">
                        <div class="grid-item">
                            <h3>${document.querySelector('[data-i18n="bachelor"]').textContent}</h3>
                            <p>${document.querySelector('[data-i18n="university"]').textContent}</p>
                        </div>
                        
                        <div class="grid-item">
                            <h3>${document.querySelector('[data-i18n="masters"]').textContent}</h3>
                            <p>${document.querySelector('[data-i18n="masters_details"]').textContent}</p>
                        </div>
                        
                        <div class="grid-item full-width">
                            <h3>${document.querySelector('[data-i18n="highlights"]').textContent}</h3>
                            <ul>
                                <li>${document.querySelector('[data-i18n="highlight1"]').textContent}</li>
                                <li>${document.querySelector('[data-i18n="highlight2"]').textContent}</li>
                            </ul>
                        </div>
                    </div>
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
            html += `<div class="skill-item"><span>${skill}:</span> <span>${level}/10</span></div>`;
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