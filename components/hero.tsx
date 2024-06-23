import Image from "next/image"
import heroImage from "@/public/images/thermostat-connecte-2.png"
import heroImageTwo from "@/public/images/coup-de-pouce-thermostat-blanc.png"
import heroImageThree from "@/public/images/thermostat-connecte-economie.png"
import chaudiereImage from "@/public/images/thremostats-chaudiere-gaz-fioul.png"
import pacImage from "@/public/images/thremostats-pompe-a-chaleur.png"
import elecImage from "@/public/images/thremostats-radiateur-electrique.png"

type Props = {}

function Hero({}: Props) {
  return (
    <section className="pt-24 pb-10 lg:px-8 bg-liia-clair 2xl:px-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 2xl:grid-cols-7 2xl:gap-x-32 gap-y-12 lg:gap-y-0 lg:place-content-between lg:place-items-center">
            <div className="lg:col-span-1 2xl:col-span-4 order-2 lg:order-1">
                <h1 className="2xl:text-4xl font-bold mb-12 lg:text-3xl text-2xl">Profitez de thermostats connectés gratuits et <span className="text-liia-orange">réduisez vos factures de chauffage !</span></h1>
                <p className="mb-6 text-lg font-light lg:w-11/12">Installation et fourniture <span className="font-semibold">100% prise en charge par l'Etat</span> grâce à la prime "Coup de pouce pilotage connecté du chauffage pièce par pièce".</p>
                <p className="mb-12 text-lg lg:first-line:w-10/12 font-semibold bg-[#ffed00] py-1 px-2 rounded-lg text-center">Disponible jusqu’au 31 décembre 2024</p>
                <div className="flex gap-x-4">
                    <Image
                    src={chaudiereImage}
                    alt="Illustration des thermostats connectés pour chaudière gaz et fioul"
                    className="rounded-xl"
                    width={100}
                    height={100}
                    priority
                    />
                    <Image
                    src={pacImage}
                    alt="Illustration des thermostats connectés pour pompe à chaleur"
                    className="rounded-xl"
                    width={100}
                    height={100}
                    priority
                    />
                    <Image
                    src={elecImage}
                    alt="Illustration des thermostats connectés pour radiateur électrique"
                    className="rounded-xl"
                    width={100}
                    height={100}
                    priority
                    />
                </div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-1 2xl:col-span-3 place-self-center relative w-10/12">
                <div className="relative">
                    <Image
                    src={heroImage}
                    alt="Installation de thermostat connectés gratuit"
                    className="rounded-xl"
                    width={400}
                    height={400}
                    priority
                    />
                    <div className="absolute -top-20 -right-10">
                        <Image
                        src={heroImageTwo}
                        alt="Programme de l'Etat Coup de Pouce thermostats connectés"
                        className=""
                        width={140}
                        height={140}
                        priority
                        />
                    </div>
                    <div className="absolute -bottom-10 -left-10">
                        <Image
                        src={heroImageThree}
                        alt="15% d'économie sur vos factures de chauffage"
                        className="rounded-full shadow-lg"
                        width={140}
                        height={140}
                        priority
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero