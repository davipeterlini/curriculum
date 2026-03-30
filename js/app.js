// Main application script for the interactive resume

document.addEventListener('DOMContentLoaded', function() {
    const defaultLanguage = 'pt-BR';
    const defaultTheme = 'light';
    
    let currentLanguage = localStorage.getItem('language') || defaultLanguage;
    let currentTheme = localStorage.getItem('theme') || defaultTheme;
    
    setLanguage(currentLanguage);
    setTheme(currentTheme);
    
    // Language switcher (desktop + mobile sync)
    document.getElementById('language-toggle').addEventListener('click', function() {
        currentLanguage = currentLanguage === 'pt-BR' ? 'en-US' : 'pt-BR';
        localStorage.setItem('language', currentLanguage);
        setLanguage(currentLanguage);
    });
    
    // Theme switcher (desktop + mobile sync)
    document.getElementById('theme-toggle').addEventListener('click', function() {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        setTheme(currentTheme);
    });
    
    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Initialize skills chart
    initializeSkillsChart(currentLanguage);

    // Active nav section highlight on scroll
    initActiveNavHighlight();
});

// Set the language for the entire application
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
    ['language-toggle', 'language-toggle-mobile'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.textContent = flag; el.setAttribute('title', title); }
    });
}

// Set the theme for the entire application
function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    const moonSVG = '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>';
    const sunSVG = '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>';
    const icon = theme === 'light' ? moonSVG : sunSVG;
    const titleAttr = theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';

    ['theme-toggle', 'theme-toggle-mobile'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.innerHTML = icon; el.setAttribute('title', titleAttr); }
    });

    // Update chart colors for dark/light mode
    updateChartTheme(theme);
}

// Update chart colors when theme changes
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

// Render timeline items from timelineData
function updateTimeline(lang) {
    const container = document.getElementById('timeline-container');
    if (!container) return;
    const data = timelineData[lang];
    if (!data) return;

    container.innerHTML = '';
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'timeline-item relative mb-10';

        const detailsHtml = item.details
            .map(d => `<p class="text-slate-600 dark:text-slate-300 text-sm mb-1 leading-relaxed">${d}</p>`)
            .join('');

        div.innerHTML = `
            <div class="timeline-header bg-white dark:bg-slate-800 p-5 rounded-xl shadow-md border border-slate-200/80 dark:border-slate-700 cursor-pointer">
                <div class="flex-1 min-w-0">
                    <h3 class="font-bold text-lg text-slate-800 dark:text-white">${item.company}</h3>
                    <p class="text-blue-600 dark:text-blue-400 font-medium">${item.role}</p>
                    <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">${item.dates}</p>
                </div>
                <svg class="timeline-chevron w-5 h-5 text-slate-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
            </div>
            <div class="details-content">
                <div class="bg-white dark:bg-slate-800 rounded-b-xl border-x border-b border-slate-200/80 dark:border-slate-700 px-5 py-4">
                    ${detailsHtml}
                </div>
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

// Active nav section highlight using IntersectionObserver
function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"], #mobile-menu a[href^="#"]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    const isActive = link.getAttribute('href') === '#' + entry.target.id;
                    link.classList.toggle('text-blue-600', isActive);
                    link.classList.toggle('dark:text-blue-400', isActive);
                    link.classList.toggle('font-semibold', isActive);
                });
            }
        });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach(section => observer.observe(section));
}

// Initialize the skills chart
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
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                borderColor: 'rgba(59, 130, 246, 1)',
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
            layout: {
                padding: 20
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) label += ': ';
                            if (context.parsed.r !== null) label += context.parsed.r + ' / 10';
                            return label;
                        }
                    }
                }
            },
            scales: {
                r: {
                    angleLines: { color: gridColor },
                    grid: { color: gridColor },
                    pointLabels: {
                        font: { size: 11 },
                        color: labelColor
                    },
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

// Update the skills chart when language changes
function updateSkillsChart(lang) {
    if (!skillsChart) return;
    
    // Get the appropriate skills data based on language
    const langSkillsData = skillsData[lang];
    
    // Get category names based on language
    const categoryNames = Object.keys(langSkillsData);
    
    // Create a combined object of all skills
    let allSkills = {};
    categoryNames.forEach(category => {
        allSkills = { ...allSkills, ...langSkillsData[category] };
    });
    
    // Update chart data
    skillsChart.data.labels = Object.keys(allSkills);
    skillsChart.data.datasets[0].data = Object.values(allSkills);
    skillsChart.data.datasets[0].label = translations[lang].proficiency;
    skillsChart.update();
    
    // Recreate filter buttons
    createFilterButtons(lang);
}

// Create filter buttons for skills
function createFilterButtons(lang) {
    const filterButtonsContainer = document.getElementById('skills-filters');
    filterButtonsContainer.innerHTML = '';
    
    // Get the appropriate skills data based on language
    const langSkillsData = skillsData[lang];
    
    // Get category names based on language
    const categoryNames = Object.keys(langSkillsData);
    
    // Create a combined object of all skills
    let allSkills = {};
    categoryNames.forEach(category => {
        allSkills = { ...allSkills, ...langSkillsData[category] };
    });
    
    // Create buttons
    const categories = [translations[lang].all, ...categoryNames];
    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.className = 'px-4 py-2 text-sm font-medium rounded-full transition-colors';
        if (category === translations[lang].all) {
            button.classList.add('bg-blue-600', 'text-white', 'dark:bg-blue-700');
        } else {
            button.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-300', 'hover:bg-slate-100', 'dark:bg-slate-700', 'dark:text-slate-200', 'dark:border-slate-600', 'dark:hover:bg-slate-600');
        }
        button.dataset.filter = category;
        filterButtonsContainer.appendChild(button);
    });
    
    // Add event listeners to filter buttons
    filterButtonsContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const filter = e.target.dataset.filter;
            
            document.querySelectorAll('#skills-filters button').forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white', 'dark:bg-blue-700');
                btn.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-300', 'hover:bg-slate-100', 'dark:bg-slate-700', 'dark:text-slate-200', 'dark:border-slate-600', 'dark:hover:bg-slate-600');
            });
            
            e.target.classList.add('bg-blue-600', 'text-white', 'dark:bg-blue-700');
            e.target.classList.remove('bg-white', 'text-slate-700', 'border', 'border-slate-300', 'hover:bg-slate-100', 'dark:bg-slate-700', 'dark:text-slate-200', 'dark:border-slate-600', 'dark:hover:bg-slate-600');

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