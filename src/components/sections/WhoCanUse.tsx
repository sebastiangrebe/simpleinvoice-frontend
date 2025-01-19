import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/Card";
import Image from "next/image";

const tiers = [
    {
        imgSrc:"/Tech.jpeg",
        description: "Freelancers and Business Owners",
        features: "Manage and send invoices, track payments, and keep your finances organized.",
    },
    {
        imgSrc:"/dev.jpeg",
        description: "IT Experts, Web Developers & Designers",
        features: "Simplify billing for complex projects. Track hours and generate detailed invoices.",
    },
    {
        imgSrc:"/Office.jpeg",
        description: "Consultants & Contractors",
        features: "Effortlessly handle project-based invoicing and ensure timely payments.",
    },
    {
        imgSrc:"/DigitalArtist.jpeg",
        description: "Media & Digital Marketers",
        features: "Create customized invoices that reflect your brand and professionalism.",
    },
];

export function WhoCanUse() {
    return (
        <section className="container py-24 md:px-32">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Who’s it for?
                </h2>
                <p className="mt-2 text-lg text-muted-foreground sm:mx-[20%]">
                    Streamline invoicing for diverse professionals with ease and efficiency.
                </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {tiers.map((tier, index) => (
                    <Card
                        key={index}
                        className="rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
                    >
                        <CardHeader className="p-4 h-[200px] flex items-center justify-center bg-gray-100">
                            <Image
                                src={tier.imgSrc}
                                alt="Service illustration"
                                className="rounded-md object-cover h-full"
                                width={300}
                                height={150}
                            />
                        </CardHeader>
                        <CardContent className="p-4 text-center flex-1 flex flex-col justify-between">
                            <CardDescription className="font-semibold text-black text-lg mb-2">
                                {tier.description}
                            </CardDescription>
                            <p className="text-gray-700 text-sm">
                                {tier.features}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
