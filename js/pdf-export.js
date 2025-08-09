// PDF Export functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('PDF Export script loaded');
    
    // Get export buttons
    const exportButton = document.getElementById('export-pdf-btn');
    const mobileExportButton = document.getElementById('export-pdf-btn-mobile');
    
    // Add event listeners to buttons
    if (exportButton) {
        console.log('Export button found');
        exportButton.addEventListener('click', function() {
            console.log('Export button clicked');
            exportToPDF();
        });
    } else {
        console.error('Export button not found');
    }
    
    if (mobileExportButton) {
        console.log('Mobile export button found');
        mobileExportButton.addEventListener('click', function() {
            console.log('Mobile export button clicked');
            exportToPDF();
        });
    }
});

function exportToPDF() {
    console.log('Starting PDF export');
    
    // Check if html2pdf is available
    if (typeof html2pdf === 'undefined') {
        console.error('html2pdf library not loaded');
        alert('Erro: Biblioteca de exportação PDF não carregada. Por favor, recarregue a página.');
        return;
    }
    
    try {
        // Show loading indicator
        const loadingIndicator = document.getElementById('pdf-loading');
        if (loadingIndicator) {
            loadingIndicator.classList.remove('hidden');
            // Hide export button while generating
            const exportButton = document.getElementById('export-pdf-btn');
            if (exportButton) exportButton.classList.add('hidden');
        }
        
        // Get the current language to set the filename
        const currentLanguage = document.documentElement.lang;
        const fileName = currentLanguage === 'pt-BR' ? 'Curriculo_Davi_Peterlini.pdf' : 'Resume_Davi_Peterlini.pdf';
        
        // Create a deep clone of the body element
        const element = document.body.cloneNode(true);
        
        // Remove elements we don't want in the PDF
        const elementsToRemove = element.querySelectorAll('#export-pdf-btn, #export-pdf-btn-mobile, #pdf-loading, #language-toggle, #theme-toggle, #language-toggle-mobile, #theme-toggle-mobile, #menu-btn, #mobile-menu');
        elementsToRemove.forEach(el => {
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        });
        
        // Make sure all details are expanded for the PDF
        const detailsContents = element.querySelectorAll('.details-content');
        detailsContents.forEach(detail => {
            detail.classList.add('open');
            detail.style.maxHeight = 'none';
            detail.style.opacity = '1';
        });
        
        // Configure html2pdf options
        const opt = {
            margin: 10,
            filename: fileName,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        // Generate PDF
        html2pdf()
            .from(element)
            .set(opt)
            .save()
            .then(() => {
                console.log('PDF generated successfully');
                // Hide loading indicator and show export button again
                if (loadingIndicator) {
                    loadingIndicator.classList.add('hidden');
                    const exportButton = document.getElementById('export-pdf-btn');
                    if (exportButton) exportButton.classList.remove('hidden');
                }
            })
            .catch(error => {
                console.error('Error generating PDF:', error);
                alert('Erro ao gerar o PDF. Por favor, tente novamente.');
                // Hide loading indicator and show export button again
                if (loadingIndicator) {
                    loadingIndicator.classList.add('hidden');
                    const exportButton = document.getElementById('export-pdf-btn');
                    if (exportButton) exportButton.classList.remove('hidden');
                }
            });
    } catch (error) {
        console.error('Error in exportToPDF function:', error);
        alert('Erro ao gerar o PDF. Por favor, tente novamente.');
        // Reset UI
        const loadingIndicator = document.getElementById('pdf-loading');
        if (loadingIndicator) {
            loadingIndicator.classList.add('hidden');
            const exportButton = document.getElementById('export-pdf-btn');
            if (exportButton) exportButton.classList.remove('hidden');
        }
    }
}