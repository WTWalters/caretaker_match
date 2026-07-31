# Railway Deployment — CareTaker Match

This app is a **Next.js 16** application (App Router) with one server route.
It is not a static site: `/api/contact` runs on Node and handles form
submissions, so the service must run `next start`, not a static file server.

> Note: an earlier version of this document described a Vite build
> (`dist/`, `npm run preview`, `VITE_API_URL`). That predates the Next.js
> migration and no longer applies.

---

## Build and start

Railway's Nixpacks detection handles this automatically:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Start command | `npm start` (runs `next start`) |
| Node version | pinned to >= 20.9 via `engines` in `package.json` and `.nvmrc` |

`next start` reads Railway's injected `PORT` and binds `0.0.0.0`, so no port
configuration is needed.

**Do not** set an output directory or a static-serve start command. Next 16
requires Node 20.9+; without the `engines` pin, Nixpacks can select an older
default and the build fails at a version check rather than anywhere obvious.

---

## Environment variables

Set these in Railway → your service → **Variables**.

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | yes | Canonical origin. Drives canonical tags, OG URLs, `robots.txt` and `sitemap.xml`. |
| `RESEND_API_KEY` | yes, to receive leads | Form delivery. Without it, submissions are logged server-side and the visitor is told to email directly. |
| `CONTACT_TO_EMAIL` | no | Defaults to `hamid.sabet@caretakermatch.com`. |
| `CONTACT_FROM_EMAIL` | no | Leave unset until a sending domain is verified with Resend. |
| `FORMSPREE_CONTACT_ENDPOINT` | no | Alternative to Resend. |
| `FORMSPREE_PARTNER_ENDPOINT` | no | Alternative to Resend. |

See `.env.example` for the annotated version.

### `NEXT_PUBLIC_SITE_URL` matters more than it looks

It defaults to `https://caretakermatch.com`. If the service is serving a
different hostname, every canonical tag, the sitemap and all Open Graph URLs
will point at a domain this deployment does not serve — which is worse than
having none, because it tells search engines the real content lives elsewhere.

Set it to whatever hostname is actually public:

```
NEXT_PUBLIC_SITE_URL=https://caretakermatch.com
```

---

## Custom domain

1. Railway → service → Settings → Networking → **Custom Domain**
2. Add the hostname, e.g. `caretakermatch.com`
3. Railway shows a CNAME target; add it at the registrar

```
Type: CNAME
Name: <subdomain, or @ / ALIAS for apex>
Value: <provided>.up.railway.app
TTL: 300
```

Railway provisions SSL once the record resolves. Apex domains need ALIAS or
ANAME support at the registrar; if it only does CNAME, point `www` at Railway
and redirect the apex to it.

Update `NEXT_PUBLIC_SITE_URL` to match the final hostname and redeploy —
canonical tags and the sitemap are baked at build time.

---

## Routes

Everything is prerendered static except the form handler:

```
○  /                        static
○  /community-care-partner  static
○  /health-systems          static
ƒ  /api/contact             Node runtime
○  /demo/*, /team, /updatedCTM   static, noindex + disallowed in robots.txt
```

---

## Verifying a deploy

```bash
curl -sI https://<host>/ | head -1                 # 200
curl -s  https://<host>/robots.txt                 # disallows /demo/, /api/
curl -s  https://<host>/sitemap.xml | head -3      # correct origin
curl -sI https://<host>/index.html | head -1       # 308 redirect
curl -s -X POST https://<host>/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"formType":"contact","name":"T","email":"bad"}'   # 400 validation
```

The last one returning 400 with a readable message confirms the Node route is
live. A 404 means the service is serving static files instead of running
`next start`.
