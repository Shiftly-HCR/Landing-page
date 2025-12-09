import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import ForFreelancers from "./components/ForFreelancers";
import ForEstablishments from "./components/ForEstablishments";
import PricingModel from "./components/PricingModel";
import Ambassadors from "./components/Ambassadors";
import Stats from "./components/Stats";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-[#fcfaf7]">
      <Header />
      <Hero />
      <ProblemSolution />
      <ForFreelancers />
      <ForEstablishments />
      <PricingModel />
      <Ambassadors />
      <Stats />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
