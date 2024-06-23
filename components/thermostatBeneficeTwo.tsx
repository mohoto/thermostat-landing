import Image from 'next/image'
import { FaUserLock } from "react-icons/fa";
import localFont from "next/font/local";

const icomoonFont = localFont({
    src: "../fonts/icomoon.ttf",
  });

type Props = {}

function ThermostatBeneficeTwo({}: Props) {
  return (
    <section className="lg:py-20 py-10">
        <div className="container">
            <div className="grid lg:grid-cols-2 lg:gap-x-32 gap-y-16 lg:gap-y-0">
                <div className="flex flex-col gap-y-8">
                    <h2 className="2xl:text-3xl font-bold text-2xl">Les avantages des thermostats connectés</h2>
                    <div className="flex gap-x-2">
                        <div>
                            <div style={icomoonFont.style} className="text-liia-orange text-4xl">j</div>
                        </div>
                        <div>
                            <h3 className="!font-semibold mb-2 lg:text-xl text-lg">Des économies d'énergie significatives</h3>
                            <p className="mb-0">Réduisez vos factures de chauffage de plus de 25% en ajustant la température en fonction de vos besoins réels et des conditions météorologiques.</p>
                        </div>
                    </div>
                    <div className="flex gap-x-2">
                        <div>
                            <div style={icomoonFont.style} className="text-liia-orange text-4xl">p</div>
                        </div>
                        <div>
                            <h3 className="!font-semibold mb-2 lg:text-xl text-lg">Un confort amélioré</h3>
                            <p className="mb-0">Programmez votre chauffage en fonction de vos horaires de présence pour un confort optimal sans gaspillage d'énergie.</p> 
                        </div>
                    </div>
                    <div className="flex gap-x-2">
                        <div>
                            <div style={icomoonFont.style} className="text-liia-orange text-4xl">h</div>
                        </div>
                        <div>
                            <h3 className="!font-semibold mb-2 lg:text-xl text-lg">Le contrôle à distance</h3>
                            <p className="mb-0">Gérez votre chauffage de n'importe où via une application intuitive, ajustez les paramètres à tout moment pour une flexibilité maximale.</p>
                        </div>
                    </div>
                    <div className="flex gap-x-2">
                        <div>
                            <div style={icomoonFont.style} className="text-liia-orange text-4xl">n</div>
                        </div>
                        <div>
                            <h3 className="!font-semibold mb-2 lg:text-xl text-lg">Une installation sans travaux</h3>
                            <p className="mb-0">L’installation est généralement réalisée en moins de 2 heures et entièrement gratuite. Les thermostats connectés s'intègrent facilement dans votre logement sans travaux​​​ lourds​.</p>
                        </div>
                    </div>
                </div>
                <Image
                src="/images/modeles-thermostats-2.png"
                alt="Illustration des thermostats connectés gaz/fioul/pompe à chaleur et électrique"
                className="rounded-xl place-self-end"
                width={450}
                height={450}
                />
            </div>
        </div>
    </section>
  )
}

export default ThermostatBeneficeTwo