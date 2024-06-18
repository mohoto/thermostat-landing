import Image from 'next/image'
import { FaRegCheckCircle } from "react-icons/fa";
import chaudiereImage from "@/public/images/thremostats-chaudiere-gaz-fioul.png"
import pacImage from "@/public/images/thremostats-pompe-a-chaleur.png"
import elecImage from "@/public/images/thremostats-radiateur-electrique.png"

type Props = {}

function PrimeEtat({}: Props) {
  return (
    <section className="py-12 bg-liia-clair">
        <div className="container">
            <div className="grid lg:grid-cols-2 lg:gap-x-32 lg:place-content-center lg:place-items-center gap-y-16 lg:gap-y-0">
                <div className="flex flex-col items-center">
                    <Image
                    src="/images/coup-de-pouce-thermostat-blanc-3.png"
                    alt="Programme de l'Etat Coup de Pouce thermostats connectés"
                    width={330}
                    height={330}
                    priority
                    />
                    {/* <h3 className="mt-4 text-liia-orange text-lg flex flex-col items-center">Prime valable<span className="font-bold">jusqu’au 31 décembre 2024</span></h3> */}
                </div>
                <div>
                    <h2 className="2xl:text-3xl font-bold mb-8 text-2xl">Profitez de l'aide de l'État pour installer vos thermostats</h2>
                    <h3 className="2xl:text-2xl !font-semibold mb-4 lg:text-xl text-lg mt-10 text-liia-orange">La prime <span className="font-bold">"Coup de pouce chauffage"</span></h3>
                    <p>Il s'agit d'une aide de <span className="font-semibold">l'État qui finance à 100%, grâce au CEE 2024, l'installation de thermostats connectés jusqu'au 31 décembre 2024</span>. Cette aide est accessible à tous et permet de réduire les coûts d'installation à zéro. Cette mesure est d'autant plus significative que le chauffage constitue entre 60 et 75 % des dépenses énergétiques annuelles des ménages français.</p> 
                    <ul className="mt-6 gap-y-2 flex flex-col font-semibold">
                        <li className="flex gap-x-2 items-center"><FaRegCheckCircle className="w-4 h-4 text-liia-orange" />Propriétaires ou locataires</li>
                        <li className="flex gap-x-2 items-center"><FaRegCheckCircle className="w-4 h-4 text-liia-orange" />Maison ou appartement</li>
                        <li className="flex gap-x-2 items-center"><FaRegCheckCircle className="w-4 h-4 text-liia-orange" />Quel que soit votre revenu</li>
                    </ul>  
                </div>
            </div>
        </div>
    </section>
  )
}

export default PrimeEtat