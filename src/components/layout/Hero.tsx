import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import sampledashboard from "../../../public/sampledashboard.png";
export function Hero() {
    return (
        <section className="relative mt-4 flex flex-col items-center justify-center  pt-20">
            <div className="text-center">
                <span className="border-[2px] hover:bg-gray-900 border-slate-600 text-sm text-gray-400 font-medium tracking-tight bg-black px-4 py-2 rounded-full">
                    Introducing Clear : Invoice 1.0.0
                </span>
                <h1 className="mt-8 text-2xl text-white sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter">
                    Invoicing made{" "}
                    <span className="block -mt-2 bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
                        super easy!
                    </span>
                </h1>

                <p className="max-w-xl mx-auto mt-6 lg:text-lg text-muted-foreground">
                    Creating Invoices can be a pain! We at Clear:Invoice make it super
                    easy for you to get paid on time!
                </p>

                <div className="mt-7 mb-12">
                    <Link href="/login">
                        <Button>Get Unlimted Access</Button>
                    </Link>
                </div>
            </div>


            <div className="relative items-center w-[60%]  mx-auto mt-12 ">
                <Image
                    src={sampledashboard}
                    alt="Hero image"
                    className="relative object-cover h-[550px] w-full border rounded-lg lg:rounded-2xl shadow-2xl  "
                />
            </div>

        </section>
    );
}