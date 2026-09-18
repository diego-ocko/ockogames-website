export function renderProjects(projects, lang, t) {
  const cards = projects.map(p => {
    const name = p.name[lang] ?? p.name.pt;
    const desc = p.description[lang] ?? p.description.pt;
    const statusLabel = p.status === 'wip' ? t.projects.status_wip : t.projects.status_released;

    return `
      <div class="card">
        ${p.image ? `<img src="${p.image}" alt="${name}" class="card-img" />` : ''}
        <div class="card-body">
          <span class="badge badge--${p.status}">${statusLabel}</span>
          <h3>${name}</h3>
          <p>${desc}</p>
          ${p.url ? `<a href="${p.url}" target="_blank" rel="noopener" class="card-link">${t.projects.play}</a>` : ''}
        </div>
      </div>
    `;
  }).join('');

  return `
    <section id="projects" class="section projects">
      <div class="container">
        <h2>${t.projects.title}</h2>
        <div class="cards-grid">${cards}</div>
      </div>
    </section>
  `;
}
