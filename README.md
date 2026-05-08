# TraceAV-Bench — Project Page

This directory is the GitHub Pages site for **TraceAV-Bench**. It is served
by the **Academic Project Page** template (Bulma + Nerfies-style).

## Local preview

```bash
python -m http.server 8080
# then open http://localhost:8080
```

If port 8080 is occupied, use `python -m http.server 8001` etc.
On a remote server, either forward the port via SSH
(`ssh -L 8080:localhost:8080 user@host`) or bind to 0.0.0.0 and visit the
server IP.

## Deploy with GitHub Pages

1. Push this directory to your public repo.
2. GitHub -> **Settings -> Pages** -> *Source* = `Deploy from a branch`,
   *Branch* = `main`, *Folder* = `/` (root). Save.
3. Your page will be live at
   `https://<username>.github.io/<repo>/`.

## Where to edit what

| What                         | File                                     |
|------------------------------|------------------------------------------|
| All page content             | `index.html`                             |
| Custom styles (override)     | `static/css/traceav.css`                 |
| Interactivity (LB filter...) | `static/js/traceav.js`                   |
| Logo / favicon (SVG)         | `static/images/logo.svg`                 |

## Credits

Adapted from the
[Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template),
which is itself based on the [Nerfies](https://nerfies.github.io) project page.
Released under the
[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/) license.
