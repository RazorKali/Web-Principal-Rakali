import {
  Activity,
  Boxes,
  Cable,
  CloudCog,
  Code2,
  Database,
  Headphones,
  Network,
  SearchCheck,
  Server,
  ShieldCheck,
  Smartphone,
  Wrench,
} from 'lucide-react'

export const services = [
  {
    title: 'Desarrollo de software',
    description: 'Aplicaciones y sistemas pensados para procesos reales de trabajo.',
    icon: Code2,
    items: [
      'Aplicaciones web',
      'Aplicaciones móviles',
      'Sistemas empresariales',
      'Sistemas de inventario',
      'Sistemas de ventas',
      'Automatización de procesos',
      'APIs e integraciones',
      'Bases de datos',
      'Dashboards',
    ],
  },
  {
    title: 'Redes e infraestructura',
    description: 'Implementación y ordenamiento de conectividad para empresas.',
    icon: Network,
    items: [
      'Instalación de redes LAN',
      'Redes Wi-Fi',
      'Cableado estructurado',
      'Instalación de puntos de red',
      'Configuración de switches',
      'Configuración de routers',
      'Diagnóstico de conectividad',
      'Organización de infraestructura',
    ],
  },
  {
    title: 'Soporte informático',
    description: 'Asistencia cercana para mantener equipos y usuarios operando.',
    icon: Headphones,
    items: [
      'Soporte presencial y remoto',
      'Mantenimiento preventivo',
      'Mantenimiento correctivo',
      'Diagnóstico de computadores',
      'Instalación de sistemas operativos',
      'Configuración de software',
      'Configuración de impresoras',
      'Gestión de activos tecnológicos',
    ],
  },
  {
    title: 'Servidores y servicios',
    description: 'Servicios locales y en nube preparados para operaciones críticas.',
    icon: Server,
    items: [
      'Configuración de servidores',
      'VPS',
      'Bases de datos',
      'Servicios web',
      'Respaldos',
      'Implementaciones locales',
      'Implementaciones en nube',
    ],
  },
  {
    title: 'Monitoreo',
    description: 'Visibilidad sobre equipos, impresoras, redes y servicios.',
    icon: Activity,
    items: [
      'Monitoreo de computadores',
      'Monitoreo de impresoras',
      'Monitoreo de dispositivos de red',
      'Dashboards personalizados',
      'Alertas',
      'Reportes',
    ],
  },
  {
    title: 'Consultoría TI',
    description: 'Acompañamiento para tomar mejores decisiones tecnológicas.',
    icon: SearchCheck,
    items: [
      'Evaluación tecnológica',
      'Levantamiento de requerimientos',
      'Recomendación de hardware',
      'Recomendación de software',
      'Digitalización de procesos',
      'Planificación de proyectos',
    ],
  },
]

export const softwareHighlights = [
  { label: 'Aplicaciones web', icon: CloudCog },
  { label: 'Bases de datos', icon: Database },
  { label: 'Inventario y ventas', icon: Boxes },
  { label: 'Acceso móvil', icon: Smartphone },
]

export const inventoryFeatures = [
  'Gestión de productos',
  'Control de stock',
  'Entradas y salidas',
  'Historial de movimientos',
  'Gestión de usuarios',
  'Reportes',
  'Dashboard',
  'Acceso desde computador y dispositivos móviles',
  'Arquitectura preparada para nuevas integraciones',
]

export const whyChooseUs = [
  {
    title: 'Soluciones a medida',
    text: 'Cada empresa funciona diferente. Las soluciones pueden adaptarse a los procesos del cliente.',
    icon: Wrench,
  },
  {
    title: 'Soporte cercano',
    text: 'Acompañamiento durante y después de la implementación.',
    icon: Headphones,
  },
  {
    title: 'Soluciones escalables',
    text: 'Los sistemas pueden incorporar nuevas funcionalidades conforme crece la empresa.',
    icon: ShieldCheck,
  },
  {
    title: 'Servicio integral',
    text: 'Software, infraestructura, redes y soporte desde un mismo proveedor tecnológico.',
    icon: Cable,
  },
]
