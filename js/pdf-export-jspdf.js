// PDF Export — Modern ATS-friendly resume (2-column layout, print-optimized)

function exportToPDF() {
    const loadingIndicator = document.getElementById('pdf-loading');
    const exportButton = document.getElementById('export-pdf-btn');

    if (loadingIndicator) loadingIndicator.classList.remove('hidden');
    if (exportButton) exportButton.classList.add('hidden');

    const lang = document.documentElement.lang;
    const t = translations[lang];
    const isPT = lang === 'pt-BR';
    const isDark = document.documentElement.classList.contains('dark');

    // Convert photo to base64 so it renders correctly in the popup (no base URL)
    loadPhotoAsBase64('assets/profile-photo.png', function (photoDataUrl) {
        try {
            buildAndPrintPDF(lang, t, isPT, isDark, photoDataUrl, loadingIndicator, exportButton);
        } catch (err) {
            console.error('Erro na exportação PDF:', err);
            alert(isPT ? 'Erro ao gerar o PDF.' : 'Error generating PDF.');
            if (loadingIndicator) loadingIndicator.classList.add('hidden');
            if (exportButton) exportButton.classList.remove('hidden');
        }
    });
}

// ── Load image as base64 data URL ─────────────────────────────────────────────
function loadPhotoAsBase64(src, callback) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        canvas.getContext('2d').drawImage(img, 0, 0);
        callback(canvas.toDataURL('image/png'));
    };
    img.onerror = function () {
        callback(''); // photo unavailable — skip gracefully
    };
    img.src = src;
}

