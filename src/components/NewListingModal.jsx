import { useState } from 'react'
import { X, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react'
import { CATEGORIES, SPECIALIZATIONS } from '../data'

const STEPS = ['category', 'details']

export default function NewListingModal({ onClose, onSubmit }) {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    type: '',
    title: '',
    description: '',
    author: '',
    location: '',
    specialization: '',
    phone: '',
    price: '',
  })

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.type || !form.title || !form.description || !form.author) return
    onSubmit({
      ...form,
      id: Date.now(),
      createdAt: new Date().toISOString().split('T')[0],
    })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-500" />
            <h2 className="text-xl font-bold text-gray-900">
              {step === 0 ? 'Ko ieškote?' : 'Skelbimo informacija'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="flex gap-2 mb-8">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                i <= step
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        {step === 0 && (
          <div>
            <p className="text-gray-500 mb-6 text-sm">
              Pasirinkite, kas geriausiai apibūdina jūsų skelbimą
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {CATEGORIES.map(({ id, label, emoji, description }) => (
                <button
                  key={id}
                  onClick={() => update('type', id)}
                  className={`category-card ${form.type === id ? 'category-card--selected' : ''}`}
                >
                  <div className="text-4xl mb-3">{emoji}</div>
                  <div className="font-semibold text-gray-900 mb-1">{label}</div>
                  <div className="text-xs text-gray-500">{description}</div>
                </button>
              ))}
            </div>

            <button
              onClick={() => form.type && setStep(1)}
              disabled={!form.type}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Toliau <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {step === 1 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Pavadinimas</label>
              <input
                className="input-modern"
                placeholder="Pvz.: Profesionalus santechnikas Vilniuje"
                value={form.title}
                onChange={(e) => update('title', e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Aprašymas</label>
              <textarea
                className="input-modern min-h-[100px] resize-none"
                placeholder="Plačiau aprašykite savo skelbimą..."
                value={form.description}
                onChange={(e) => update('description', e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Vardas</label>
                <input
                  className="input-modern"
                  placeholder="Jūsų vardas"
                  value={form.author}
                  onChange={(e) => update('author', e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Telefonas</label>
                <input
                  className="input-modern"
                  type="tel"
                  placeholder="+370 6XX XXXXX"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Vietovė</label>
                <input
                  className="input-modern"
                  placeholder="Pvz.: Vilnius"
                  value={form.location}
                  onChange={(e) => update('location', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Kaina</label>
                <input
                  className="input-modern"
                  placeholder="Pvz.: 25€/val."
                  value={form.price}
                  onChange={(e) => update('price', e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Specializacija</label>
              <div className="flex flex-wrap gap-2">
                {SPECIALIZATIONS.map((spec) => (
                  <button
                    key={spec}
                    type="button"
                    onClick={() => update('specialization', spec)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                      form.specialization === spec
                        ? 'bg-indigo-100 border-indigo-300 text-indigo-700 font-medium'
                        : 'bg-white border-gray-200 text-gray-500 hover:border-indigo-200 hover:text-indigo-500'
                    }`}
                  >
                    {spec}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(0)}
                className="flex-1 py-2.5 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Atgal
              </button>
              <button
                type="submit"
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                Paskelbti <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
