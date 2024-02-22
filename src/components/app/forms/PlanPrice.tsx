import { Button } from "@/components/ui/button"
import { CheckIcon } from "lucide-react"


const tiers = [
    {
        name: 'Hobby',
        id: 'tier-hobby',
        href: '#',
        priceMonthly: '$49',
        description: 'Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.',
        features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support '],
    },
    {
        name: 'Team',
        id: 'tier-team',
        href: '#',
        priceMonthly: '$79',
        description: 'Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.',
        features: [
            'Unlimited products',
            'Unlimited subscribers',
            'Advanced analytics',
        ],
    },
]

export default function Example() {
    return (
        <div className="mx-auto -ml-32 max-w-7xl lg:px-8">
            <div className="flex gap-10 grid-cols-2 lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier) => (
                    <div
                        key={tier.id}
                        className="flex flex-col justify-between rounded-3xl bg-white shadow-xl  sm:p-10"
                    >
                        <div>
                            <h3 id={tier.id} className="text-base font-semibold leading-7 text-gray-900">
                                {tier.name}
                            </h3>
                            <div className="mt-4 flex items-baseline gap-x-4">
                                <span className="text-5xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                                <span className="text-base font-semibold leading-7 text-gray-600">/month</span>
                            </div>
                            <p className="mt-6 text-base leading-7 text-gray-600">{tier.description}</p>
                            <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-gray-900" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="pt-10">
                            <Button className="w-full bg-gray-950 text-gray-50">Escolha seu plano</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}