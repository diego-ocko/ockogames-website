import './style.css';
import { renderHero } from './sections/hero.js';
import { renderAbout } from './sections/about.js';
import { renderProjects } from './sections/projects.js';
import { renderContact } from './sections/contact.js';
import projects from './data/projects.json';
import social from './data/social.json';
import pt from './data/i18n/pt.json';
import en from './data/i18n/en.json';
import logoUrl from './assets/logo-full.png';

const translations = { pt, en };
const browserLang = navigator.language.startsWith('pt') ? 'pt' : 'en';
let currentLang = localStorage.getItem('lang') ?? browserLang;

function render(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  document.querySelector('#app').innerHTML = `
    <nav class="navbar">
      <a href="#hero"><img src="${logoUrl}" alt="Ocko Games" class="nav-logo" /></a>
      <ul class="nav-links">
        <li><a href="#about">${t.nav.about}</a></li>
        <li><a href="#projects">${t.nav.projects}</a></li>
        <li><a href="#contact">${t.nav.contact}</a></li>
      </ul>
      <button class="lang-toggle" id="lang-toggle" aria-label="Switch language">
        ${lang === 'pt' ? 'EN' : 'PT'}
      </button>
    </nav>
    <main>
      ${renderHero(logoUrl, t)}
      ${renderAbout(t)}
      ${renderProjects(projects, lang, t)}
      ${renderContact(social, t)}
    </main>
    <footer class="footer">
      <p>© ${new Date().getFullYear()} Ocko Games</p>
    </footer>
  `;

  document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    localStorage.setItem('lang', currentLang);
    render(currentLang);
  });
}

render(currentLang);
