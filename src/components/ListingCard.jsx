import { MapPin, Clock, Phone, Tag, User, ChevronRight } from 'lucide-react'

const TYPE_CONFIG = {
  meistras: { badge: 'badge--meistras', label: 'Meistras' },
  klientas: { badge: 'badge--klientas', label: 'Klientas' },
  pagalbininkas: { badge: 'badge--pagalbininkas', label: 'Pagalbininkas' },
}

export default function ListingCard({ listing, onClick }) {
  const config = TYPE_CONFIG[listing.type]

  return (
    <article
      onClick={() => onClick(listing)}
      className="glass-card rounded-2xl p-5 cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-3">
        <span className={`badge ${config.badge}`}>{config.label}</span>
        <span className="text-xs text-gray-400 flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {listing.createdAt}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
        {listing.title}
      </h3>

      <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
        {listing.description}
      </p>

      <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
        <span className="flex items-center gap-1">
          <User className="w-3.5 h-3.5 text-gray-400" />
          {listing.author}
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-gray-400" />
          {listing.location}
        </span>
        <span className="flex items-center gap-1">
          <Tag className="w-3.5 h-3.5 text-gray-400" />
          {listing.specialization}
        </span>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <span className="text-sm font-semibold text-indigo-600">{listing.price}</span>
        <span className="text-xs text-gray-400 flex items-center gap-0.5 group-hover:text-indigo-500 transition-colors">
          Plačiau <ChevronRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  )
}
