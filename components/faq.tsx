import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import faqImage from '@/public/images/liia-energies-thermostat-connecte-questions.png'

type Props = {}

function Faq({}: Props) {
  return (
    <section className="my-12 container">
      <div className="grid lg:grid-cols-2 lg:gap-x-20 lg:place-content-between gap-y-10 lg:gap-y-0">
        <div className="justify-self-start place-self-end">
          <Image
            src={faqImage}
            alt="Agence Shikam publicité sur les réseaux sociaux"
            className="rounded-xl w-full lg:w-[75%]"
            width={800}
            height={800}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
            priority
          />
        </div>
        <div>
          <div className="flex flex-col mb-10 lg:gap-x-20">
            <h2 className="2xl:text-3xl font-bold text-2xl">Questions fréquentes sur la prime Coup de Pouce Chauffage</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="lg:text-lg">Suis-je éligible à la prime Coup de Pouce Chauffage ?</AccordionTrigger>
              <AccordionContent className="text-base">
                <p>Oui, cette prime est ouverte à tous les foyers français, propriétaires ou locataires, sans condition de revenus. Vous dvez néanmoins un mode de chauffage individuel. Pour vérifier votre éligibilité, remplissez simplement notre formulaire en ligne.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1">
              <AccordionTrigger className="lg:text-lg">Quels types de chauffage sont compatibles avec les thermostats connectés ?</AccordionTrigger>
              <AccordionContent className="text-base">
                <p>Les thermostats connectés peuvent être compatibles avec divers systèmes de chauffage, y compris les chaudières à gaz, les pompes à chaleur, et les radiateurs électriques. Il est important de vérifier la compatibilité du thermostat avec votre système de chauffage avant l'installation.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="lg:text-lg">Que se passe-t-il après avoir rempli le formulaire d'inscription ?</AccordionTrigger>
              <AccordionContent className="text-base">
              <p>Après avoir rempli le formulaire, un membre de notre équipe vous contactera pour vérifier les informations fournies et planifier l'installation de votre thermostat connecté à une date qui vous convient.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="lg:text-lg">Comment se déroule l'installation du thermostat connecté ?</AccordionTrigger>
              <AccordionContent className="text-base">
              <p>Un technicien agréé se rendra à votre domicile pour installer le thermostat connecté. L'installation prend généralement moins de 2 heures et ne nécessite pas de travaux lourds. Elle est entièrement gratuite grâce à la Prime Coup de Pouce Chauffage.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="lg:text-lg">Quelle est la durée de vie d'un thermostat connecté ?</AccordionTrigger>
              <AccordionContent className="text-base">
              <p>Un thermostat connecté a généralement une durée de vie de plusieurs années. La longévité peut varier en fonction de l'utilisation et de l'entretien de l'appareil.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Faq