import { FaUserLock } from "react-icons/fa";

type Props = {}

function ThermostatBenefice({}: Props) {
  return (
    <section className="py-28">
        <div className="container">
            <h2 className="2xl:text-3xl font-bold mb-16 lg:text-2xl text-xl text-center">Les avantages des thermostats connectés</h2>
            <div className="grid lg:grid-cols-2">
                <div className="bg-liia-bleue p-8 rounded-tl-3xl text-white">
                    <div className="bg-shikam-degrade p-1 inline-block rounded-md">
                        <FaUserLock className="h-8 w-8 text-white"/>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Économies d'énergie significatives</h3>
                    <p className="font-light mb-0 text-indigo-100">Réduisez vos factures de chauffage de plus de 15% en ajustant la température en fonction de vos besoins réels et des conditions météorologiques.</p>
                </div>
                <div className="bg-liia-clair/10 p-8 rounded-tr-3xl">
                    <div className="bg-shikam-degrade p-1 inline-block rounded-md">
                        <FaUserLock className="h-8 w-8 text-white"/>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-shikam-fonce">Confort amélioré</h3>
                    <p className="font-light mb-0">Programmez votre chauffage en fonction de vos horaires de présence pour un confort optimal sans gaspillage d'énergie.</p>
                </div>
                <div className="bg-liia-clair/10 p-8 rounded-bl-3xl">
                    <div className="bg-shikam-degrade p-1 inline-block rounded-md">
                        <FaUserLock className="h-8 w-8 text-white"/>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-shikam-fonce">Contrôle à distance</h3>
                    <p className="font-light mb-0">Gérez votre chauffage de n'importe où via une application intuitive, ajustez les paramètres à tout moment pour une flexibilité maximale.</p>
                </div>
                <div className="bg-liia-bleue p-8 rounded-br-3xl text-white">
                    <div className="bg-shikam-degrade p-1 inline-block rounded-md">
                        <FaUserLock className="h-8 w-8 text-white"/>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Impact environnemental</h3>
                    <p className="font-light mb-0 text-indigo-100">Contribuez à la transition énergétique en réduisant votre empreinte carbone grâce à une consommation énergétique optimisée.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ThermostatBenefice