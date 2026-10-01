import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../../config/company'

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  )
}
