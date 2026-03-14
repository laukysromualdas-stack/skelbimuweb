import { X, MapPin, Clock, Phone, Tag, User } from 'lucide-react'

const TYPE_CONFIG = {
  meistras: { badge: 'badge--meistras', label: 'Meistras' },
  klientas: { badge: 'badge--klientas', label: 'Klientas' },
  pagalbininkas: { badge: 'badge--pagalbininkas', label: 'Pagalbininkas' },
}

export default function ListingDetail({ listing, onClose }) {
  if (!listing) return null
  const config = TYPE_CONFIG[listing.type]

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <span className={`badge ${config.badge}`}>{config.label}</span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">{listing.title}</h2>

        <p className="text-gray-600 leading-relaxed mb-6">{listing.description}</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
              <User className="w-4 h-4 text-indigo-500" />
            </div>
            <span>{listing.author}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-indigo-500" />
            </div>
            <span>{listing.location}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
              <Tag className="w-4 h-4 text-indigo-500" />
            </div>
            <span>{listing.specialization}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
              <Phone className="w-4 h-4 text-indigo-500" />
            </div>
            <span>{listing.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
              <Clock className="w-4 h-4 text-indigo-500" />
            </div>
            <span>{listing.createdAt}</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">Kaina</span>
          <span className="text-lg font-bold text-indigo-600">{listing.price}</span>
        </div>

        <a
          href={`tel:${listing.phone}`}
          className="btn-primary w-full mt-4 flex items-center justify-center gap-2 text-center"
        >
          <Phone className="w-4 h-4" />
          Skambinti
        </a>
      </div>
    </div>
  )
}
