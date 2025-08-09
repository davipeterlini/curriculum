// PDF Export functionality using jsPDF directly

// Função para exportar o currículo para PDF
function exportToPDF() {
    console.log('Iniciando exportação para PDF');
    
    try {
        // Mostrar indicador de carregamento
        const loadingIndicator = document.getElementById('pdf-loading');
        const exportButton = document.getElementById('export-pdf-btn');
        
        if (loadingIndicator) loadingIndicator.classList.remove('hidden');
        if (exportButton) exportButton.classList.add('hidden');
        
        // Obter o idioma atual para definir o nome do arquivo
        const currentLanguage = document.documentElement.lang;
        const fileName = currentLanguage === 'pt-BR' ? 'Curriculo_Davi_Peterlini.pdf' : 'Resume_Davi_Peterlini.pdf';
        
        // Extrair jsPDF da biblioteca html2pdf
        const { jsPDF } = window.html2pdf.jsPDF;
        
        // Criar um novo documento PDF
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });
        
        // Definir margens e posição inicial
        const margin = 20;
        let y = margin;
        
        // Adicionar cabeçalho
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text('Davi Peterlini', doc.internal.pageSize.width / 2, y, { align: 'center' });
        
        y += 8;
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(59, 130, 246); // Azul
        doc.text(document.querySelector('[data-i18n="role"]').textContent, doc.internal.pageSize.width / 2, y, { align: 'center' });
        
        y += 6;
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0); // Preto
        doc.text('davipeterlini@gmail.com | linkedin.com/in/davi-peterlini-7aa0b737', doc.internal.pageSize.width / 2, y, { align: 'center' });
        
        y += 15;
        
        // Adicionar seção de visão geral
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text(document.querySelector('[data-i18n="overview_title"]').textContent, margin, y);
        
        y += 8;
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        
        const overviewText = document.querySelector('[data-i18n="professional_summary_text"]').textContent;
        const overviewLines = doc.splitTextToSize(overviewText, doc.internal.pageSize.width - 2 * margin);
        doc.text(overviewLines, margin, y);
        
        y += overviewLines.length * 6 + 10;
        
        // Adicionar seção de carreira
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text(document.querySelector('[data-i18n="timeline_title"]').textContent, margin, y);
        
        y += 8;
        
        // Obter itens da timeline
        const timelineContainer = document.getElementById('timeline-container');
        const timelineItems = timelineContainer.querySelectorAll('.timeline-item');
        
        timelineItems.forEach((item, index) => {
            if (y > doc.internal.pageSize.height - 30) {
                doc.addPage();
                y = margin;
            }
            
            const role = item.querySelector('h3').textContent;
            const company = item.querySelector('p:nth-child(2)').textContent;
            const dates = item.querySelector('p:nth-child(3)').textContent;
            
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text(role, margin, y);
            
            y += 6;
            doc.setFontSize(11);
            doc.setTextColor(59, 130, 246); // Azul
            doc.text(company, margin, y);
            
            y += 5;
            doc.setFontSize(10);
            doc.setFont('helvetica', 'italic');
            doc.setTextColor(0, 0, 0); // Preto
            doc.text(dates, margin, y);
            
            y += 8;
            
            // Adicionar detalhes se disponíveis
            const details = item.querySelector('.details-content');
            if (details) {
                const detailItems = details.querySelectorAll('li');
                doc.setFontSize(10);
                doc.setFont('helvetica', 'normal');
                
                detailItems.forEach((detailItem, i) => {
                    if (y > doc.internal.pageSize.height - 30) {
                        doc.addPage();
                        y = margin;
                    }
                    
                    const detailText = '• ' + detailItem.textContent;
                    const detailLines = doc.splitTextToSize(detailText, doc.internal.pageSize.width - 2 * margin - 5);
                    doc.text(detailLines, margin + 5, y);
                    y += detailLines.length * 5 + 3;
                });
            }
            
            y += 5;
        });
        
        // Adicionar seção de educação
        if (y > doc.internal.pageSize.height - 60) {
            doc.addPage();
            y = margin;
        } else {
            y += 10;
        }
        
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text(document.querySelector('[data-i18n="education_title"]').textContent, margin, y);
        
        y += 8;
        
        // Bacharelado
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(document.querySelector('[data-i18n="bachelor"]').textContent, margin, y);
        
        y += 6;
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(document.querySelector('[data-i18n="university"]').textContent, margin, y);
        
        y += 10;
        
        // Mestrado
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(document.querySelector('[data-i18n="masters"]').textContent, margin, y);
        
        y += 6;
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(document.querySelector('[data-i18n="masters_details"]').textContent, margin, y);
        
        y += 10;
        
        // Destaques
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(document.querySelector('[data-i18n="highlights"]').textContent, margin, y);
        
        y += 8;
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        
        // Highlight 1
        const highlight1Text = '• ' + document.querySelector('[data-i18n="highlight1"]').textContent;
        const highlight1Lines = doc.splitTextToSize(highlight1Text, doc.internal.pageSize.width - 2 * margin - 5);
        doc.text(highlight1Lines, margin + 5, y);
        
        y += highlight1Lines.length * 5 + 5;
        
        // Highlight 2
        const highlight2Text = '• ' + document.querySelector('[data-i18n="highlight2"]').textContent;
        const highlight2Lines = doc.splitTextToSize(highlight2Text, doc.internal.pageSize.width - 2 * margin - 5);
        doc.text(highlight2Lines, margin + 5, y);
        
        // Salvar o PDF
        doc.save(fileName);
        
        // Restaurar a interface
        if (loadingIndicator) loadingIndicator.classList.add('hidden');
        if (exportButton) exportButton.classList.remove('hidden');
        
        console.log('PDF gerado com sucesso');
        
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