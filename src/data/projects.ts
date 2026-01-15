export interface Technology {
  name: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 'control-pacientes',
    title: 'Control de Pacientes',
    description: 'Sistema completo para la gestión de pacientes en centros médicos, con registro de historial, citas y tratamientos.',
    image: '/img/project-control-pacientes.png',
    technologies: [
      { name: 'JavaScript', color: 'yellow' },
      { name: 'PHP', color: 'blue' },
      { name: 'MySQL', color: 'red' }
    ],
    link: '#'
  },
  {
    id: 'bolsa-empleo',
    title: 'Bolsa de Empleo',
    description: 'Plataforma de búsqueda y publicación de empleos con filtros avanzados y notificaciones en tiempo real.',
    image: '/img/project-bolsa-empleo.png',
    technologies: [
      { name: 'JavaScript', color: 'yellow' },
      { name: 'PHP', color: 'blue' },
      { name: 'MySQL', color: 'red' }
    ],
    link: '#'
  },
  {
    id: 'cotizador-vehiculos',
    title: 'Cotizador de Alquiler de Vehículos',
    description: 'Sistema de cotización en tiempo real para alquiler de vehículos con diferentes tarifas y disponibilidad.',
    image: '/img/project-cotizador-vehiculos.png',
    technologies: [
      { name: 'JavaScript', color: 'yellow' },
      { name: 'PHP', color: 'blue' },
      { name: 'MySQL', color: 'red' }
    ],
    link: '#'
  },
  {
    id: 'sistema-almacen',
    title: 'Sistema de Almacén',
    description: 'Gestión completa de inventario con control de stock, alertas de bajo stock y reportes estadísticos.',
    image: '/img/project-sistema-almacen.png',
    technologies: [
      { name: 'JavaScript', color: 'yellow' },
      { name: 'PHP', color: 'blue' },
      { name: 'MySQL', color: 'red' }
    ],
    link: '#'
  }
];
