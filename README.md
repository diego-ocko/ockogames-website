# Ocko Games — Site Institucional

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

Para gerar os arquivos de produção:

```bash
npm run build
```

A pasta `dist/` pode ser publicada em qualquer serviço de hospedagem estática (Netlify, Vercel, GitHub Pages).

---

## Configuração

### Projetos — `src/data/projects.json`

Cada item da lista vira um card na seção **Projetos**.

```json
[
  {
    "name": "Nome do Jogo",
    "description": "Descrição curta do projeto.",
    "image": "https://exemplo.com/imagem.png",
    "url": "https://ockogames.itch.io/nome-do-jogo",
    "status": "released"
  }
]
```

| Campo         | Tipo   | Valores possíveis           |
|---------------|--------|-----------------------------|
| `name`        | string | Nome do jogo                |
| `description` | string | Descrição curta             |
| `image`       | string | URL da imagem (pode ser vazio) |
| `url`         | string | Link para jogar (pode ser vazio) |
| `status`      | string | `"released"` ou `"wip"`    |

---

### Contato e redes sociais — `src/data/social.json`

```json
{
  "email": "contato@ockogames.com",
  "github": "https://github.com/ockogames",
  "itch": "https://ockogames.itch.io",
  "twitter": "https://twitter.com/ockogames"
}
```

Deixe o valor como `""` para ocultar um link da seção Contato.

---

## Assets

| Arquivo                    | Uso                        |
|----------------------------|----------------------------|
| `public/favicon.png`       | Ícone da aba do navegador  |
| `src/assets/logo-full.png` | Logo na navbar e no hero   |
