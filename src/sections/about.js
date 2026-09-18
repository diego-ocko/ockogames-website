export function renderAbout(t) {
  return `
    <section id="about" class="section about">
      <div class="container">
        <h2>${t.about.title}</h2>
        <p>${t.about.body}</p>
      </div>
    </section>
  `;
}
