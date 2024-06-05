import Image from 'next/image'

type Props = {}

function ThermostatConnecte({}: Props) {
  return (
    <section className="pb-6 pt-28">
        <div className="container">
            <div className="grid lg:grid-cols-2 lg:gap-x-32 lg:place-content-between">
                <div className="">
                    <Image
                    src="/images/liia-energies-thermostat-connecte.png"
                    alt="Installation de thermostat connectés gratuit"
                    className="rounded-xl"
                    width={450}
                    height={450}
                    />
                </div>
                <div>
                    <h2 className="2xl:text-3xl font-bold mb-8 lg:text-2xl text-xl">Pourquoi s’équiper de thermostats connectés ?</h2>
                    <p>Un thermostat connecté est <span className="font-semibold">un dispositif intelligent qui vous permet de contrôler la température de chaque radiateur</span> de votre maison à distance via une application sur votre smartphone ou tablette. Il optimise la consommation énergétique en ajustant automatiquement la température selon vos habitudes et vos besoins. Il s’adapte sur tous types de mode de chauffage : <span className="font-semibold">gaz, fioul, pompe à chaleur et électrique</span>.</p>
                    <h3 className="2xl:text-2xl !font-semibold mb-4 lg:text-xl text-lg mt-10">Une obligation à partir de janvier 2027</h3>
                    <p>Le décret n° 2023-4441 <span className="font-semibold">oblige les foyers à installer des thermostats qui régulent automatiquement la température de chaque pièce</span> pour éviter le gaspillage d'énergie. Adoptée le 7 juin 2023, cette mesure entrera en vigueur le 1er janvier 2027, laissant aux ménages moins de 3 ans pour se conformer à cette nouvelle réglementation visant à réaliser des économies d'énergie.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ThermostatConnecte 