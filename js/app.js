// Main application script for the interactive resume

document.addEventListener('DOMContentLoaded', function() {
    // Initialize language and theme
    const defaultLanguage = 'pt-BR';
    const defaultTheme = 'light';
    
    let currentLanguage = localStorage.getItem('language') || defaultLanguage;
    let currentTheme = localStorage.getItem('theme') || defaultTheme;
    
    // Apply initial language and theme
    setLanguage(currentLanguage);
    setTheme(currentTheme);
    
    // Language switcher
    document.getElementById('language-toggle').addEventListener('click', function() {
        currentLanguage = currentLanguage === 'pt-BR' ? 'en-US' : 'pt-BR';
        localStorage.setItem('language', currentLanguage);
        setLanguage(currentLanguage);
    });
    
    // Theme switcher
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
});

// Set the language for the entire application
function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.title = translations[lang].title;
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update timeline
    updateTimeline(lang);
    
    // Update skills chart
    updateSkillsChart(lang);
    
    // Update language toggle icon/text
    const langToggle = document.getElementById('language-toggle');
    langToggle.textContent = lang === 'pt-BR' ? '🇺🇸' : '🇧🇷';
    langToggle.setAttribute('title', lang === 'pt-BR' ? 'Switch to English' : 'Mudar para Português');
}

// Set the theme for the entire application
function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    // Update theme toggle icon
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.innerHTML = theme === 'light' 
        ? '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>' 
        : '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>';
    themeToggle.setAttribute('title', theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode');
}

// Update the timeline with the current language
function updateTimeline(lang) {
    const timelineContainer = document.getElementById('timeline-container');
    timelineContainer.innerHTML = '';
    
    timelineData[lang].forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item mb-8';

        const content = `
            <div class="cursor-pointer">
                <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200">${item.role}</h3>
                <p class="text-blue-600 dark:text-blue-400 font-medium">${item.company}</p>
                <p class="text-sm text-slate-500 dark:text-slate-400 italic">${item.dates}</p>
            </div>
            <div class="details-content">
                <ul class="list-disc list-inside text-slate-600 dark:text-slate-300 mt-2 space-y-1 pl-2">
                    ${item.details.map(d => `<li>${d}</li>`).join('')}
                </ul>
            </div>
        `;
        timelineItem.innerHTML = content;
        timelineContainer.appendChild(timelineItem);

        timelineItem.querySelector('.cursor-pointer').addEventListener('click', () => {
            const details = timelineItem.querySelector('.details-content');
            details.classList.toggle('open');
        });
    });
}

// Initialize the skills chart
let skillsChart;
function initializeSkillsChart(lang) {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    
    // Get the appropriate skills data based on language
    const langSkillsData = skillsData[lang];
    
    // Get category names based on language
    const categoryNames = Object.keys(langSkillsData);
    
    // Create a combined object of all skills
    let allSkills = {};
    categoryNames.forEach(category => {
        allSkills = { ...allSkills, ...langSkillsData[category] };
    });
    
    // Create the chart
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
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.r !== null) {
                                label += context.parsed.r + ' / 10';
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    pointLabels: {
                        font: {
                            size: 11
                        },
                        color: '#334155'
                    },
                    ticks: {
                        backdropColor: 'rgba(255, 255, 255, 0.75)',
                        stepSize: 2,
                        beginAtZero: true,
                        max: 10
                    }
                }
            }
        }
    });
    
    // Create filter buttons
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