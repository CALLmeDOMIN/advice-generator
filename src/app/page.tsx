import Image from "next/image";
import Button from "./button";

async function getData() {
    const res = await fetch("https://api.adviceslip.com/advice", {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Something went wrong");
    return res.json();
}

export default async function Home() {
    const { slip } = await getData();

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <div className="bg-dark-grayish-blue max-w-md relative rounded-md p-4">
                <h1 className="uppercase text-center tracking-widest text-xs text-neon-green py-6">
                    advice #{slip.id}
                </h1>
                <p className="text-light-cyan pb-4 text-center font-bold text-2xl">
                    &quot;{slip.advice}&quot;
                </p>
                <Image
                    src={"/pattern-divider-desktop.svg"}
                    width={450}
                    height={50}
                    alt="divider"
                    className="hidden md:block mb-12 mt-6"
                />
                <Image
                    src={"/pattern-divider-mobile.svg"}
                    width={350}
                    height={50}
                    alt="divider"
                    className="md:hidden mb-10"
                />
                <Button className="absolute -bottom-8 left-1/2 -translate-x-1/2" />
            </div>
        </div>
    );
}
