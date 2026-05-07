# TraceAV-Bench — Project Page

This directory is the GitHub Pages site for **TraceAV-Bench**. It is served
by the **Academic Project Page** template (Bulma + Nerfies-style).

## Local preview

```bash
cd docs
python -m http.server 8080
# then open http://localhost:8080
```

If port 8080 is occupied, use `python -m http.server 8001` etc.
On a remote server, either forward the port via SSH
(`ssh -L 8080:localhost:8080 user@host`) or bind to 0.0.0.0 and visit the
server IP.

## Deploy with GitHub Pages

1. Push this `docs/` directory to your public repo.
2. GitHub → **Settings → Pages** → *Source* = `Deploy from a branch`,
   *Branch* = `main`, *Folder* = `/docs`. Save.
3. Your page will be live at
   `https://<username>.github.io/<repo>/`.

## Where to edit what

| What                         | File                                        |
|------------------------------|---------------------------------------------|
| All page content             | `index.html`                                |
| Custom styles (override)     | `static/css/traceav.css`                    |
| Interactivity (LB filter…)   | `static/js/traceav.js`                      |
| Teaser figure                | `static/images/teaser_placeholder.png`      |
| Pipeline figure              | `static/images/pipeline.png`                |
| Favicon                      | `static/images/favicon.ico`                 |
| Social preview (1200×630)    | `static/images/social_preview.png`          |

## Placeholders you still need to fill in

- [ ] **arXiv link** — search for `arxiv.org` in `index.html` and update the
  two disabled-link buttons.
- [ ] **HuggingFace dataset link** — same as above (`href="#"`).
- [ ] **Institutions 1/2/3** — replace in the author section.
- [ ] **Teaser figure & pipeline figure** — drop images into
  `static/images/` (suggested names above).
- [ ] **arXiv BibTeX ID** — update the `@article{feng2026traceavbench, ...}`
  block once arXiv id is known.
- [ ] **(optional) social_preview.png** — used by Twitter/OG card.

## Leaderboard

The leaderboard is plain HTML; numbers are copied from the paper's main
results table (`tab:main_results`) and hallucination robustness table
(`tab:halluc_results`). To add a new model, simply insert a `<tr>` row with
the right `data-group` attribute:

```html
<tr data-group="open">
  <td class="lb-rank">N</td>
  <td class="lb-model">Your Model</td>
  <td>IR</td><td>TS</td>...<td>BM</td>
  <td class="lb-avg">Avg</td>
</tr>
```

Use `class="best"` on a cell to highlight the best per task and
`class="os-best"` for the best open-source result.
