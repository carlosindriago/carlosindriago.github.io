export interface Profile {
  name: string;
  tagline: string;
  description: string;
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export const profile: Profile = {
  name: 'Carlos Indriago',
  tagline: 'TecnologoWeb',
  description: 'Un curioso de las tecnologías que le gusta programar y aprender nuevas habilidades para resolver problemas.',
  bio: `Soy un programador autodidacta con más de 8 años de experiencia en desarrollo web frontend y backend.

Diariamente, estoy aprendiendo nuevas tecnologías y habilidades para aplicarlas en mis proyectos y actividades diarias.

Tengo experiencia en el desarrollo de aplicaciones web y móviles.

Busco un lugar donde aplicar mi experiencia y conocimientos en desarrollo web para solucionar problemas usando la tecnología como herramienta.`,
  social: {
    email: 'contacto@tecnologoweb.com',
    github: 'https://github.com/carlosindriago',
    linkedin: 'https://linkedin.com/in/carlosindriago',
  }
};
