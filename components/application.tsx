import Image from "next/image"
import { MdOutlineMobileFriendly } from "react-icons/md";

type Props = {}

function Application({}: Props) {
  return (
    <section className="lg:py-24 py-10">
        <div className="container flex justify-center">
            <div className="flex flex-col lg:flex-row lg:gap-x-8 gap-y-16 lg:gap-y-0 items-center">
                <div className="bg-liia-bleue rounded-xl p-8 lg:max-w-2xl">
                    <h2 className="2xl:text-2xl mb-8 lg:text-xl text-lg font-bold text-white">Une application mobile gratuite pour gérer tous vos radiateurs</h2>
                    <h3 className="mb-8 lg:text-xl text-lg mt-6 text-liia-orange !font-light">Contrôle et suivi à distance</h3>
                    <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-2 items-start">
                            <div>
                                <MdOutlineMobileFriendly className="w-6 h-6 mt-1 text-liia-orange"/>
                            </div>
                            <p className="text-liia-clair">Pilotez votre chauffage à distance, programmez la température de chaque pièce en fonction de vos habitudes de vie et suivez votre consommation en temps réel via une application mobile gratuite​​ et intuitive.</p>
                        </div>
                        <div className="flex gap-x-2 items-start">
                            <div>
                                <MdOutlineMobileFriendly className="w-6 h-6 mt-1 text-liia-orange"/>
                            </div>
                            <p className="text-liia-clair">Modifiez les paramètres à tout moment pour adapter la température selon vos besoins, que vous soyez chez vous ou en déplacement​​​​.</p>
                        </div>
                    </div>
                </div>
                <div className="w-96 lg:w-full">
                    <Image
                    src="/images/application-thermostat-connecte.png"
                    alt="Installation de thermostat connectés gratuit"
                    width={440}
                    height={450}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Application