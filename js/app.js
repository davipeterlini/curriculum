// Main application script for the interactive resume

document.addEventListener('DOMContentLoaded', function() {
    const defaultLanguage = 'pt-BR';
    const defaultTheme = 'light';

    let currentLanguage = localStorage.getItem('language') || defaultLanguage;
    let currentTheme = localStorage.getItem('theme') || defaultTheme;

    setLanguage(currentLanguage);
    setTheme(currentTheme);

    document.getElementById('language-toggle').addEventListener('click', function() {
        currentLanguage = currentLanguage === 'pt-BR' ? 'en-US' : 'pt-BR';
        localStorage.setItem('language', currentLanguage);
        setLanguage(currentLanguage);
    });

    document.getElementById('theme-toggle').addEventListener('click', function() {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        setTheme(currentTheme);
    });

    initializeSkillsChart(currentLanguage);
    initActiveNavHighlight();
});

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.title = translations[lang].title;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    updateTimeline(lang);
    updateSkillsChart(lang);

    const flag = lang === 'pt-BR' ? '🇺🇸' : '🇧🇷';
    const title = lang === 'pt-BR' ? 'Switch to English' : 'Mudar para Português';
    const el = document.getElementById('language-toggle');
    if (el) { el.textContent = flag; el.setAttribute('title', title); }
}

function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    const moonSVG = '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>';
    const sunSVG = '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"/></svg>';
    const icon = theme === 'light' ? moonSVG : sunSVG;
    const titleAttr = theme === 'light' ? 'Dark mode' : 'Light mode';
    const el = document.getElementById('theme-toggle');
    if (el) { el.innerHTML = icon; el.setAttribute('title', titleAttr); }

    updateChartTheme(theme);
}

function updateChartTheme(theme) {
    if (!skillsChart) return;
    const isDark = theme === 'dark';
    const labelColor = isDark ? '#cbd5e1' : '#334155';
    const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
    const backdropColor = isDark ? 'rgba(15,23,42,0.75)' : 'rgba(255,255,255,0.75)';

    skillsChart.options.scales.r.pointLabels.color = labelColor;
    skillsChart.options.scales.r.angleLines.color = gridColor;
    skillsChart.options.scales.r.grid.color = gridColor;
    skillsChart.options.scales.r.ticks.backdropColor = backdropColor;
    skillsChart.options.scales.r.ticks.color = labelColor;
    skillsChart.update();
}

function updateTimeline(lang) {
    const container = document.getElementById('timeline-container');
    if (!container) return;
    const data = timelineData[lang];
    if (!data) return;

    container.innerHTML = '';
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'timeline-item';

        const detailsHtml = item.details
            .map(d => `<p class="text-sm text-slate-600 dark:text-slate-400 mb-2">${d}</p>`)
            .join('');

        div.innerHTML = `
            <div class="timeline-header">
                <div class="flex-1 min-w-0">
                    <div class="flex items-baseline justify-between gap-2 flex-wrap mb-1">
                        <h3 class="font-semibold text-slate-900 dark:text-white">${item.company}</h3>
                        <span class="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">${item.dates}</span>
                    </div>
                    <p class="text-sm text-blue-600 dark:text-blue-400 font-medium">${item.role}</p>
                </div>
                <svg class="timeline-chevron w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
            </div>
            <div class="details-content mt-2 pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                ${detailsHtml}
            </div>
        `;

        const header = div.querySelector('.timeline-header');
        const content = div.querySelector('.details-content');
        const chevron = div.querySelector('.timeline-chevron');

        header.addEventListener('click', () => {
            content.classList.toggle('open');
            chevron.classList.toggle('open');
        });

        container.appendChild(div);
    });
}

function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    const isActive = link.getAttribute('href') === '#' + entry.target.id;
                    link.classList.toggle('active', isActive);
                });
            }
        });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach(section => observer.observe(section));
}

let skillsChart;
function initializeSkillsChart(lang) {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const langSkillsData = skillsData[lang];
    const categoryNames = Object.keys(langSkillsData);
    
    let allSkills = {};
    categoryNames.forEach(category => {
        allSkills = { ...allSkills, ...langSkillsData[category] };
    });

    const isDark = document.documentElement.classList.contains('dark');
    const labelColor = isDark ? '#cbd5e1' : '#334155';
    const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
    const backdropColor = isDark ? 'rgba(15,23,42,0.75)' : 'rgba(255,255,255,0.75)';

    skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: Object.keys(allSkills),
            datasets: [{
                label: translations[lang].proficiency,
                data: Object.values(allSkills),
                backgroundColor: 'rgba(59, 130, 246, 0.15)',
                borderColor: 'rgba(59, 130, 246, 0.8)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(59, 130, 246, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(59, 130, 246, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: { padding: 10 },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.parsed.r + ' / 10';
                        }
                    }
                }
            },
            scales: {
                r: {
                    angleLines: { color: gridColor },
                    grid: { color: gridColor },
                    pointLabels: { font: { size: 10 }, color: labelColor },
                    ticks: {
                        backdropColor: backdropColor,
                        color: labelColor,
                        stepSize: 2,
                        beginAtZero: true,
                        max: 10
                    }
                }
            }
        }
    });

    createFilterButtons(lang);
}

function updateSkillsChart(lang) {
    if (!skillsChart) return;

    const langSkillsData = skillsData[lang];
    const categoryNames = Object.keys(langSkillsData);
    
    let allSkills = {};
    categoryNames.forEach(category => {
        allSkills = { ...allSkills, ...langSkillsData[category] };
    });

    skillsChart.data.labels = Object.keys(allSkills);
    skillsChart.data.datasets[0].data = Object.values(allSkills);
    skillsChart.data.datasets[0].label = translations[lang].proficiency;
    skillsChart.update();

    createFilterButtons(lang);
}

function createFilterButtons(lang) {
    const filterButtonsContainer = document.getElementById('skills-filters');
    filterButtonsContainer.innerHTML = '';

    const langSkillsData = skillsData[lang];
    const categoryNames = Object.keys(langSkillsData);
    
    let allSkills = {};
    categoryNames.forEach(category => {
        allSkills = { ...allSkills, ...langSkillsData[category] };
    });

    const categories = [translations[lang].all, ...categoryNames];
    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.className = 'px-3 py-1.5 text-xs font-medium rounded-full transition-colors border';
        if (category === translations[lang].all) {
            button.classList.add('bg-blue-600', 'text-white', 'border-blue-600', 'dark:bg-blue-700', 'dark:border-blue-700');
        } else {
            button.classList.add('bg-white', 'text-slate-700', 'border-slate-300', 'hover:bg-slate-100', 'dark:bg-slate-800', 'dark:text-slate-300', 'dark:border-slate-600', 'dark:hover:bg-slate-700');
        }
        button.dataset.filter = category;
        filterButtonsContainer.appendChild(button);
    });

    filterButtonsContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const filter = e.target.dataset.filter;

            document.querySelectorAll('#skills-filters button').forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white', 'border-blue-600', 'dark:bg-blue-700', 'dark:border-blue-700');
                btn.classList.add('bg-white', 'text-slate-700', 'border-slate-300', 'hover:bg-slate-100', 'dark:bg-slate-800', 'dark:text-slate-300', 'dark:border-slate-600', 'dark:hover:bg-slate-700');
            });

            e.target.classList.add('bg-blue-600', 'text-white', 'border-blue-600', 'dark:bg-blue-700', 'dark:border-blue-700');
            e.target.classList.remove('bg-white', 'text-slate-700', 'border-slate-300', 'hover:bg-slate-100', 'dark:bg-slate-800', 'dark:text-slate-300', 'dark:border-slate-600', 'dark:hover:bg-slate-700');

            let filteredData;
            if (filter === translations[lang].all) {
                filteredData = allSkills;
            } else {
                filteredData = langSkillsData[filter];
            }

            skillsChart.data.labels = Object.keys(filteredData);
            skillsChart.data.datasets[0].data = Object.values(filteredData);
            skillsChart.update();
        }
    });
}
