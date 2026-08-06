export interface Experience {
  role: string;
  company: string;
  period: string;
  responsibility: string;
  impact: string[];
  tags: string[];
}

export const experience: Experience[] = [
  {
    role: 'Consultor Técnico, Especialista Backend y Automatización',
    company: 'Freelance / Remoto',
    period: '2022 — Presente',
    responsibility: 'Consultoría técnica especializada en backend, automatización y recuperación de infraestructura crítica para clientes en Latinoamérica y Europa.',
    impact: [
      'Restablecimiento de infraestructura crítica Moodle en tiempo récord ante fallos de partición.',
      'Desarrollo de bots algorítmicos y sistemas de alertas en tiempo real para máxima eficiencia operativa.',
      'Escalado de plataformas B2B multi-cliente con aislamiento estricto de datos y optimización de carga.',
    ],
    tags: ['Node.js', 'PostgreSQL', 'Docker', 'n8n', 'Moodle', 'AWS', 'Laravel']
  },
  {
    role: 'Lead Full-Stack Developer',
    company: 'Consultoría B2B · Sector Educativo Superior · Perú',
    period: '2021 — 2022',
    responsibility: 'Liderazgo técnico en modernización digital institucional para una plataforma educativa en el sector universitario peruano.',
    impact: [
      'Modernización digital institucional mediante una nueva plataforma educativa, eliminando ineficiencias críticas.',
      'Implementación de sistemas de gestión interna con control total y seguridad sobre data confidencial.',
    ],
    tags: ['Laravel', 'Vue.js', 'PostgreSQL', 'Linux', 'Docker']
  },
  {
    role: 'Backend & API Developer',
    company: 'RentalCar App · Venezuela',
    period: '2020 — 2021',
    responsibility: 'Arquitectura del backend y la base de datos relacional para una aplicación automotriz multiplataforma con alta concurrencia.',
    impact: [
      'Arquitectura de backend y BD relacional para aplicación automotriz multiplataforma escalable.',
      'Desarrollo de API REST de baja latencia con soporte para alta concurrencia de usuarios.',
    ],
    tags: ['Node.js', 'PostgreSQL', 'REST API', 'Docker', 'Mobile']
  },
  {
    role: 'Software Engineer',
    company: 'Sector Salud · Venezuela',
    period: '2015 — 2019',
    responsibility: 'Ingeniería de software en plataformas multiclínica con cumplimiento de normativas HIPAA, gestionando facturación e historiales médicos.',
    impact: [
      'Liderazgo en plataformas multiclínica bajo normas HIPAA, gestionando facturación e historiales médicos.',
    ],
    tags: ['PHP', 'MySQL', 'JavaScript', 'Linux', 'HIPAA']
  },
];
