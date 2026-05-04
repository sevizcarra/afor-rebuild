# AFOR Rebuild

Landing page de AFOR (Architecture for Engineering) con estética **design-led** inspirada en Worley/AtkinsRéalis.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS con tokens de marca
- Framer Motion para animaciones
- Tipografías via `next/font` (Audiowide, Inter Tight, Inter, JetBrains Mono)

## Sistema de identidad

### Paleta (estricta)
| Token | Color | Uso |
|---|---|---|
| `navy-deep` | `#0F1024` | Fondo dominante de bloques oscuros |
| `navy` | `#1A1A2E` | Navy de marca, secundario |
| `orange` | `#FF5A1F` | Acento principal — máx 1 por viewport |
| `green` | `#91F527` | Acento secundario — hover/micro-UI |
| `off-white` | `#F5F5F2` | Fondo claro (NO blanco puro) |
| `gray-line` | `#2A2B3F` | Divisores sobre fondo oscuro |
| `gray-text` | `#8A8B9A` | Texto secundario sobre oscuro |

### Tipografía
- **Audiowide**: solo logo + 1 número grande (10+) + máx 1 hero
- **Inter Tight**: headings (700/600)
- **Inter**: body (400/500)
- **JetBrains Mono**: datos numéricos, eyebrows

## Cómo correr
```bash
npm install
npm run dev    # http://localhost:3000
```

## Imágenes del hero
Las 3 fotos del hero viven en `/public/images/hero/`:
- `hero-01-instalacion-tecnica.jpg`
- `hero-02-obra-gruesa.jpg`
- `hero-03-tabiqueria.jpg`

Para agregar más fotos al carrusel, súmalas en esa carpeta y actualiza el array `HERO_IMAGES` en `components/Hero.tsx`.

## Deploy
- Producción: Vercel (auto-deploy desde `main`)
- Dominio: afor.cl

## Estructura
```
app/
  layout.tsx       Root layout + tipografías + metadata
  page.tsx         Composición de las 10 secciones
  globals.css      Resets + utilidades globales
components/
  Nav.tsx          Top fixed con CTA
  Hero.tsx         Carrusel 3 fotos full-bleed
  About.tsx        Bloque "No vendemos horas"
  Pillars.tsx      Grid 4 pilares numerados
  Services.tsx     Lista vertical tipográfica
  StatHighlight.tsx 10+ años + mini-stats
  FeaturedProjects.tsx Grid asimétrico 6 proyectos
  PortfolioTable.tsx Tabla trayectoria completa
  Contact.tsx      Form + datos
  Footer.tsx       Logo + links + copyright
lib/
  content.ts       Textos del sitio (centralizados)
  projects.ts      Lista de proyectos
```
