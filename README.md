# CV Site

Small personal website for Ilyas Mohaimel with:

- a CV homepage
- a blog landing page
- a sample post page
- GitHub Pages deployment support

## Run locally

```bash
npm start
```

Then open `http://localhost:3000`.

`localhost refused to connect` just means the local server is not running yet.

## Deploy to GitHub Pages

1. Create a GitHub repository and upload everything inside this folder.
2. In the repository settings, open `Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to the `main` branch.
5. GitHub will publish the site automatically using `.github/workflows/deploy.yml`.

If the repo is named anything except `lookfrost.github.io`, the final URL will usually be:

`https://lookfrost.github.io/<repo-name>/`

If you want the site at `https://lookfrost.github.io/`, the repository name should be:

`lookfrost.github.io`

## Customize later

- Replace the `IM` circle with a real profile photo
- Add real blog posts under `posts/`
- Add a downloadable PDF CV