// ── Build HTML & trigger print ────────────────────────────────────────────────
function buildAndPrintPDF(lang, t, isPT, photoDataUrl, loadingIndicator, exportButton) {
    const printWindow = window.open('', '_blank', 'width=900,height=700');
    if (!printWindow) {
        alert(isPT
            ? 'Por favor, permita pop-ups para gerar o PDF.'
            : 'Please allow pop-ups to generate the PDF.');
        if (loadingIndicator) loadingIndicator.classList.add('hidden');
        if (exportButton) exportButton.classList.remove('hidden');
        return;
    }

    // ── Skill tags per category ───────────────────────────────────────────────
    const catColors = {
        'Linguagens': '#1d4ed8', 'Languages': '#1d4ed8',
        'Back-End': '#0f766e',
        'Front-End': '#7c3aed',
        'DevOps & Cloud': '#b45309',
        'AI & LLM': '#be185d',
        'Arquitetura': '#059669', 'Architecture': '#059669',
        'Banco de Dados': '#0369a1', 'Databases': '#0369a1',
        'Segurança & Qualidade': '#6d28d9', 'Security & Quality': '#6d28d9'
    };

    function skillTags(cat) {
        const skills = skillsData[lang][cat] || {};
        return Object.entries(skills)
            .filter(([, v]) => v >= 7)
            .map(([name]) => {
                const c = catColors[cat] || '#334155';
                return `<span class="tag" style="background:${c}18;color:${c};border-color:${c}44">${name}</span>`;
            })
            .join('');
    }

    function sidebarSkillSection(title, cats) {
        return `<div class="side-section">
            <div class="side-title">${title}</div>
            ${cats.map(cat => `
                <div class="skill-group-name">${cat}</div>
                <div class="tag-group">${skillTags(cat)}</div>
            `).join('')}
        </div>`;
    }

    // ── Experience HTML ───────────────────────────────────────────────────────
    function renderExperience() {
        return timelineData[lang].map(job => {
            const lines = job.details.map(d => {
                const isStack = d.includes('<em>Stack:');
                if (isStack) return null; // handled separately
                if (d.includes('<strong>')) {
                    const clean = d.replace(/<\/?strong>/g, '').replace(/🔹\s*/g, '').trim();
                    return `<div class="sub-header">${clean}</div>`;
                }
                const clean = d.replace(/<\/?strong>/g, '').replace(/<\/?em>/g, '').replace(/^•\s*/, '').trim();
                if (!clean) return null;
                return `<div class="bullet">• ${clean}</div>`;
            }).filter(Boolean).join('');

            const stackLines = job.details
                .filter(d => d.includes('<em>Stack:'))
                .map(d => d.replace(/<\/?em>/g, '').replace(/<\/?strong>/g, '').trim())
                .join(' ');

            return `<div class="exp-block">
                <div class="exp-header">
                    <div>
                        <span class="exp-company">${job.company}</span>
                        <span class="exp-role"> · ${job.role}</span>
                    </div>
                    <span class="exp-dates">${job.dates}</span>
                </div>
                <div class="exp-body">${lines}</div>
                ${stackLines ? `<div class="stack-line">${stackLines}</div>` : ''}
            </div>`;
        }).join('');
    }

    // ── Labels & data ─────────────────────────────────────────────────────────
    const coreCategories = isPT
        ? ['AI & LLM', 'Linguagens', 'Back-End', 'DevOps & Cloud']
        : ['AI & LLM', 'Languages', 'Back-End', 'DevOps & Cloud'];

    const moreCategories = isPT
        ? ['Front-End', 'Arquitetura', 'Banco de Dados', 'Segurança & Qualidade']
        : ['Front-End', 'Architecture', 'Databases', 'Security & Quality'];

    const L = {
        docTitle:    isPT ? 'Currículo — Davi Peterlini' : 'Resume — Davi Peterlini',
        contact:     isPT ? 'Contato'                    : 'Contact',
        education:   isPT ? 'Formação'                   : 'Education',
        skills:      isPT ? 'Tecnologias & Ferramentas'  : 'Technologies & Tools',
        more:        isPT ? 'Mais Competências'           : 'More Skills',
        highlights:  isPT ? 'Destaques'                  : 'Highlights',
        experience:  isPT ? 'Experiência Profissional'   : 'Professional Experience',
        degree:      isPT ? 'Eng. de Computação'         : 'B.Sc. Computer Engineering',
        masters:     isPT ? 'Mestrado (não concluído)'   : "Master's (not completed)",
        hl1:         isPT ? 'TCC premiado com bolsa UNICAMP (SDN)' : 'Thesis awarded UNICAMP master\'s scholarship (SDN)',
        hl2:         isPT ? 'Fundador da CoP AI Engineering na CI&T' : 'Founded AI Engineering CoP at CI&T',
        hl3:         'Open source: qwen-code (NPM), proxy-llm (GitHub)',
        footer:      isPT ? 'Currículo gerado automaticamente — 2026' : 'Auto-generated resume — 2026'
    };

    const summaryText = t['professional_summary_text'] || '';
    const photoImg = photoDataUrl
        ? `<img src="${photoDataUrl}" alt="Davi Peterlini">`
        : '';

    // ── Full document ─────────────────────────────────────────────────────────
    printWindow.document.write(`<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<title>${L.docTitle}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html, body {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    font-size: 9.5pt;
    line-height: 1.45;
    color: #1e293b;
    background: #fff;
  }

  /* ── Layout ── */
  .page {
    display: grid;
    grid-template-columns: 195px 1fr;
    width: 210mm;
    min-height: 297mm;
  }

  /* ── Sidebar ── */
  .sidebar {
    background: #0f172a;
    color: #e2e8f0;
    padding: 20px 13px;
  }

  .photo-wrap {
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
  }

  .photo-wrap img {
    width: 76px;
    height: 76px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #3b82f6;
  }

  .name-block {
    text-align: center;
    margin-bottom: 16px;
  }

  .name-block .name {
    font-size: 12.5pt;
    font-weight: 700;
    color: #f8fafc;
    line-height: 1.2;
  }

  .name-block .role-tag {
    font-size: 7pt;
    color: #94a3b8;
    margin-top: 4px;
    line-height: 1.4;
  }

  .side-section {
    margin-bottom: 14px;
  }

  .side-title {
    font-size: 6.5pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    color: #60a5fa;
    border-bottom: 1px solid #1e3a5f;
    padding-bottom: 4px;
    margin-bottom: 7px;
  }

  .contact-item {
    font-size: 7pt;
    color: #cbd5e1;
    margin-bottom: 4px;
    word-break: break-all;
    line-height: 1.35;
  }

  .contact-item a {
    color: #93c5fd;
    text-decoration: none;
  }

  .edu-item {
    margin-bottom: 7px;
  }

  .edu-degree {
    font-size: 7.5pt;
    font-weight: 600;
    color: #f1f5f9;
    line-height: 1.3;
  }

  .edu-place {
    font-size: 7pt;
    color: #94a3b8;
  }

  .skill-group-name {
    font-size: 6pt;
    font-weight: 600;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin: 6px 0 3px;
  }

  .tag-group {
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
    margin-bottom: 3px;
  }

  .tag {
    display: inline-block;
    font-size: 6.5pt;
    font-weight: 500;
    padding: 2px 5px;
    border-radius: 3px;
    border: 1px solid;
    line-height: 1.35;
    white-space: nowrap;
  }

  .highlight-item {
    font-size: 7pt;
    color: #cbd5e1;
    padding-left: 12px;
    position: relative;
    margin-bottom: 5px;
    line-height: 1.4;
  }

  .highlight-item::before {
    content: '★';
    position: absolute;
    left: 0;
    color: #f59e0b;
    font-size: 6.5pt;
    top: 1px;
  }

  /* ── Main ── */
  .main {
    padding: 20px 20px;
    background: #fff;
  }

  .main-header {
    border-bottom: 2px solid #1d4ed8;
    padding-bottom: 9px;
    margin-bottom: 12px;
  }

  .main-header .full-name {
    font-size: 18pt;
    font-weight: 700;
    color: #0f172a;
    line-height: 1.1;
  }

  .main-header .headline {
    font-size: 8.5pt;
    color: #3b82f6;
    font-weight: 500;
    margin-top: 3px;
    line-height: 1.35;
  }

  .summary-text {
    font-size: 8pt;
    color: #475569;
    margin-bottom: 12px;
    line-height: 1.55;
    padding: 8px 10px;
    background: #f8fafc;
    border-left: 3px solid #3b82f6;
    border-radius: 0 4px 4px 0;
  }

  .section-title {
    font-size: 7.5pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #1d4ed8;
    border-bottom: 1px solid #dbeafe;
    padding-bottom: 3px;
    margin-bottom: 9px;
    margin-top: 12px;
  }

  .exp-block {
    margin-bottom: 10px;
    padding-bottom: 9px;
    border-bottom: 1px solid #f1f5f9;
  }

  .exp-block:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  .exp-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 6px;
    margin-bottom: 3px;
    flex-wrap: wrap;
  }

  .exp-company {
    font-size: 9.5pt;
    font-weight: 700;
    color: #0f172a;
  }

  .exp-role {
    font-size: 8.5pt;
    font-weight: 500;
    color: #2563eb;
  }

  .exp-dates {
    font-size: 7pt;
    color: #94a3b8;
    white-space: nowrap;
    font-style: italic;
  }

  .sub-header {
    font-size: 7.5pt;
    font-weight: 600;
    color: #334155;
    margin: 4px 0 1px;
    padding-left: 2px;
  }

  .bullet {
    font-size: 7pt;
    color: #475569;
    padding-left: 8px;
    line-height: 1.45;
    margin-bottom: 1px;
  }

  .stack-line {
    font-size: 6.5pt;
    color: #64748b;
    margin-top: 4px;
    padding: 2px 7px;
    background: #f8fafc;
    border-radius: 3px;
    font-style: italic;
  }

  .pdf-footer {
    text-align: center;
    font-size: 6.5pt;
    color: #94a3b8;
    margin-top: 14px;
    padding-top: 7px;
    border-top: 1px solid #e2e8f0;
    font-style: italic;
  }

  /* ── Print ── */
  @page {
    size: A4;
    margin: 0;
  }

  @media print {
    html, body { width: 210mm; }
    .page { width: 210mm; }
    .sidebar, .tag, .summary-text {
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
    }
    .exp-block { page-break-inside: avoid; }
    .section-title { page-break-after: avoid; }
  }
</style>
</head>
<body>
<div class="page">

  <aside class="sidebar">
    <div class="photo-wrap">${photoImg}</div>

    <div class="name-block">
      <div class="name">Davi Peterlini</div>
      <div class="role-tag">Senior AI Engineer<br>Tech Lead · CI&amp;T</div>
    </div>

    <div class="side-section">
      <div class="side-title">${L.contact}</div>
      <div class="contact-item">✉ davipeterlini@gmail.com</div>
      <div class="contact-item">🔗 linkedin.com/in/davi-peterlini-7aa0b737</div>
      <div class="contact-item">📦 github.com/davipeterlini</div>
      <div class="contact-item">📍 São Paulo, Brasil</div>
    </div>

    <div class="side-section">
      <div class="side-title">${L.education}</div>
      <div class="edu-item">
        <div class="edu-degree">${L.degree}</div>
        <div class="edu-place">Univ. São Francisco · 2009–2013</div>
      </div>
      <div class="edu-item">
        <div class="edu-degree">${L.masters}</div>
        <div class="edu-place">UNICAMP · SDN · 2014</div>
      </div>
    </div>

    ${sidebarSkillSection(L.skills, coreCategories)}
    ${sidebarSkillSection(L.more, moreCategories)}

    <div class="side-section">
      <div class="side-title">${L.highlights}</div>
      <div class="highlight-item">${L.hl1}</div>
      <div class="highlight-item">${L.hl2}</div>
      <div class="highlight-item">${L.hl3}</div>
    </div>
  </aside>

  <main class="main">
    <div class="main-header">
      <div class="full-name">Davi Peterlini</div>
      <div class="headline">Senior AI Engineer · Tech Lead · LLM Infrastructure · Multi-Agent · MCP · LLMOps</div>
    </div>

    <div class="summary-text">${summaryText}</div>

    <div class="section-title">${L.experience}</div>
    ${renderExperience()}

    <div class="pdf-footer">${L.footer}</div>
  </main>
</div>
</body>
</html>`);

    printWindow.document.close();

    printWindow.onload = function () {
        setTimeout(function () {
            printWindow.print();
            setTimeout(function () {
                if (loadingIndicator) loadingIndicator.classList.add('hidden');
                if (exportButton) exportButton.classList.remove('hidden');
            }, 1000);
        }, 600);
    };
}

// ── Init export buttons ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    ['export-pdf-btn', 'export-pdf-btn-mobile'].forEach(function (id) {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener('click', exportToPDF);
    });
});
