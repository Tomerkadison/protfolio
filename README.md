# tomerkadison.github.io

Personal portfolio site for Tomer Kadison: Backend & Platform Engineer, observability & data infrastructure.

Plain static HTML/CSS/JS, no build step. `PRODUCT.md` and `DESIGN.md` document the design system.

## Deploy on GitHub Pages

For the clean URL `https://tomerkadison.github.io`, the repo must be named `Tomerkadison.github.io`:

```sh
git remote add origin git@github.com:Tomerkadison/Tomerkadison.github.io.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.

Any other repo name also works and deploys to `https://tomerkadison.github.io/<repo-name>/` (all asset paths are relative).

## Updating the CV

Replace `Tomer_Kadison_CV.pdf` (same filename) and push; the download buttons point at it.
