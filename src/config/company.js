export const company = {
  companyName: 'Rakali Soluciones Informáticas',
  brandName: 'RAKALI',
  tagline: 'Soluciones tecnológicas para hacer crecer tu empresa.',
  email: 'contacto@rakalisoluciones.cl',
  phone: '+56 9 0000 0000',
  whatsapp: '56900000000',
  location: 'Chile',
  socialNetworks: {
    linkedin: '',
    instagram: '',
    github: 'https://github.com/RazorKali',
  },
}

export const whatsappMessage =
  'Hola, vi la página de Rakali Soluciones Informáticas y me gustaría solicitar información sobre sus servicios.'

export const getWhatsAppUrl = () =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`
