import { useState, useMemo } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FilterBar from './components/FilterBar'
import ListingCard from './components/ListingCard'
import ListingDetail from './components/ListingDetail'
import NewListingModal from './components/NewListingModal'
import { SAMPLE_LISTINGS } from './data'

function App() {
  const [listings, setListings] = useState(SAMPLE_LISTINGS)
  const [activeFilter, setActiveFilter] = useState('visi')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedListing, setSelectedListing] = useState(null)
  const [showNewForm, setShowNewForm] = useState(false)

  const filteredListings = useMemo(() => {
    let result = listings

    if (activeFilter !== 'visi') {
      result = result.filter((l) => l.type === activeFilter)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (l) =>
          l.title.toLowerCase().includes(q) ||
          l.description.toLowerCase().includes(q) ||
          l.author.toLowerCase().includes(q) ||
          l.location.toLowerCase().includes(q) ||
          l.specialization.toLowerCase().includes(q)
      )
    }

    return result
  }, [listings, activeFilter, searchQuery])

  const handleNewListing = (listing) => {
    setListings((prev) => [listing, ...prev])
    setShowNewForm(false)
  }

  const counts = useMemo(() => ({
    visi: listings.length,
    meistras: listings.filter((l) => l.type === 'meistras').length,
    klientas: listings.filter((l) => l.type === 'klientas').length,
    pagalbininkas: listings.filter((l) => l.type === 'pagalbininkas').length,
  }), [listings])

  return (
    <div className="min-h-screen">
      <Header onNewListing={() => setShowNewForm(true)} />
      <HeroSection />

      <FilterBar
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Rasta skelbimų: <span className="font-semibold text-gray-700">{filteredListings.length}</span>
          </p>
          <div className="hidden sm:flex gap-4 text-xs text-gray-400">
            <span>Meistrai: {counts.meistras}</span>
            <span>Klientai: {counts.klientas}</span>
            <span>Pagalbininkai: {counts.pagalbininkas}</span>
          </div>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredListings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
                onClick={setSelectedListing}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Skelbimų nerasta</h3>
            <p className="text-gray-400">Pabandykite pakeisti filtrus arba paieškos žodžius</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-center">
          <p className="text-sm text-gray-400">
            © 2026 SkelbimųWeb — Skelbimų lenta meistrams, klientams ir pagalbininkams
          </p>
        </div>
      </footer>

      {/* Modals */}
      {selectedListing && (
        <ListingDetail listing={selectedListing} onClose={() => setSelectedListing(null)} />
      )}
      {showNewForm && (
        <NewListingModal onClose={() => setShowNewForm(false)} onSubmit={handleNewListing} />
      )}
    </div>
  )
}

export default App
