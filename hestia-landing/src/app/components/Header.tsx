import { Flame, Globe } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Flame className="w-8 h-8 text-[#FF5900]" />
            <span className="text-2xl font-bold text-gray-900">Hestia</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#freelances"
              className="text-gray-600 hover:text-[#FF5900] transition-colors"
            >
              Freelances
            </a>
            <a
              href="#etablissements"
              className="text-gray-600 hover:text-[#FF5900] transition-colors"
            >
              Établissements
            </a>
            <a
              href="#ambassadeurs"
              className="text-gray-600 hover:text-[#FF5900] transition-colors"
            >
              Ambassadeurs
            </a>
            <button className="flex items-center gap-2 text-gray-600 hover:text-[#FF5900] transition-colors">
              <Globe className="w-4 h-4" />
              FR
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block px-4 py-2 text-[#FF5900] hover:text-[#CC9933] transition-colors font-medium">
              Connexion
            </button>
            <button className="px-6 py-2 bg-[#FF5900] text-white rounded-lg hover:bg-[#CC9933] transition-all transform hover:scale-105">
              Commencer
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
