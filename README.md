# Carlos Indriago - Portfolio

Portfolio personal de Carlos Indriago, Desarrollador Senior Web con más de 8 años de experiencia en desarrollo frontend y backend.

## 🚀 Tecnologías

Este proyecto está construido con:

- **Astro 5.16.9** - Framework de sitios estáticos ultra-rápido
- **Tailwind CSS 4** - Framework CSS utility-first
- **TypeScript** - Tipado estático para mayor seguridad

## 📁 Estructura del Proyecto

```
/
├── public/          # Archivos estáticos (imágenes, favicon)
├── src/
│   ├── components/  # Componentes reutilizables
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   └── Projects.astro
│   ├── data/        # Datos del portfolio
│   │   ├── profile.ts
│   │   └── projects.ts
│   ├── layouts/     # Layouts de páginas
│   │   └── Layout.astro
│   ├── pages/       # Páginas del sitio
│   │   └── index.astro
│   └── styles/      # Estilos globales
│       └── global.css
└── package.json
```

## 🛠️ Comandos

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala dependencias |
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Construye el sitio para producción en `./dist/` |
| `npm run preview` | Previsualiza la build localmente |

## ✨ Características

- ✅ Diseño completamente responsive
- ✅ Modo oscuro por defecto con tema personalizado
- ✅ Animaciones suaves y modernas
- ✅ Navegación con smooth scroll
- ✅ Formulario de contacto funcional (mailto)
- ✅ SEO optimizado con meta tags
- ✅ TypeScript con tipado estricto
- ✅ Componentes modulares y reutilizables
- ✅ Código limpio y bien estructurado

## 📝 Datos del Portfolio

Los datos del portfolio están centralizados en:

- **`src/data/profile.ts`** - Información personal, descripción, redes sociales
- **`src/data/projects.ts`** - Lista de proyectos con tecnologías

Para actualizar tu portfolio, simplemente edita estos archivos.

## 🎨 Personalización

El tema está configurado en `src/styles/global.css` con:

- Colores personalizados
- Animaciones custom
- Transiciones suaves
- Shadows y gradientes
- Responsive design breakpoints

## 🚀 Despliegue

Este proyecto está listo para desplegar en:

- **GitHub Pages** (recomendado para este repositorio)
- **Vercel**
- **Netlify**
- **Cloudflare Pages**

Para GitHub Pages:

1. Construye el proyecto: `npm run build`
2. El contenido de `dist/` se despliega automáticamente

## 📧 Contacto

Para actualizar el formulario de contacto, edita el email en `src/data/profile.ts`.

---

Desarrollado con ❤️ usando [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com)
