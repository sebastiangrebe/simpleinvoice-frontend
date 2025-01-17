import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";


const tiers = [
    {
        imgSrc:"/Tech.jpeg",
        description: "Freelancers and Business Owner",
        features: "Whether you're a solo entrepreneur or running a small business, easily manage and send invoices, track payments, and keep your finances organized in one place.",
        featured: true,
    },
    {
        imgSrc:"/dev.jpeg",
        description: "IT experts, Web developers & designers",
        features: "Simplify your billing process for complex projects. Manage multiple clients, track hours, and generate invoices that capture every detail of your technical services.",
        featured: true,
    },
    {
        imgSrc:"Office.jpeg",
        description: "Consultants & Contractors",
        features: "Handle project-based invoicing effortlessly, ensuring clear and accurate billing for every milestone or completed task, making sure you get paid on time.",
        featured: true,
    },
    {
        imgSrc:"/DigitalArtist.jpeg",
        description: "Media & digital marketers,",
        features: "Focus on your creative projects while our app takes care of your billing needs, with customized invoices that reflect your brand and professionalism.",
        featured: true,
    },
];

export function WhoCanUse() {
    return (
        <section className="container py-24 sm:py-32" >
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Who’s it for?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground sm:mx-[30%]">
                    Designed to cater to a diverse range of professionals, helping them streamline their invoicing process with ease and efficiency.
                </p>
            </div>
            <div className="mt-16 sm:mx-[7%]  grid gap-12 sm:grid-cols-2 lg:grid-cols-2">
                {tiers.map((tier) => (
                    <Card
                        className={tier.featured ? " bg-[#d6ebf3] rounded-xl " : ""}
                    >
                        <CardHeader>
                            <CardTitle>
                                <img
                                    src={tier.imgSrc}
                                    alt="Service illustration"
                                    className="rounded-lg  shadow-xl"
                                    width={600}
                                    height={200}
                                />
                            </CardTitle>
                        </CardHeader>
                        <div className="">
                            <CardDescription className="font-bold text-black text-xl p-2 ml-4">{tier.description}</CardDescription>
                            <CardContent className="pr-20">
                                {tier.features}
                            </CardContent>
                            <CardFooter>
                                <div className="text-center">
                                    <a href="#" className="text-[#0091ea] font-semibold text-sm hover:underline flex items-center">
                                        Learn More
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </CardFooter>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}