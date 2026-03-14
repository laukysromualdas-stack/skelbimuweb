import { Users, Wrench, HandHelping, LayoutGrid, Search } from 'lucide-react'

const FILTERS = [
  { id: 'visi', label: 'Visi', icon: LayoutGrid },
  { id: 'meistras', label: 'Meistrai', icon: Wrench },
  { id: 'klientas', label: 'Klientai', icon: Users },
  { id: 'pagalbininkas', label: 'Pagalbininkai', icon: HandHelping },
]

export default function FilterBar({ activeFilter, onFilterChange, searchQuery, onSearchChange }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onFilterChange(id)}
              className={`filter-chip flex items-center gap-2 ${
                activeFilter === id ? 'filter-chip--active' : 'filter-chip--inactive'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Ieškoti skelbimų..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="input-modern pl-10 !py-2.5 text-sm"
          />
        </div>
      </div>
    </div>
  )
}
