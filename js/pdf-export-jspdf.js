// PDF Export — 1-column ATS-friendly modern resume

function exportToPDF() {
    const loadingIndicator = document.getElementById('pdf-loading');
    const exportButton = document.getElementById('export-pdf-btn');

    if (loadingIndicator) loadingIndicator.classList.remove('hidden');
    if (exportButton) exportButton.classList.add('hidden');

    const lang = document.documentElement.lang;
    const t = translations[lang];
    const isPT = lang === 'pt-BR';
    const isDark = document.documentElement.classList.contains('dark');

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
        callback('');
    };
    img.src = src;
}

// ── Build HTML & trigger print ────────────────────────────────────────────────
function buildAndPrintPDF(lang, t, isPT, isDark, photoDataUrl, loadingIndicator, exportButton) {
    const printWindow = window.open('', '_blank', 'width=900,height=700');
    if (!printWindow) {
        alert(isPT
            ? 'Por favor, permita pop-ups para gerar o PDF.'
            : 'Please allow pop-ups to generate the PDF.');
        if (loadingIndicator) loadingIndicator.classList.add('hidden');
        if (exportButton) exportButton.classList.remove('hidden');
        return;
    }

    // ── Colors ────────────────────────────────────────────────────────────────
    const C = {
        bg:           isDark ? '#0f172a' : '#ffffff',
        text:         isDark ? '#e2e8f0' : '#1e293b',
        textMuted:    isDark ? '#94a3b8' : '#64748b',
        accent:       isDark ? '#60a5fa' : '#1d4ed8',
        accentLight:  isDark ? '#1e3a5f' : '#dbeafe',
        border:       isDark ? '#334155' : '#e2e8f0',
        headerBg:     isDark ? '#0f172a' : '#f8fafc',
        summaryBg:    isDark ? '#1e293b' : '#f1f5f9',
        summaryBorder:'#3b82f6',
        name:         isDark ? '#f8fafc' : '#0f172a',
        company:      isDark ? '#f1f5f9' : '#0f172a',
        role:         isDark ? '#60a5fa' : '#2563eb',
        dates:        isDark ? '#64748b' : '#94a3b8',
        stackBg:      isDark ? '#1e293b' : '#f8fafc',
        stackColor:   isDark ? '#64748b' : '#64748b',
        hlStar:       '#f59e0b',
    };

    // ── Skill tag colors ──────────────────────────────────────────────────────
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

    function skillTagsHtml(cat) {
        const skills = skillsData[lang][cat] || {};
        return Object.entries(skills)
            .filter(([, v]) => v >= 7)
            .map(([name]) => {
                const c = catColors[cat] || '#334155';
                return `<span class="tag" style="background:${c}18;color:${c};border-color:${c}44">${name}</span>`;
            })
            .join('');
    }

    function skillSection(title, cats) {
        return cats.map(cat => {
            const tags = skillTagsHtml(cat);
            if (!tags) return '';
            return `<div class="skill-group">
                <span class="skill-cat">${cat}</span>
                <div class="tag-row">${tags}</div>
            </div>`;
        }).join('');
    }

    // ── Experience HTML ───────────────────────────────────────────────────────
    function renderExperience() {
        return timelineData[lang].map(job => {
            const lines = job.details.map(d => {
                if (d.includes('<em>Stack:')) return null;
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
                    <div class="exp-left">
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

    // ── Labels ────────────────────────────────────────────────────────────────
    const allCats = isPT
        ? ['AI & LLM', 'Linguagens', 'Back-End', 'DevOps & Cloud', 'Front-End', 'Arquitetura', 'Banco de Dados', 'Segurança & Qualidade']
        : ['AI & LLM', 'Languages', 'Back-End', 'DevOps & Cloud', 'Front-End', 'Architecture', 'Databases', 'Security & Quality'];

    const L = {
        docTitle:   isPT ? 'Currículo — Davi Peterlini' : 'Resume — Davi Peterlini',
        experience: isPT ? 'Experiência Profissional'   : 'Professional Experience',
        skills:     isPT ? 'Tecnologias & Ferramentas'  : 'Technologies & Tools',
        education:  isPT ? 'Formação'                   : 'Education',
        highlights: isPT ? 'Destaques'                  : 'Highlights',
        degree:     isPT ? 'Eng. de Computação'         : 'B.Sc. Computer Engineering',
        masters:    isPT ? 'Mestrado (não concluído)'   : "Master's (not completed)",
        hl1:        isPT ? 'TCC premiado com bolsa UNICAMP (SDN)' : "Thesis awarded UNICAMP master's scholarship (SDN)",
        hl2:        isPT ? 'Fundador da CoP AI Engineering na CI&T' : 'Founded AI Engineering CoP at CI&T',
        hl3:        'Open source: qwen-code (NPM), proxy-llm (GitHub)',
        footer:     isPT ? 'Currículo gerado automaticamente — 2026' : 'Auto-generated resume — 2026'
    };

    const summaryText = (t && t['professional_summary_text']) || '';
    const photoHtml = photoDataUrl
        ? `<img class="photo" src="${photoDataUrl}" alt="Davi Peterlini">`
        : '';

    // ── Document ──────────────────────────────────────────────────────────────
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
    line-height: 1.5;
    color: ${C.text};
    background: ${C.bg};
  }

  .page {
    width: 210mm;
    min-height: 297mm;
    padding: 14mm 16mm 12mm;
    background: ${C.bg};
  }

  /* ── Header ── */
  .header {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding-bottom: 12px;
    border-bottom: 2px solid ${C.accent};
    margin-bottom: 12px;
  }

  .photo {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
    border: 2.5px solid ${C.accent};
    flex-shrink: 0;
  }

  .header-info { flex: 1; }

  .header-name {
    font-size: 20pt;
    font-weight: 700;
    color: ${C.name};
    line-height: 1.1;
  }

  .header-headline {
    font-size: 9pt;
    font-weight: 500;
    color: ${C.role};
    margin-top: 3px;
    line-height: 1.3;
  }

  .header-contacts {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 16px;
    margin-top: 7px;
  }

  .contact-item {
    font-size: 7.5pt;
    color: ${C.textMuted};
    white-space: nowrap;
  }

  /* ── Summary ── */
  .summary {
    font-size: 8pt;
    color: ${C.textMuted};
    line-height: 1.6;
    padding: 8px 11px;
    background: ${C.summaryBg};
    border-left: 3px solid ${C.summaryBorder};
    border-radius: 0 4px 4px 0;
    margin-bottom: 14px;
  }

  /* ── Section titles ── */
  .section-title {
    font-size: 7.5pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${C.accent};
    border-bottom: 1px solid ${C.accentLight};
    padding-bottom: 3px;
    margin: 14px 0 9px;
  }

  /* ── Experience ── */
  .exp-block {
    margin-bottom: 10px;
    padding-bottom: 9px;
    border-bottom: 1px solid ${C.border};
  }

  .exp-block:last-child { border-bottom: none; margin-bottom: 0; }

  .exp-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 4px;
    margin-bottom: 3px;
  }

  .exp-company {
    font-size: 9.5pt;
    font-weight: 700;
    color: ${C.company};
  }

  .exp-role {
    font-size: 8.5pt;
    font-weight: 500;
    color: ${C.role};
  }

  .exp-dates {
    font-size: 7pt;
    color: ${C.dates};
    font-style: italic;
    white-space: nowrap;
  }

  .sub-header {
    font-size: 7.5pt;
    font-weight: 600;
    color: ${C.text};
    margin: 4px 0 1px 2px;
  }

  .bullet {
    font-size: 7.5pt;
    color: ${C.textMuted};
    padding-left: 8px;
    line-height: 1.45;
    margin-bottom: 1px;
  }

  .stack-line {
    font-size: 6.5pt;
    color: ${C.stackColor};
    margin-top: 4px;
    padding: 2px 8px;
    background: ${C.stackBg};
    border-radius: 3px;
    font-style: italic;
  }

  /* ── Skills ── */
  .skills-grid {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .skill-group {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .skill-cat {
    font-size: 6.5pt;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: ${C.textMuted};
    white-space: nowrap;
    min-width: 88px;
    padding-top: 3px;
  }

  .tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
  }

  .tag {
    display: inline-block;
    font-size: 7pt;
    font-weight: 500;
    padding: 2px 6px;
    border-radius: 3px;
    border: 1px solid;
    line-height: 1.35;
    white-space: nowrap;
  }

  /* ── Education & Highlights (2-col) ── */
  .bottom-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 24px;
  }

  .edu-item { margin-bottom: 7px; }

  .edu-degree {
    font-size: 8pt;
    font-weight: 600;
    color: ${C.text};
    line-height: 1.3;
  }

  .edu-place {
    font-size: 7.5pt;
    color: ${C.textMuted};
  }

  .highlight-item {
    font-size: 7.5pt;
    color: ${C.textMuted};
    padding-left: 13px;
    position: relative;
    margin-bottom: 5px;
    line-height: 1.4;
  }

  .highlight-item::before {
    content: '★';
    position: absolute;
    left: 0;
    color: ${C.hlStar};
    font-size: 6.5pt;
    top: 1px;
  }

  /* ── Footer ── */
  .pdf-footer {
    text-align: center;
    font-size: 6.5pt;
    color: ${C.dates};
    margin-top: 14px;
    padding-top: 7px;
    border-top: 1px solid ${C.border};
    font-style: italic;
  }

  /* ── Print ── */
  @page { size: A4; margin: 0; }

  @media print {
    html, body { width: 210mm; }
    .page { width: 210mm; }
    .tag, .summary, .stack-line, .header, .skills-grid {
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

  <!-- Header -->
  <header class="header">
    ${photoHtml}
    <div class="header-info">
      <div class="header-name">Davi Peterlini</div>
      <div class="header-headline">Senior AI Engineer &nbsp;·&nbsp; Tech Lead &nbsp;·&nbsp; Master Architect at CI&amp;T</div>
      <div class="header-contacts">
        <span class="contact-item">✉ davipeterlini@gmail.com</span>
        <span class="contact-item">🔗 linkedin.com/in/davi-peterlini-7aa0b737</span>
        <span class="contact-item">📦 github.com/davipeterlini</span>
        <span class="contact-item">📍 São Paulo, Brasil</span>
      </div>
    </div>
  </header>

  <!-- Summary -->
  <div class="summary">${summaryText}</div>

  <!-- Experience -->
  <div class="section-title">${L.experience}</div>
  ${renderExperience()}

  <!-- Skills -->
  <div class="section-title">${L.skills}</div>
  <div class="skills-grid">
    ${skillSection('', allCats)}
  </div>

  <!-- Education + Highlights -->
  <div class="bottom-grid">
    <div>
      <div class="section-title">${L.education}</div>
      <div class="edu-item">
        <div class="edu-degree">${L.degree}</div>
        <div class="edu-place">Univ. São Francisco · 2009–2013</div>
      </div>
      <div class="edu-item">
        <div class="edu-degree">${L.masters}</div>
        <div class="edu-place">UNICAMP · SDN · 2014</div>
      </div>
    </div>
    <div>
      <div class="section-title">${L.highlights}</div>
      <div class="highlight-item">${L.hl1}</div>
      <div class="highlight-item">${L.hl2}</div>
      <div class="highlight-item">${L.hl3}</div>
    </div>
  </div>

  <div class="pdf-footer">${L.footer}</div>
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
