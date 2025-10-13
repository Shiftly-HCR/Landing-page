import {
  Heart,
  Crown,
  FileText,
  GraduationCap,
  PiggyBank,
  ArrowRight,
} from "lucide-react";

export default function ForFreelancers() {
  const features = [
    {
      icon: Heart,
      title: "Matching type Tinder",
      description: "Postulez en un swipe aux missions qui vous correspondent.",
    },
    {
      icon: Crown,
      title: "Accès Premium anticipé",
      description: "Débloquez les meilleures missions en avant-première.",
    },
    {
      icon: FileText,
      title: "CV uniforme et suivi",
      description:
        "Profil standardisé, suivi de missions et facturation intégrée.",
    },
    {
      icon: GraduationCap,
      title: "Micro-learning",
      description: "Formations courtes : soft skills, hygiène, langues.",
    },
    {
      icon: PiggyBank,
      title: "Gestion administrative",
      description: "Mutuelle et documents comptables simplifiés.",
    },
  ];

  return (
    <section
      id="freelances"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-[#FF5900]/10 rounded-full mb-6">
              <span className="text-[#FF5900] font-semibold">
                Pour les freelances
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Travaillez avec plus de liberté.
            </h2>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Accédez aux meilleures opportunités, gérez votre activité en toute
              simplicité et développez vos compétences.
            </p>

            <button className="group px-8 py-4 bg-[#FF5900] text-white rounded-lg hover:bg-[#CC9933] transition-all transform hover:scale-105 flex items-center gap-2 font-semibold text-lg">
              Rejoindre Hestia Freelance
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-white border border-gray-100 hover:border-[#FF5900] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-[#FF5900]/10 flex items-center justify-center group-hover:bg-[#FF5900] transition-colors">
                    <feature.icon className="w-6 h-6 text-[#FF5900] group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
