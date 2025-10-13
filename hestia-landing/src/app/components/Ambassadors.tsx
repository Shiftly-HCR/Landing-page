import { Star, Network, TrendingUp, ArrowRight } from "lucide-react";

export default function Ambassadors() {
  const benefits = [
    {
      icon: Star,
      title: "Représentez la marque",
      description: "Devenez l'ambassadeur Hestia de votre région",
    },
    {
      icon: Network,
      title: "Développez votre réseau",
      description: "Connectez-vous avec les acteurs du secteur HCR",
    },
    {
      icon: TrendingUp,
      title: "Gagnez des commissions",
      description: "Rémunération attractive sur vos apports",
    },
  ];

  return (
    <section
      id="ambassadeurs"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FF5900] to-[#CC9933]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Devenez Ambassadeur Hestia
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Partagez votre passion du métier, développez votre réseau et gagnez
            des commissions en représentant la marque dans votre région.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-white/90 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group px-8 py-4 bg-white text-[#FF5900] rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center gap-2 font-semibold text-lg mx-auto">
            En savoir plus
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
