"use client"
import {useState} from 'react'
import Image from 'next/image'
import { FaCircleInfo } from "react-icons/fa6";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { zodResolver } from "@hookform/resolvers/zod"
import { set, useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from '@/lib/utils'
import {delay} from '@/lib/helpers'
import localFont from "next/font/local";

const icomoonFont = localFont({
    src: "../fonts/icomoon.ttf",
});

const FormSchema = z.object({
    typeChauffage: z.string(),
    typeLogement: z.string(),
    statutClient: z.string(),
    modeChauffage: z.string(),
    genre: z.boolean(),
    nom: z.string().min(2, { message: "" }),
    prenom: z.string().min(2, { message: "" }),
    codePostal: z.string().min(5, { message: "" }),
    email: z.string().email({ message: "" }),
    telephone: z.string().max(10).min(10, { message: "" }),
})

type Props = {}

function Formulaire({}: Props) {

    const [step, setStep] = useState<number>(1)
    const [progress, setProgress] = useState<number>(0)
    console.log(progress)
    const [eligible, setEligible] = useState<boolean>(false)
    const [typeChauffage, setTypeChauffage] = useState<string>("")
    const [typeLogement, setTypeLogement] = useState<string>("")
    const [statutClient, setStatutClient] = useState<string>("")
    const [modeChauffage, setModeghauffage] = useState<string>("")
    const [nom, setNom] = useState<string>("")

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            typeChauffage: "",
            typeLogement: "",
            statutClient: "",
            modeChauffage: "",
            genre: false,
            nom: "",
            prenom: "",
            codePostal: "",
            email: "",
            telephone: "",
                },
    })

    /* const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTypeChauffage(e.target.value)
    }*/

    const handleTypeChauffageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTypeChauffage(e.target.value)
    };
    const handleTypeLogementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTypeLogement(e.target.value)
    };
    const handleStatutClientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatutClient(e.target.value)
    };
    const handleModeChauffageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModeghauffage(e.target.value)
    };

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        const values = {
            typeChauffage: data.typeChauffage.toUpperCase(),
            typeLogement: data.typeLogement.toUpperCase(),
            statutClient: data.statutClient.toUpperCase(),
            nom: data.nom.toUpperCase(),
            prenom: data.prenom.toUpperCase(),
            codePostal: data.codePostal.toUpperCase(),
            email: data.email.toUpperCase(),
            telephone: data.telephone.toUpperCase(),
            date: new Date().toLocaleDateString()
        }
        setStep(5);
        if(data.modeChauffage === "chauffage individuel") {
            try {
                const response = await fetch('/api/eligibilite', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                })
                setEligible(true);
                await delay(1500)
                setStep(6)
            } catch (error) {
                console.log(error)
            }
        }
        else {
            setEligible(false);
            await delay(1500);
            setStep(6);
        }
    }

  return (
    <section className="my-20" id="test-eligibilite">
        <div className="lg:container">
            <div className="flex flex-col lg:flex-row">
                <div className="bg-liia-bleue lg:w-2/3 p-6 rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl rounded-br-2xl lg:rounded-tr-none lg:rounded-br-none min-h-[410px] lg:min-h-[380px]">
                    <h2 className="text-2xl text-white before:content-[''] before:w-28 before:h-2 before:bg-liia-orange before:-bottom-3 before:left-0 relative before:absolute before:rounded-sm">Testez votre éligibilité</h2>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            {step === 1 && (
                            <div className="lg:h-64 mt-8 flex flex-col justify-between">
                                <div className="">
                                    <h3 className="text-white text-lg">Quel est votre type de chauffage ?</h3>
                                    <FormField
                                    control={form.control} 
                                    name="typeChauffage"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <RadioGroup
                                                onChange={handleTypeChauffageChange} 
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                //value={typeChauffage} 
                                                className="grid lg:grid-cols-2 gap-4 mt-6">
                                                    <FormItem>
                                                        <FormControl>
                                                            <div>
                                                                <RadioGroupItem 
                                                                value="gaz" 
                                                                id="gaz" 
                                                                className="peer sr-only" 
                                                                //checked={typeChauffage === "gaz"}
                                                                aria-label="gaz"
                                                                />
                                                                <Label
                                                                htmlFor="gaz"
                                                                className="flex items-center gap-x-3 rounded-xl bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-liia-orange [&:has([data-state=checked])]:border-liia-orange lg:text-lg peer-data-[state=checked]:text-white"
                                                                >
                                                                    <div style={icomoonFont.style} className="text-3xl border-r-2 border-gray-300 pr-2">a</div>
                                                                    <span>Gaz</span>
                                                                </Label>
                                                            </div>
                                                        </FormControl>
                                                    </FormItem>
                                                    <FormItem>
                                                        <FormControl>
                                                            <div>
                                                                <RadioGroupItem
                                                                value="fioul"
                                                                id="fioul"
                                                                className="peer sr-only"
                                                                aria-label="fioul"
                                                                />
                                                                <Label
                                                                htmlFor="fioul"
                                                                className="flex items-center gap-x-3 rounded-xl bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-liia-orange [&:has([data-state=checked])]:border-liia-orange lg:text-lg peer-data-[state=checked]:text-white"
                                                                >
                                                                    <div style={icomoonFont.style} className="text-3xl border-r-2 border-gray-300 pr-2">b</div>
                                                                    <span>Fioul</span>
                                                                </Label>
                                                            </div>
                                                        </FormControl>
                                                    </FormItem>
                                                    <FormItem>
                                                        <FormControl>
                                                            <div>
                                                                <RadioGroupItem
                                                                value="pompe à chaleur"
                                                                id="pompe-a-chaleur"
                                                                className="peer sr-only"
                                                                aria-label="pompe-a-chaleur"
                                                                />
                                                                <Label
                                                                htmlFor="pompe-a-chaleur"
                                                                className="flex items-center gap-x-3 rounded-xl bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-liia-orange [&:has([data-state=checked])]:border-liia-orange lg:text-lg peer-data-[state=checked]:text-white"
                                                                >
                                                                    <div style={icomoonFont.style} className="text-3xl border-r-2 border-gray-300 pr-2">d</div>
                                                                    <span>Pompe à chaleur</span>
                                                                </Label>
                                                            </div>
                                                        </FormControl>
                                                    </FormItem>
                                                    <FormItem>
                                                        <FormControl>
                                                            <div>
                                                                <RadioGroupItem 
                                                                value="electrique" 
                                                                id="electrique" 
                                                                className="peer sr-only"
                                                                aria-label="electrique" 
                                                                />
                                                                <Label
                                                                htmlFor="electrique"
                                                                className="flex items-center gap-x-3 rounded-xl bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-liia-orange [&:has([data-state=checked])]:border-liia-orange lg:text-lg peer-data-[state=checked]:text-white"
                                                                >
                                                                    <div style={icomoonFont.style} className="text-3xl border-r-2 border-gray-300 pr-2">g</div>
                                                                    <span>Electrique</span>
                                                                </Label>
                                                            </div>
                                                        </FormControl>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                    className="bg-liia-orange text-white py-2 px-4 rounded-sm mt-4"
                                    onClick={() => setStep(2)}
                                    disabled={!typeChauffage}
                                    >
                                        Suivant
                                    </button>
                                </div>
                            </div>
                            )}
                            {step === 2 && (
                            <div className="lg:h-64 mt-8 flex flex-col justify-between">
                                <div className="grid lg:grid-cols-2 lg:gap-x-4 gap-y-6 lg:gap-y-0">
                                    <div>
                                        <h3 className=" text-white text-lg">Quel est votre type de logement ?</h3>
                                        <FormField
                                        control={form.control} 
                                        name="typeLogement"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <RadioGroup
                                                    onChange={handleTypeLogementChange} 
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    //value={typeChauffage} 
                                                    className="grid gap-y-4 mt-6">
                                                        <FormItem>
                                                            <FormControl>
                                                                <div>
                                                                    <RadioGroupItem 
                                                                    value="maison" 
                                                                    id="maison" 
                                                                    className="peer sr-only" 
                                                                    //checked={typeChauffage === "gaz"}
                                                                    aria-label="maison"
                                                                    />
                                                                    <Label
                                                                    htmlFor="maison"
                                                                    className="flex items-center gap-x-3 rounded-xl bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-liia-orange [&:has([data-state=checked])]:border-liia-orange lg:text-lg peer-data-[state=checked]:text-white"
                                                                    >
                                                                        <div style={icomoonFont.style} className="text-3xl border-r-2 border-gray-300 pr-2">w</div>
                                                                        <span>Maison</span>
                                                                    </Label>
                                                                </div>
                                                            </FormControl>
                                                        </FormItem>
                                                        <FormItem>
                                                            <FormControl>
                                                                <div>
                                                                    <RadioGroupItem
                                                                    value="appartement"
                                                                    id="appartement"
                                                                    className="peer sr-only"
                                                                    aria-label="appartement"
                                                                    />
                                                                    <Label
                                                                    htmlFor="appartement"
                                                                    className="flex items-center gap-x-3 rounded-xl bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-liia-orange [&:has([data-state=checked])]:border-liia-orange lg:text-lg peer-data-[state=checked]:text-white"
                                                                    >
                                                                        <div style={icomoonFont.style} className="text-3xl border-r-2 border-gray-300 pr-2">z</div>
                                                                        <span>Appartement</span>
                                                                    </Label>
                                                                </div>
                                                            </FormControl>
                                                        </FormItem>
                                                        
                                                    </RadioGroup>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-white text-lg">Vous êtes ?</h3>
                                        <FormField
                                        control={form.control} 
                                        name="statutClient"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <RadioGroup
                                                    onChange={handleStatutClientChange} 
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    //value={typeChauffage} 
                                                    className="grid gap-y-4 mt-6">
                                                        <FormItem>
                                                            <FormControl>
                                                                <div>
                                                                    <RadioGroupItem 
                                                                    value="proprietaire" 
                                                                    id="proprietaire" 
                                                                    className="peer sr-only" 
                                                                    //checked={typeChauffage === "gaz"}
                                                                    aria-label="proprietaire"
                                                                    />
                                                                    <Label
                                                                    htmlFor="proprietaire"
                                                                    className="flex items-center gap-x-3 rounded-xl bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-liia-orange [&:has([data-state=checked])]:border-liia-orange lg:text-lg peer-data-[state=checked]:text-white"
                                                                    >
                                                                        <div style={icomoonFont.style} className="text-3xl border-r-2 border-gray-300 pr-2">D</div>
                                                                        <span>Propriétaire</span>
                                                                    </Label>
                                                                </div>
                                                            </FormControl>
                                                        </FormItem>
                                                        <FormItem>
                                                            <FormControl>
                                                                <div>
                                                                    <RadioGroupItem
                                                                    value="locataire"
                                                                    id="locataire"
                                                                    className="peer sr-only"
                                                                    aria-label="locataire"
                                                                    />
                                                                    <Label
                                                                    htmlFor="locataire"
                                                                    className="flex items-center gap-x-3 rounded-xl bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-liia-orange [&:has([data-state=checked])]:border-liia-orange lg:text-lg peer-data-[state=checked]:text-white"
                                                                    >
                                                                        <div style={icomoonFont.style} className="text-3xl border-r-2 border-gray-300 pr-2">D</div>
                                                                        <span>Locataire</span>
                                                                    </Label>
                                                                </div>
                                                            </FormControl>
                                                        </FormItem>
                                                        
                                                    </RadioGroup>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <button
                                    className="bg-white py-2 px-4 rounded-sm mt-4"
                                    onClick={() => setStep(1)}
                                    >
                                        Précedent
                                    </button>
                                    <button
                                    className="bg-liia-orange text-white py-2 px-4 rounded-sm mt-4"
                                    onClick={() => setStep(3)}
                                    disabled={!typeLogement || !statutClient}
                                    >
                                        Suivant
                                    </button>
                                </div>
                            </div>
                            )}
                            {step === 3 && (
                            <div className="lg:h-64 mt-8">
                                <div className="grid lg:grid-cols-2 lg:gap-x-4 items-center">
                                    <div>
                                        <h3 className=" text-white text-lg">Quel est votre mode de chauffage ?</h3>
                                        <FormField
                                        control={form.control} 
                                        name="modeChauffage"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <RadioGroup
                                                    onChange={handleModeChauffageChange} 
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    //value={typeChauffage} 
                                                    className="grid gap-y-4 mt-6">
                                                        <FormItem>
                                                            <FormControl>
                                                                <div>
                                                                    <RadioGroupItem 
                                                                    value="chauffage individuel" 
                                                                    id="chauffage-individuel" 
                                                                    className="peer sr-only" 
                                                                    //checked={typeChauffage === "gaz"}
                                                                    aria-label="chauffage-individuel"
                                                                    />
                                                                    <Label
                                                                    htmlFor="chauffage-individuel"
                                                                    className="flex items-center gap-x-3 rounded-xl bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-liia-orange [&:has([data-state=checked])]:border-liia-orange lg:text-lg peer-data-[state=checked]:text-white"
                                                                    >
                                                                        <div style={icomoonFont.style} className="text-3xl border-r-2 border-gray-300 pr-2">U</div>
                                                                        <span>Chauffage individuel</span>
                                                                    </Label>
                                                                </div>
                                                            </FormControl>
                                                        </FormItem>
                                                        <FormItem>
                                                            <FormControl>
                                                                <div>
                                                                    <RadioGroupItem
                                                                    value="chauffage colectif"
                                                                    id="chauffage-colectif"
                                                                    className="peer sr-only"
                                                                    aria-label="chauffage-colectif"
                                                                    />
                                                                    <Label
                                                                    htmlFor="chauffage-colectif"
                                                                    className="flex items-center gap-x-3 rounded-xl bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-liia-orange [&:has([data-state=checked])]:border-liia-orange lg:text-lg peer-data-[state=checked]:text-white"
                                                                    >
                                                                        <div style={icomoonFont.style} className="text-3xl border-r-2 border-gray-300 pr-2">E</div>
                                                                        <span>Chauffage collectif</span>
                                                                    </Label>
                                                                </div>
                                                            </FormControl>
                                                        </FormItem>
                                                    </RadioGroup>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                        />
                                    </div>
                                    <div className="p-4">
                                        <FaCircleInfo className="w-8 h-8 mb-2 text-white"/>
                                        <p className="text-white text-sm">On parle de chauffage individuel lorsque votre logement possède son propre procédé de chauffage, soit par des radiateurs électriques, soit par une chaudière individuelle ou par une pompe à chaleur.</p>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <button
                                    className="bg-white py-2 px-4 rounded-sm mt-4"
                                    onClick={() => setStep(2)}
                                    >
                                        Précedent
                                    </button>
                                    <button
                                    className="bg-liia-orange text-white py-2 px-4 rounded-sm mt-4"
                                    onClick={() => setStep(4)}
                                    disabled={!modeChauffage}
                                    >
                                        Suivant
                                    </button>
                                </div>
                            </div>
                            )}
                            {step === 4 && (
                                <div className="lg:h-64 mt-8 flex flex-col justify-between">
                                    <div className="grid lg:grid-cols-2 lg:gap-4 gap-y-4">
                                        <FormField
                                        control={form.control}
                                        name="nom"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input placeholder="Nom" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                        />
                                        <FormField
                                        control={form.control}
                                        name="prenom"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormControl>
                                                    <Input placeholder="Prénom" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                        />
                                        <FormField
                                        control={form.control}
                                        name="codePostal"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input placeholder="Code postal" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                        />
                                        <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input placeholder="E-mail" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                        />
                                        <FormField
                                        control={form.control}
                                        name="telephone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input placeholder="N° de telephone" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                        />
                                    </div>
                                    <div className="flex justify-between">
                                        <button
                                        className="bg-white py-2 px-4 rounded-sm mt-4"
                                        onClick={() => setStep(3)}
                                        >
                                            Précedent
                                        </button>
                                        <button
                                        type="submit"
                                        className="bg-liia-orange text-white py-2 px-4 rounded-sm mt-4"
                                        >
                                            Tester
                                        </button>
                                    </div>
                                </div>
                            )}
                            {step === 5 && (
                                <div className="lg:h-64 mt-6 grid place-items-center">
                                    <div role="status" className="flex items-center flex-col">
                                        <svg className="animate-spin -ml-1 mr-3 h-16 w-16 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span className="text-white mt-4">En cours de traitement...</span>
                                    </div>
                                </div>
                            )}
                            {(step === 6 && eligible) && (
                                <div className="lg:h-64 mt-6 flex flex-col justify-between">
                                    <div className="p-4 text-center mt-8">
                                        <h3 className="text-white lg:text-2xl mb-10 text-lg">Félicitation, vous êtes éligible à la prime <br /><span className="text-liia-orange text-2xl">"COUP DE POUCHE CHAUFFAGE"</span></h3>
                                        <p className="text-white">Un conseiller vous contactera dans les plus brefs délais pour finaliser votre dossier.</p>
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                        className="bg-liia-orange text-white py-2 px-4 rounded-sm mt-4"
                                        onClick={() => setStep(1)}
                                        >
                                            Fermer
                                        </button>
                                    </div>
                                </div>
                            )}
                            {(step === 6 && !eligible) && (
                                <div className="lg:h-64 mt-6 flex flex-col justify-between">
                                    <div className="p-4 text-center mt-8">
                                        <h3 className="text-white text-2xl mb-10">Désolé, vous n'êtes pas éligible à la prime <br /><span className="text-liia-orange">"COUP DE POUCHE CHAUFFAGE"</span></h3>
                                        <p className="text-white">Cette prime est disponible uniquement pour les logements en chauffage individuel.</p>
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                        className="bg-liia-orange text-white py-2 px-4 rounded-sm mt-4"
                                        onClick={() => setStep(1)}
                                        >
                                            Fermer
                                        </button>
                                    </div>
                                </div>
                            )}
                        </form>
                    </Form>
                </div>
                <div className="lg:w-1/3 relative">
                    <Image
                    src="/images/liia-energies-thermostat-connecte-eligibilite-2.jpeg"
                    alt="Agence Shikam publicité sur les réseaux sociaux"
                    className="object-cover rounded-tr-2xl rounded-br-2xl"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Formulaire