import Hero from "@/components/hero"
import Formulaire from "@/components/formulaire";
import ThermostatConnecte from "@/components/thermostatConnecte";
import ThermostatBenefice from "@/components/thermostatBenefice";
import PrimeEtat from "@/components/primeEtat";
import ThermostatBeneficeTwo from "@/components/thermostatBeneficeTwo";
import Etapes from "@/components/etapes";
import Application from "@/components/application";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
        <Hero />
        <Formulaire />
        <ThermostatConnecte />
        <ThermostatBeneficeTwo />
        <PrimeEtat />
        <Etapes />
        <Application />
        <Faq />
        <Footer />
    </main>
  );
}
