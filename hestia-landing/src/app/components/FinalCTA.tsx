import { Users, Building2 } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FF5900] via-[#FF5900] to-[#CC9933] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Prêt à rejoindre la révolution Hestia ?
        </h2>

        <p className="text-xl text-white/90 mb-12 leading-relaxed">
          Que vous soyez freelance en quête de liberté ou établissement à la
          recherche de talents, Hestia est fait pour vous.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="group px-10 py-5 bg-white text-[#FF5900] rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center gap-3 font-bold text-lg shadow-2xl">
            <Users className="w-6 h-6" />
            Je suis freelance
          </button>

          <button className="group px-10 py-5 bg-[#CC9933] text-white rounded-lg hover:bg-[#CC9933]/90 transition-all transform hover:scale-105 flex items-center justify-center gap-3 font-bold text-lg shadow-2xl border-2 border-white/20">
            <Building2 className="w-6 h-6" />
            Je recrute
          </button>
        </div>
      </div>
    </section>
  );
}
