import { Globe } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#fcfaf7]/95 backdrop-blur-sm z-50 border-b border-[#bdaaa1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Shiftly Logo" className="h-10 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#freelances"
              className="text-[#503342] hover:text-[#782478] transition-colors"
            >
              Freelances
            </a>
            <a
              href="#etablissements"
              className="text-[#503342] hover:text-[#782478] transition-colors"
            >
              Établissements
            </a>
            <a
              href="#ambassadeurs"
              className="text-[#503342] hover:text-[#782478] transition-colors"
            >
              Ambassadeurs
            </a>
            <button className="flex items-center gap-2 text-[#503342] hover:text-[#782478] transition-colors">
              <Globe className="w-4 h-4" />
              FR
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block px-4 py-2 text-[#782478] hover:text-[#cc9933] transition-colors font-medium">
              Connexion
            </button>
            <button className="px-6 py-2 bg-[#782478] text-[#fcfaf7] rounded-lg hover:bg-[#cc9933] transition-all transform hover:scale-105">
              Commencer
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
