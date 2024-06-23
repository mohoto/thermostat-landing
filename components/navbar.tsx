"use client";
import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import {usePathname} from 'next/navigation'
import {cn} from '@/lib/utils';

type Props = {}

const Navbar = ({}: Props) => {

    const router = useRouter();
    const pathname = usePathname();

    const [openMenu, setOpenMenu] = useState(false);
    const [navSticky, setNavSticky] = useState(false)

    useEffect(() => {
        window.document.addEventListener('scroll', () => {
            if(window.scrollY > 170) {
                setNavSticky(true);
            }
            else {
                setNavSticky(false);
            } 
        });
    });

    useEffect(() => {
        setOpenMenu(false);
    }, [pathname])
    

    return (
        <header className="z-20">
            {/* TopHeader */}
            <nav className={cn(navSticky ? "fixed top-0 z-50 w-full transition duration-500 ease-in-out shadow-lg bg-white py-2" : "bg-liia-clair py-2")}>
                <div className="container">
                    <div className="flex items-center justify-between">
                        <Image
                            src="/images/logo-liia-energies.svg"
                            alt="Agence Shikam publicité sur les réseaux sociaux"
                            className="mt-4"
                            width={120}
                            height={30}
                            priority
                        />
                        <Link
                            href="#test-eligibilite"
                            className="bg-liia-orange text-white font-semibold py-2 px-4 rounded-sm mt-4 text-xs lg:text-base"
                            >
                                Testez votre éligibilté
                            </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;