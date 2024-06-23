import React from 'react'
import Link from 'next/link'
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill } from "react-icons/pi";
import localFont from "next/font/local";

const icomoonFont = localFont({
    src: "../fonts/icomoon.ttf",
});

type Props = {}

function Etapes({}: Props) {
  return (
    <section className="lg:py-16 py-8">
        <div className="container">
            <h2 className="2xl:text-3xl font-bold lg:mb-10 text-2xl text-center mb-4">Comment profiter de thermostats gratuits ?</h2>
            <div className="flex flex-col items-center">
                <div className="grid sm:grid-cols-3 gap-16 sm:gap-8 mt-8">
                    <div className="text-center">
                        <div className="relative w-32 h-32 mx-auto left-2">
                            <div className="z-10 relative w-full h-full bg-liia-clair rounded-full border border-liia-clair shadow flex items-center justify-center">                           
                                <div style={icomoonFont.style} className="text-liia-bleue text-6xl">O</div>
                            </div>
                            <div className="absolute inset-0 -translate-x-1 -translate-y-1 bg-liia-orange rounded-full"></div>
                            <PiNumberCircleOneFill className="text-liia-orange w-12 h-12 absolute -bottom-2 z-10 -left-4"/>
                        </div>
                        <h3 className="!font-semibold mb-4 lg:text-xl text-lg mt-6">Demander un rendez-vous</h3>
                        <p className="leading-relaxed mt-4">Remplissant notre formulaire en ligne. Indiquez votre type d’habitation, si vous êtes propriétaire ou locataire, et votre type de chauffage actuel.</p>
                    </div>
                    <div className="text-center">
                        <div className="relative w-32 h-32 mx-auto left-2">
                            <div className="z-10 relative w-full h-full bg-liia-clair rounded-full border border-liia-clair shadow flex items-center justify-center">
                                <div style={icomoonFont.style} className="text-liia-bleue text-6xl">M</div>
                            </div>
                            <div className="absolute inset-0 -translate-x-1 -translate-y-1 bg-liia-orange rounded-full"></div>
                            <PiNumberCircleTwoFill className="text-liia-orange w-12 h-12 absolute -bottom-2 z-10 -left-4"/>
                        </div>
                        <h3 className="!font-semibold mb-4 lg:text-xl text-lg mt-6">Planification du rendez-vous</h3>
                        <p className="leading-relaxed mt-4">Un membre de notre équipe vous contactera pour finaliser votre demande et planifier l'installation, en fonction de vos disponibilités.</p>
                    </div>
                    <div className="text-center">
                        <div className="relative w-32 h-32 mx-auto left-2">
                            <div className="z-10 relative w-full h-full bg-liia-clair rounded-full border border-liia-clair shadow flex items-center justify-center">
                                <div style={icomoonFont.style} className="text-liia-bleue text-6xl">G</div>
                            </div>
                            <div className="absolute inset-0 -translate-x-1 -translate-y-1 bg-liia-orange rounded-full"></div>
                            <PiNumberCircleThreeFill className="text-liia-orange w-12 h-12 absolute -bottom-2 z-10 -left-4"/>
                        </div>
                        <h3 className="!font-semibold mb-4 lg:text-xl text-lg mt-6">Installation facile et rapide</h3>
                        <p className="leading-relaxed mt-4">Un technicien se déplacera à votre domicile. Commencez à réaliser des économies sur vos factures de chauffage immédiatement.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-20">
                    <p className="text-center font-semibold bg-[#ffed00] py-1 px-2 rounded-lg">Profitez de cette prime avant le 31 décembre 2024</p>
                    <Link
                    href="#test-eligibilite"
                    className="bg-liia-orange text-white font-semibold py-2 px-4 rounded-sm mt-4"
                    >
                        Testez votre éligibilté
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Etapes