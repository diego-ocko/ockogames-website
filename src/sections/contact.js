const FALLBACK_ICONS = {
  email:    { svg: '✉' },
  github:   { svg: '⌥' },
  linkedin: { svg: 'in' },
  itch:     { svg: '🎮' },
  twitter:  { svg: '𝕏' },
};

export function renderContact(social, t) {
  const links = social
    .filter(entry => entry.url)
    .map(entry => {
      const href = entry.key === 'email' ? `mailto:${entry.url}` : entry.url;
      const iconHtml = entry.icon
        ? `<img src="${entry.icon}" alt="${entry.label}" class="social-icon" />`
        : `<span class="social-icon-fallback">${FALLBACK_ICONS[entry.key]?.svg ?? '→'}</span>`;
      return `<a href="${href}" target="_blank" rel="noopener" class="social-link">${iconHtml}${entry.label}</a>`;
    })
    .join('');

  return `
    <section id="contact" class="section contact">
      <div class="container">
        <h2>${t.contact.title}</h2>
        <div class="social-links">${links}</div>
      </div>
    </section>
  `;
}
