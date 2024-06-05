import Image from 'next/image'
import { FaUserLock } from "react-icons/fa";

type Props = {}

function ThermostatBeneficeTwo({}: Props) {
  return (
    <section className="py-20">
        <div className="container">
            <div className="grid lg:grid-cols-2">
                <h2 className="2xl:text-3xl font-bold mb-8 lg:text-2xl text-xl">Quelles sont les avantages des thermostats connectés ?</h2>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-x-32 lg:place-content-betwee, lg:place-items-center">
                <div className="flex flex-col gap-y-8">
                    <div className="flex gap-x-2">
                        <div className="p-2">
                            <FaUserLock className="h-8 w-8 text-liia-orange"/>
                        </div>
                        <div>
                            <h3 className="!font-semibold mb-2 lg:text-xl text-lg">Des économies d'énergie significatives</h3>
                            <p className="mb-0">Réduisez vos factures de chauffage de plus de 15% en ajustant la température en fonction de vos besoins réels et des conditions météorologiques.</p>
                        </div>
                    </div>
                    <div className="flex gap-x-2">
                        <div className="p-1">
                            <FaUserLock className="h-8 w-8 text-liia-orange"/>
                        </div>
                        <div>
                            <h3 className="!font-semibold mb-2 lg:text-xl text-lg">Un confort amélioré</h3>
                            <p className="mb-0">Programmez votre chauffage en fonction de vos horaires de présence pour un confort optimal sans gaspillage d'énergie.</p> 
                        </div>
                    </div>
                    <div className="flex gap-x-2">
                        <div className="p-1">
                            <FaUserLock className="h-8 w-8 text-liia-orange"/>
                        </div>
                        <div>
                            <h3 className="!font-semibold mb-2 lg:text-xl text-lg">Le contrôle à distance</h3>
                            <p className="mb-0">Gérez votre chauffage de n'importe où via une application intuitive, ajustez les paramètres à tout moment pour une flexibilité maximale.</p>
                        </div>
                    </div>
                    <div className="flex gap-x-2">
                        <div className="p-1">
                            <FaUserLock className="h-8 w-8 text-liia-orange"/>
                        </div>
                        <div>
                            <h3 className="!font-semibold mb-2 lg:text-xl text-lg">Une installation sans travaux</h3>
                            <p className="mb-0">L’installation est généralement réalisée en moins de 2 heures et elle est entièrement gratuite. Les thermostats connectés s'intègrent facilement dans votre logement sans travaux​​​​.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                    src="/images/modeles-thermostats.png"
                    alt="Installation de thermostat connectés gratuit"
                    className="rounded-xl"
                    width={450}
                    height={450}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ThermostatBeneficeTwo