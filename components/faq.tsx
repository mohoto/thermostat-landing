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
    <section className="my-20 container">
      <div className="grid lg:grid-cols-2 lg:gap-x-32 lg:place-content-between">
        <div className="justify-self-start place-self-end">
          <Image
            src={faqImage}
            alt="Agence Shikam publicité sur les réseaux sociaux"
            className="rounded-xl"
            width={800}
            height={600}
            style={{
              maxWidth: '75%',
              height: 'auto',
            }}
            priority
          />
        </div>
        <div>
          <div className="flex flex-col mb-10 lg:gap-x-20">
            <h2 className="2xl:text-3xl font-bold mb-4 lg:text-2xl text-xl">Questions fréquentes sur les thermostats connectés et l'aide de l'État</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="lg:text-lg"><h3 className="text-shikam-fonce">Pourquoi avoir un site web est-il important pour mon activité ?</h3></AccordionTrigger>
              <AccordionContent className="text-base">
                <p>Un site web, c'est comme une boutique ouverte tout le temps sur internet. Il permet de montrer ce que vous faites et de vendre vos produits ou services à plus de gens.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1">
              <AccordionTrigger className="lg:text-lg"><h3 className="text-shikam-fonce">Quel est le différence entre un site vitrine et un site e-comerce ?</h3></AccordionTrigger>
              <AccordionContent className="text-base">
                <p>Un site web vitrine est principalement conçu pour présenter des informations sur une activité de services ou de prestations. Il sert souvent de carte de visite en ligne et vise à attirer les visiteurs en fournissant des détails sur ces activités.</p>
                <p>En revanche, un site web e-commerce est spécifiquement conçu pour permettre la vente de produits en ligne. Il offre des fonctionnalités telles que la gestion de catalogue, le panier d'achat, ainsi que la gestion des commandes et des expéditions.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="lg:text-lg"><h3 className="text-shikam-fonce">Comment rendre mon site plus visible sur Google et Bing ?</h3></AccordionTrigger>
              <AccordionContent className="text-base">
              <p>Nous rendons votre site plus facile à trouver sur Google en utilisant des techniques de référencement naturel (SEO). Cela consiste à rédiger et créer du contenu en utilisant des mots-clés pertinents et faire en sorte que votre site soit mentionné par d'autres sites.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="lg:text-lg"><h3 className="text-shikam-fonce">Comment fonctionnent les publicités sur les réseaux sociaux ?</h3></AccordionTrigger>
              <AccordionContent className="text-base">
              <p>On crée des annonces sur les réseaux sociaux qui apparaissent aux personnes qui pourraient être intéressées par ce que vous offrez, en fonction de leur âge, où elles habitent, et ce qu'elles aiment.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="lg:text-lg"><h3 className="text-shikam-fonce">Combien de temps faut-il attendre pour voir les effets de ces actions ?</h3></AccordionTrigger>
              <AccordionContent className="text-base">
              <p>Cela dépend. Pour que votre site apparaisse naturellement mieux sur Google, cela peut prendre quelques mois. Les publicités sur les réseaux sociaux, Google et Bing peuvent avoir des résultats plus rapides, mais il faut continuer à les ajuster pour réussir sur le long terme.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Faq