import Image from 'next/image'

type Props = {}

function PrimeEtat({}: Props) {
  return (
    <section className="py-12 bg-liia-clair">
        <div className="container">
            <div className="grid lg:grid-cols-2 lg:gap-x-32 lg:place-content-center lg:place-items-center">
                <div>
                    <Image
                    src="/images/coup-de-pouce-thermostat-blanc.png"
                    alt="Programme de l'Etat Coup de Pouce thermostats connectés"
                    width={300}
                    height={300}
                    priority
                        />
                </div>
                <div>
                    <h2 className="2xl:text-3xl font-bold mb-8 lg:text-2xl text-xl">Profitez de l'aide de l'État pour installer vos thermostats</h2>
                    <h3 className="2xl:text-2xl !font-semibold mb-4 lg:text-xl text-lg mt-10 text-liia-orange">La prime <span className="font-bold">"Coup de Pouce Chauffage"</span></h3>
                    <p>Il s'agit d'une aide de <span className="font-semibold">l'État qui finance à 100% l'installation de thermostats connectés jusqu'au 31 décembre 2024</span>. Cette aide est accessible à tous, <span className="font-semibold">sans conditions de revenus</span>, et permet de réduire les coûts d'installation à zéro.</p>    
                </div>
            </div>
        </div>
    </section>
  )
}

export default PrimeEtat