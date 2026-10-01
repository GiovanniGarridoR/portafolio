# Portafolio · Giovanni Garrido

Portafolio personal hecho con HTML, CSS y JavaScript puro (sin frameworks).

## Cómo funciona

| Archivo | Para qué sirve |
|---|---|
| `data.js` | **Todo el contenido**: proyectos, experiencia, habilidades, textos. Edita aquí. |
| `main.js` | Lógica: arma la página con los datos y maneja el filtro por perfil. |
| `styles.css` | Diseño. Los colores de cada perfil están al inicio (`[data-enfoque=...]`). |
| `assets/cv/` | Un CV por perfil (desarrollo, soporte, ciberseguridad). |

## Enlaces por perfil

Puedes mandarle a cada reclutador un enlace que ya abre la página con el perfil correcto:

- `.../portafolio/?enfoque=web`
- `.../portafolio/?enfoque=python`
- `.../portafolio/?enfoque=soporte`
- `.../portafolio/?enfoque=ciber`

## Publicar gratis en GitHub Pages

1. Crea un repositorio público llamado `portafolio` en GitHub.
2. Sube estos archivos:
   ```
   git init
   git add .
   git commit -m "Primera versión del portafolio"
   git branch -M main
   git remote add origin https://github.com/GiovanniGarridoR/portafolio.git
   git push -u origin main
   ```
3. En el repo: **Settings → Pages → Branch: main → Save**.
4. En un par de minutos queda en `https://giovannigarridor.github.io/portafolio/`.
