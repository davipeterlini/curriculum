// PDF Export functionality

function exportToPDF() {
    // Show loading indicator
    const loadingIndicator = document.getElementById('pdf-loading');
    if (loadingIndicator) {
        loadingIndicator.classList.remove('hidden');
    }
    
    // Get the current language to set the filename
    const currentLanguage = document.documentElement.lang;
    const fileName = currentLanguage === 'pt-BR' ? 'Curriculo_Davi_Peterlini.pdf' : 'Resume_Davi_Peterlini.pdf';
    
    // Get the element to export
    const element = document.body;
    
    // Clone the element to modify it for PDF export
    const clonedElement = element.cloneNode(true);
    
    // Remove elements we don't want in the PDF
    const elementsToRemove = clonedElement.querySelectorAll('#export-pdf-btn, #pdf-loading, #language-toggle, #theme-toggle, #language-toggle-mobile, #theme-toggle-mobile, #menu-btn');
    elementsToRemove.forEach(el => el.remove());
    
    // Make sure all details are expanded for the PDF
    const detailsContents = clonedElement.querySelectorAll('.details-content');
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
        html2canvas: { scale: 2, useCORS: true, logging: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    // Generate PDF
    html2pdf().from(clonedElement).set(opt).save().then(() => {
        // Hide loading indicator when done
        if (loadingIndicator) {
            loadingIndicator.classList.add('hidden');
        }
    });
}

// Initialize PDF export button
document.addEventListener('DOMContentLoaded', function() {
    const exportButton = document.getElementById('export-pdf-btn');
    if (exportButton) {
        exportButton.addEventListener('click', exportToPDF);
    }
    
    // Add mobile export button event listener
    const mobileExportButton = document.getElementById('export-pdf-btn-mobile');
    if (mobileExportButton) {
        mobileExportButton.addEventListener('click', exportToPDF);
    }
});