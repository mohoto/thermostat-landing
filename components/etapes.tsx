import React from 'react'

type Props = {}

function Etapes({}: Props) {
  return (
    <section className="py-16">
        <div className="container">
            <h2 className="2xl:text-3xl font-bold mb-8 lg:text-2xl text-xl text-center">Comment profiter de thermostats gratuits ?</h2>
            <div>
                <div className="grid sm:grid-cols-3 gap-16 sm:gap-8 mt-16 sm:mt-24">
                    <div className="text-center">
                        <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                            <div
                                className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5"
                                    stroke="currentColor" className="text-gray-500 w-1/2 h-1/2" alt="Import icon">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                                    </path>
                                </svg>
                            </div>
                            <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-liia-orange rounded-full"></div>
                        </div>
                        <h3 className="!font-semibold mb-4 lg:text-xl text-lg mt-6">1. Demander un rendez-vous</h3>
                        <p className="leading-relaxed mt-4">Remplissant notre formulaire en ligne. Indiquez votre type d’habitation, si vous êtes propriétaire ou locataire, et votre type de chauffage actuel.</p>
                    </div>
                    <div className="text-center">
                        <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                            <div
                                className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5"
                                    stroke="currentColor" className="text-gray-500 w-1/2 h-1/2" alt="Translate icon">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"></path>
                                </svg>
                            </div>
                            <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-liia-orange rounded-full"></div>
                        </div>
                        <h3 className="!font-semibold mb-4 lg:text-xl text-lg mt-6">2. Planification du rendez-vous</h3>
                        <p className="leading-relaxed mt-4">Un membre de notre équipe vous contactera pour finaliser votre demande et planifier l'installation, en fonction de vos disponibilités.</p>
                    </div>
                    <div className="text-center">
                        <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                            <div
                                className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".5"
                                    stroke="currentColor" className="text-gray-500 w-1/2 h-1/2" alt="Export icon">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                                    </path>
                                </svg>
                            </div>
                            <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-liia-orange rounded-full"></div>
                        </div>
                        <h3 className="!font-semibold mb-4 lg:text-xl text-lg mt-6">3. Installation facile et rapide</h3>
                        <p className="leading-relaxed mt-4">Un technicien se déplacera à votre domicile. Commencez à réaliser des économies sur vos factures de chauffage immédiatement.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Etapes