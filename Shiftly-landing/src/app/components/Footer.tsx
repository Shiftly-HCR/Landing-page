import { Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Shiftly Logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-lg mb-6 italic">
              Hospitalité. Fiabilité. Liberté.
            </p>
            <p className="text-gray-400 leading-relaxed">
              La plateforme qui connecte les talents du secteur
              Hôtellerie-Restauration avec les établissements en quête de
              flexibilité et de qualité.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Liens utiles</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#freelances"
                  className="text-gray-400 hover:text-[#FF5900] transition-colors"
                >
                  Pour les freelances
                </a>
              </li>
              <li>
                <a
                  href="#etablissements"
                  className="text-gray-400 hover:text-[#FF5900] transition-colors"
                >
                  Pour les établissements
                </a>
              </li>
              <li>
                <a
                  href="#ambassadeurs"
                  className="text-gray-400 hover:text-[#FF5900] transition-colors"
                >
                  Devenir ambassadeur
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@Shiftly.fr"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#FF5900] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contact@Shiftly.fr
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#FF5900] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Shiftly. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF5900] transition-colors"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF5900] transition-colors"
              >
                Confidentialité
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF5900] transition-colors"
              >
                CGU
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
