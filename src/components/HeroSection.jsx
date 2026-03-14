import { Wrench, Users, HandHelping, ArrowDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/[0.02]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
          Raskite meistrą ar<br className="hidden sm:block" /> pasiūlykite paslaugas
        </h2>
        <p className="text-lg text-indigo-100 mb-10 max-w-xl mx-auto">
          Skelbimų lenta, kurioje meistrai, klientai ir pagalbininkai susiranda vieni kitus
        </p>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          <div className="flex items-center gap-3 text-indigo-100">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
              <Wrench className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">Meistrai</div>
              <div className="text-xs text-indigo-200">Profesionalai</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-indigo-100">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">Klientai</div>
              <div className="text-xs text-indigo-200">Ieško pagalbos</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-indigo-100">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
              <HandHelping className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">Pagalbininkai</div>
              <div className="text-xs text-indigo-200">Pasiruošę padėti</div>
            </div>
          </div>
        </div>

        <div className="mt-12 animate-bounce">
          <ArrowDown className="w-5 h-5 mx-auto text-indigo-200" />
        </div>
      </div>
    </section>
  )
}
