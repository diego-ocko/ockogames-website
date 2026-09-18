export function renderHero(logoUrl, t) {
  return `
    <section id="hero" class="hero">
      <div class="hero-content">
        ${logoUrl ? `<img src="${logoUrl}" alt="Ocko Games" class="hero-logo" />` : '<h1 class="hero-title">Ocko Games</h1>'}
        <p class="hero-tagline">${t.hero.tagline}</p>
        <a href="#projects" class="btn-primary">${t.hero.cta}</a>
      </div>
    </section>
  `;
}
