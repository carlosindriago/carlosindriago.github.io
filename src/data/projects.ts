export interface GalleryItem {
  src: string;
  alt: string;
  technicalDescription: string;
}

export interface Project {
  title: string;
  problem: string;
  decision: string;
  impact: string;
  tags: string[];
  repo?: string;
  featured?: boolean;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  gallery?: GalleryItem[];
}

export const projects: Project[] = [
  {
    title: 'AequiVault: Motor Contable Financiero B2B',
    problem: 'La plataforma necesitaba manejar contabilidad B2B con trazabilidad, aislamiento por tenant y consistencia en operaciones financieras sensibles.',
    decision: 'Diseñé un motor API-first de partida doble con Clean Architecture, CQRS, PostgreSQL LTREE para jerarquías contables y RLS alimentado por contexto JWT.',
    impact: 'Base auditable y preparada para cumplimiento, con separación estricta de datos y una arquitectura clara para evolucionar reglas financieras complejas.',
    tags: ['Java 21', 'Spring Boot', 'PostgreSQL LTREE', 'Row-Level Security', 'Clean Architecture'],
    featured: true,
    image: '/projects/aequivault-main.webp',
    imageWidth: 1024,
    imageHeight: 787,
    repo: 'https://github.com/carlosindriago/AequiVault',
    gallery: [
      {
        src: '/projects/aequivault-main.webp',
        alt: 'Dashboard Financiero y Proyección de Liquidez',
        technicalDescription: 'Consola de mando financiero con aislamiento multi-tenant visible vía UUIDs. Las proyecciones de liquidez y flujos de caja evitan la presión sobre el Garbage Collector de la JVM delegando agregaciones complejas a PostgreSQL mediante window functions (SUM() OVER), garantizando métricas en tiempo constante O(1) independiente del volumen transaccional.'
      },
      {
        src: '/projects/aequivault-coa.webp',
        alt: 'Plan de Cuentas Jerárquico (LTREE)',
        technicalDescription: 'Árbol Jerárquico del Plan de Cuentas (COA). Reemplaza las costosas consultas recursivas (WITH RECURSIVE) a nivel SQL mediante el uso del tipo de dato nativo LTREE de PostgreSQL e indexación GiST. Permite consolidar ramas financieras completas en la capa de aplicación con complejidad constante O(1), reduciendo drásticamente la latencia en la generación de reportes.'
      },
      {
        src: '/projects/aequivault-journal.webp',
        alt: 'Módulo de Asientos Contables y Reactividad',
        technicalDescription: 'Módulo de Asientos Contables. Garantiza la inmutabilidad financiera (Clean Architecture & CQRS): los asientos confirmados bloquean alterations físicas (UPDATES/DELETES). El balanceo de la partida doble se evalúa asíncronamente en el cliente mediante Angular 18 Signals, eliminando el overhead de observables tradicionales.'
      },
      {
        src: '/projects/aequivault-ledger.webp',
        alt: 'Libro Mayor y Saldo Acumulado (Running Balance)',
        technicalDescription: 'Vista del Libro Mayor (General Ledger). La columna de Saldo Acumulado no se calcula iterando registros en la memoria de la JVM. Se delega directamente al motor de PostgreSQL utilizando funciones de ventana (SUM() OVER), optimizando la proyección de lectura (arquitectura CQRS) y garantizando una latencia mínima en la paginación independientemente de la profundidad histórica del tenant.'
      },
      {
        src: '/projects/aequivault-reports.webp',
        alt: 'Módulo de Reportes - Balance de Comprobación',
        technicalDescription: 'Módulo de Reportes Financieros y Balance de Comprobación (Trial Balance). Evidencia la integridad matemática inmutable del motor de partida doble: la sumatoria global arroja un balance neto exacto de cero ("Estado: Cuadrado"). Las consolidaciones temporales por grupo contable se ejecutan mediante agregaciones avanzadas (rollups) a nivel de base de datos, garantizando auditorías SOX-compliant en tiempo real sin saturar la memoria de la capa de aplicación (JVM).'
      },
      {
        src: '/projects/aequivault-config.webp',
        alt: 'Configuración, Multi-tenancy e Internacionalización',
        technicalDescription: 'Módulo de Configuración e Identidad del Inquilino (Tenant). Expone visualmente el UUID criptográfico utilizado para forzar el aislamiento físico de datos en PostgreSQL mediante Row-Level Security (RLS). Integra internacionalización dinámica (i18n) con carga diferida (lazy loading) de diccionarios JSON para optimizar el bundle inicial de Angular, y expone la interfaz para la gestión estricta de identidades y control de acceso basado en roles (RBAC).'
      },
      {
        src: '/projects/aequivault-rbac.webp',
        alt: 'Matriz Dinámica de Roles y Permisos (RBAC)',
        technicalDescription: 'Motor de Control de Acceso Basado en Roles (RBAC). Demuestra la implementación de una matriz de permisos dinámica, superando las limitations de los roles estáticos (hardcoded). Permite la composición de roles a medida para cumplir con el Principio de Mínimo Privilegio (PoLP), asignando capacidades granulares (ej. segregación de lectura/escritura) en módulos financieros críticos.'
      }
    ]
  },
  {
    title: 'Clinicalyx (HealthTech SaaS)',
    problem: 'El almacenamiento y búsqueda de datos médicos altamente confidenciales (PHI) en un entorno SaaS multi-tenant requería encriptación robusta en reposo sin perder la capacidad de realizar consultas eficientes.',
    decision: 'Arquitecté la plataforma en Go con la estructura de la Arquitectura Hexagonal, implementando encriptación AES-256-GCM en reposo, Blind Indexing (HMAC-SHA256) para búsquedas deterministas y PostgreSQL Row-Level Security (RLS).',
    impact: 'Aislamiento multi-tenant delegado directamente a la base de datos, mitigando de forma segura fugas de datos de salud en la capa de aplicación y cumpliendo con estándares de seguridad HIPAA.',
    tags: ['Go 1.25', 'Next.js', 'Hexagonal Architecture', 'AES-256 Crypto', 'PostgreSQL RLS'],
    featured: false,
    image: '/projects/clinicalyx-dashboard.webp',
    imageWidth: 1024,
    imageHeight: 499,
    repo: 'https://github.com/carlosindriago/clinicalyx',
    gallery: [
      {
        src: '/projects/clinicalyx-dashboard.webp',
        alt: 'SaaS Medical Suite Dashboard',
        technicalDescription: 'Dashboard principal del médico (Tenant). Valida la carga inicial del sistema de agendamiento y el monitor de estado de seguridad que confirma la activación de Row-Level Security (RLS) en tiempo real para el aislamiento de datos.'
      },
      {
        src: '/projects/clinicalyx-directory.webp',
        alt: 'Directorio de Pacientes y Blind Indexing',
        technicalDescription: 'Motor de búsqueda de pacientes. Demuestra la implementación de Blind Indexing (HMAC-SHA256): debido a que los datos personales (PII) están encriptados con AES-256 en reposo, las búsquedas se realizan comparando hashes exactos, garantizando seguridad absoluta sin sacrificar la operatividad del directorio.'
      },
      {
        src: '/projects/clinicalyx-patient-record.webp',
        alt: 'Expediente Clínico y Datos Demográficos',
        technicalDescription: 'Vista de la Historia Clínica Electrónica (EHR). Muestra la decodificación segura en memoria de los datos demográficos y el historial de consultas del paciente, asegurando que la información de salud protegida (PHI) nunca persista en texto plano en la base de datos.'
      },
      {
        src: '/projects/clinicalyx-appointments.webp',
        alt: 'Gestor de Citas Médicas',
        technicalDescription: 'Módulo de agendamiento diario. Expone la estructura de datos relacional para el manejo de estados de citas (Confirmado, Pendiente, Cancelado) vinculados criptográficamente al ID del médico y del paciente, respetando el modelo de seguridad HIPAA.'
      }
    ]
  },
  {
    title: 'Kartenant ERP',
    problem: 'El ERP debía servir a múltiples empresas sin mezclar datos, manteniendo operación estable y una base flexible para nuevos módulos.',
    decision: 'Implementé una arquitectura SaaS database-per-tenant con Laravel, PostgreSQL y una capa de servicios para separar dominio, operación and orquestación landlord.',
    impact: 'Aislamiento fuerte entre clientes, menor riesgo operativo y una estructura más mantenible para incorporar nuevos flujos de negocio.',
    tags: ['PHP 8.2', 'Laravel 11', 'PostgreSQL', 'Database-per-Tenant', 'Docker'],
    featured: false,
    image: '/projects/kartenant.webp',
    imageWidth: 1024,
    imageHeight: 461,
    repo: 'https://github.com/carlosindriago/kartenant-erp',
    gallery: [
      {
        src: '/projects/kartenant.webp',
        alt: 'Multi-tenant ERP Dashboard',
        technicalDescription: 'Consola consolidada de administración del ERP. Valida la salud de los múltiples módulos integrados y la segregación de inquilinos en base de datos.'
      },
      {
        src: '/projects/kartenant-db.webp',
        alt: 'Tenant Database Connections',
        technicalDescription: 'Consola de orquestación Landlord de Laravel. Valida las migraciones automáticas y la conexión dinámica a bases de datos aisladas por inquilino.'
      },
      {
        src: '/projects/kartenant-perf.webp',
        alt: 'API Metrics & Resource Load',
        technicalDescription: 'Monitor de consumo de recursos de Docker. Valida latencias bajas y disponibilidad de balanceadores de carga en picos de tráfico operacional.'
      }
    ]
  },
  {
    title: 'TramiFlow CE (SaaS CRM & Workflow Engine)',
    problem: 'Las agencias legales y de consultoría dependen de CRMs genéricos que no soportan flujos de trabajo documentales complejos, exponiendo datos sensibles al procesar archivos de clientes en servidores de terceros.',
    decision: 'Diseñé un CRM multi-tenant utilizando Next.js (App Router) y Supabase, e implementé un motor de manipulación de PDFs 100% client-side (Canvas API/WASM) y Server Actions para validar límites de consumo.',
    impact: 'Garantía de privacidad absoluta (Zero-Trust) al no transmitir documentos sensibles al servidor, con aislamiento estricto mediante políticas PostgreSQL RLS y liberado bajo licencia AGPL-3.0.',
    tags: ['TypeScript', 'Next.js 14', 'PostgreSQL RLS', 'Client-Side Architecture', 'SaaS'],
    featured: false,
    image: '/projects/tramiflow.webp',
    imageWidth: 1024,
    imageHeight: 499,
    repo: 'https://github.com/carlosindriago/tramiflow-ce',
    gallery: [
      {
        src: '/projects/tramiflow.webp',
        alt: 'Workflow Designer & CRM',
        technicalDescription: 'Dashboard principal de seguimiento de trámites y CRM. Valida el estado de expedientes y la automatización de notificaciones del flujo de trabajo.'
      },
      {
        src: '/projects/tramiflow-db.webp',
        alt: 'Client-Side WASM PDF Engine',
        technicalDescription: 'Módulo client-side de firmas y manipulación de PDFs. Valida la privacidad absoluta (Zero-Trust) al procesar y firmar documentos sin subirlos al servidor.'
      },
      {
        src: '/projects/tramiflow-perf.webp',
        alt: 'Supabase RLS & Consumo',
        technicalDescription: 'Trazas de Server Actions y cuotas de consumo. Valida el control estricto de accesos vía RLS de Supabase y límites por suscripción SaaS.'
      }
    ]
  },
  {
    title: 'SpectrusGuard Enterprise',
    problem: 'Sitios WordPress necesitaban protección activa sin degradar la experiencia de usuario ni introducir fricción operativa.',
    decision: 'Diseñé un WAF drop-in de baja latencia, separando bloqueo en tiempo real de analítica UEBA asíncrona basada en señales estadísticas.',
    impact: 'Mitigación de amenazas sin penalizar el rendimiento, con una arquitectura preparada para observar comportamiento y reducir falsos positivos.',
    tags: ['PHP', 'Web Application Firewall', 'UEBA', 'Security Architecture'],
    featured: false,
    image: '/projects/spectrusguard.webp',
    imageWidth: 1024,
    imageHeight: 499,
    repo: 'https://github.com/carlosindriago/SpectrusGuard',
    gallery: [
      {
        src: '/projects/spectrusguard.webp',
        alt: 'WAF Traffic Overview',
        technicalDescription: 'Visualización activa del analizador de tráfico. Valida la mitigación de ataques XSS e inyecciones SQL en tiempo real directamente en la capa PHP.'
      },
      {
        src: '/projects/spectrusguard-db.webp',
        alt: 'UEBA Analytics Console',
        technicalDescription: 'Panel analítico de comportamiento de usuarios. Valida la detección de anomalías y reducción de falsos positivos usando reglas estadísticas no intrusivas.'
      },
      {
        src: '/projects/spectrusguard-perf.webp',
        alt: 'Latency Overhead Monitoring',
        technicalDescription: 'Métrica de sobrecarga en tiempo de respuesta del WAF. Valida que la latencia agregada sea menor a 2ms, garantizando rendimiento del servidor.'
      }
    ]
  },
  {
    title: 'WooSpeed Analytics',
    problem: 'Reportes WooCommerce dependían de consultas costosas sobre datos transaccionales, afectando tiempos de respuesta y operación diaria.',
    decision: 'Creé un motor de proyección analítica asíncrona hacia tablas planas optimizadas, separando lectura analítica del flujo transaccional.',
    impact: 'Consultas hasta 10x más rápidas sin modificar el core del CMS ni comprometer la operación de ventas.',
    tags: ['PHP', 'MySQL', 'Data Projection', 'Database Optimization'],
    featured: false,
    image: '/projects/woospeed.webp',
    imageWidth: 1024,
    imageHeight: 499,
    repo: 'https://github.com/carlosindriago/woospeed',
    gallery: [
      {
        src: '/projects/woospeed.webp',
        alt: 'Sales Analytics Overview',
        technicalDescription: 'Panel general de visualización analítica WooCommerce. Valida el correcto rendimiento de ventas y el estado de carga de las consultas asíncronas.'
      },
      {
        src: '/projects/woospeed-db.webp',
        alt: 'Data Projection Engine',
        technicalDescription: 'Consola de sincronización de proyecciones analíticas. Valida la consistencia de tablas planas optimizadas y la descompresión del flujo transaccional principal.'
      },
      {
        src: '/projects/woospeed-perf.webp',
        alt: 'Database Query Optimization',
        technicalDescription: 'Estadísticas comparativas de latencia de consulta. Valida mejoras de hasta 10x de velocidad en consultas agregadas complejas.'
      }
    ]
  },
  {
    title: 'Ulauncher Docker Extension',
    problem: 'La extensión acumulaba deuda técnica y dependencias antiguas, lo que limitaba compatibilidad con entornos Linux modernos.',
    decision: 'Modernicé la base al Docker SDK 7.x y refactoricé la integración con múltiples emuladores de terminal.',
    impact: 'Herramienta más estable, mantenible y compatible, con menor fricción para usuarios open-source.',
    tags: ['Python', 'Docker SDK', 'Legacy Refactoring'],
    featured: false,
    image: '/projects/ulauncher.webp',
    imageWidth: 563,
    imageHeight: 307,
    repo: 'https://github.com/carlosindriago/ulauncher-docker',
    gallery: [
      {
        src: '/projects/ulauncher.webp',
        alt: 'Ulauncher Interface interactuando con el Demonio de Docker',
        technicalDescription: 'Herramienta de productividad DevOps que conecta Ulauncher directamente con el socket del demonio de Docker. Demuestra capacidad de mantenimiento de software Open Source al rescatar un proyecto abandonado (legacy), refactorizando su núcleo para el SDK moderno de Python Docker 7.x+, implementando sanitización estricta de inputs y añadiendo soporte nativo para múltiples emuladores de terminal de Linux.'
      },
      {
        src: '/projects/ulauncher-list.webp',
        alt: 'Ulauncher listando contenedores de Docker activos en tiempo real',
        technicalDescription: 'Interfaz de Ulauncher listando contenedores activos. Demuestra la interacción directa con la API del demonio de Docker a través de sockets UNIX para consultar y filtrar estados de ciclo de vida (`running`/`stopped`) en tiempo real. La arquitectura permite la extracción y visualización amigable de nombres de contenedores (ej. api-gateway, quant-engine) facilitando la gestión de infraestructuras de microservicios complejas directamente desde el launcher.'
      },
      {
        src: '/projects/ulauncher-options.webp',
        alt: 'Panel de gestión de ciclo de vida y red del contenedor',
        technicalDescription: 'Gestión de ciclo de vida y abstracción de metadatos. La extensión extrae y formatea en tiempo real configuraciones complejas (IPs internas, Port Bindings) desde la API de Docker. Destaca la integración profunda a nivel de sistema operativo (OS) para generar subprocesos que adjuntan sesiones TTY interactivas (ej. docker exec) y flujos de logs directamente en el emulador de terminal configurado por el usuario (ej. Alacritty), optimizando drásticamente la Experiencia del Desarrollador (DX).'
      }
    ]
  },
  {
    title: 'Open Graphic Tablet Configurator',
    problem: 'Configurar tabletas Wacom en Linux/X11 era frágil, manual y propenso a romperse en setups multi-monitor.',
    decision: 'Combiné reglas udev para detección persistente de hardware con un dashboard Electron para automatizar perfiles y ajustes.',
    impact: 'Menos configuración manual, experiencia más consistente y reducción de errores en entornos de trabajo complejos.',
    tags: ['TypeScript', 'Electron', 'Shell Scripting', 'X11 Architecture'],
    featured: false,
    image: '/projects/open-tablet-main.webp',
    imageWidth: 1000,
    imageHeight: 700,
    repo: 'https://github.com/carlosindriago/open-tablet-configurator',
    gallery: [
      {
        src: '/projects/open-tablet-main.webp',
        alt: 'Dashboard Electron para configuración de hardware X11',
        technicalDescription: 'Dashboard Arquitectónico (Electron/Node.js) para la orquestación de periféricos en servidores gráficos X11. Implementa persistencia a nivel de hardware mediante reglas udev personalizadas (Vendor ID 056a) y sondeo dinámico del entorno gráfico (vía xrandr y xsetwacom). La arquitectura establece un puente IPC (Inter-Process Communication) estricto que traduce interacciones de UI modernas en ejecuciones seguras de scripts bash de bajo nivel, calculando en tiempo real matrices de transformación geométrica para entornos multi-monitor y renderizando curvas de presión vectoriales (SVG).'
      },
      {
        src: '/projects/open-tablet-mapping.webp',
        alt: 'Mapeo de matrices multi-monitor y visualización de curvas de presión',
        technicalDescription: 'Motor de Mapeo Geométrico y Curvas de Presión. Resuelve la distorsión de relación de aspecto (aspect ratio) en X11 automatizando el cálculo de la Matriz de Transformación de Coordenadas mediante el cruce de topología xrandr y geometría del hardware. Adicionalmente, abstrae la configuración matemática de curvas de Bezier de xsetwacom hacia perfiles de sensibilidad visuales y predefinidos, mejorando drásticamente la UX para artistas digitales.'
      },
      {
        src: '/projects/open-tablet-buttons.webp',
        alt: 'Orquestación de eventos de hardware y botones del stylus',
        technicalDescription: 'Motor de Mapeo de Eventos (Input Events). Abstrae la compleja sintaxis de asignación del servidor X11, interceptando las señales físicas del hardware (botones del stylus) y traduciéndolas dinámicamente a eventos de puntero del sistema operativo. Garantiza una propagación limpia de las interrupciones hacia software de grado profesional (Krita, GIMP) evitando conflictos en la capa de aplicación.'
      }
    ]
  },
  {
    title: 'TuxKeysToys',
    problem: 'El remapeo de teclas en Linux podía afectar periféricos externos y generar configuraciones difíciles de aislar.',
    decision: 'Construí una utilidad gráfica que usa keyd y hardware IDs para aplicar remapeos solo al teclado integrado.',
    impact: 'Personalización precisa del entorno sin efectos colaterales sobre otros dispositivos.',
    tags: ['Python', 'Linux Kernel', 'Hardware Integration', 'GUI'],
    featured: false,
    image: '/projects/tuxkeystoys.webp',
    imageWidth: 684,
    imageHeight: 636,
    repo: 'https://github.com/carlosindriago/tuxkeystoys',
    gallery: [
      {
        src: '/projects/tuxkeystoys.webp',
        alt: 'Interfaz CustomTkinter para Keyd (Manipulación de Kernel)',
        technicalDescription: 'Utilidad gráfica que abstrae la manipulación de interrupciones de hardware a nivel de kernel (vía keyd). La arquitectura implementa detección dinámica de firmas de hardware para garantizar que el remapeo de evdev aplique exclusivamente al teclado físico del portátil, previniendo alteraciones en periféricos USB o Bluetooth externos. Interfaz construida con CustomTkinter bajo patrón MVC estricto.'
      },
      {
        src: '/projects/tuxkeystoys-keyboard.webp',
        alt: 'Teclado Virtual Interactivo para Bootstrap de Configuración',
        technicalDescription: 'Interfaz de Teclado Virtual Interactivo. Soluciona el problema crítico de "bootstrap" de configuración al permitir al usuario seleccionar visualmente las teclas físicas dañadas mediante interacciones de ratón, sin requerir la entrada física del hardware roto. Implementa gestión de estado compleja para la captura de eventos mixtos y un "Modo Combinación" (Chords) para remapeos complejos.'
      }
    ]
  }
];
