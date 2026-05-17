# sogoofy static copy

This is a standalone static copy of the `t-shirt-hanger` site. It does not modify
or depend on the original TanStack Start app.

## Run locally

From this directory:

```powershell
node serve-static.cjs
```

Then open `http://localhost:4174`.

To test the GitHub Pages path locally, open
`http://localhost:4174/goofy-clothing/`.

The app uses client-side routing. `serve-static.cjs` falls back to `index.html`
so direct URLs such as `/product/og-bone-tee` work locally. All
product/category data is embedded in `app.js`.
