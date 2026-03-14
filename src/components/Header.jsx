import { Megaphone, Plus } from 'lucide-react'

export default function Header({ onNewListing }) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-200">
            <Megaphone className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              SkelbimųWeb
            </h1>
            <p className="text-xs text-gray-400 -mt-0.5">Skelbimų lenta</p>
          </div>
        </div>

        <button onClick={onNewListing} className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Naujas skelbimas</span>
          <span className="sm:hidden">Naujas</span>
        </button>
      </div>
    </header>
  )
}
