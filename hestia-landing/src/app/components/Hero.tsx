import { ArrowRight, Users, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              La nouvelle façon de recruter dans l&apos;
              <span className="text-[#FF5900]">Hôtellerie-Restauration</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Hestia connecte les freelances qualifiés et les établissements en
              un clic. Rapide, fiable et 100% flexible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-[#FF5900] text-white rounded-lg hover:bg-[#CC9933] transition-all transform hover:scale-105 flex items-center justify-center gap-2 font-semibold text-lg">
                Découvrir la plateforme
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-white border-2 border-[#FF5900] text-[#FF5900] rounded-lg hover:bg-[#FF5900] hover:text-white transition-all transform hover:scale-105 flex items-center justify-center gap-2 font-semibold">
                <Users className="w-5 h-5" />
                Je suis freelance
              </button>
              <button className="px-8 py-4 bg-white border-2 border-[#CC9933] text-[#CC9933] rounded-lg hover:bg-[#CC9933] hover:text-white transition-all transform hover:scale-105 flex items-center justify-center gap-2 font-semibold">
                <Building2 className="w-5 h-5" />
                Je recrute
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-[#FF5900] to-[#CC9933] p-12 flex items-center justify-center">
                <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF5900] to-[#CC9933]"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-gray-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                    </div>
                    <div className="flex gap-3 pt-4">
                      <div className="flex-1 h-12 bg-[#FF5900] rounded-lg"></div>
                      <div className="flex-1 h-12 bg-gray-100 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#CC9933] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FF5900] rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
