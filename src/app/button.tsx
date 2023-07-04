"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FunctionComponent, useTransition } from "react";

interface ButtonProps {
    className?: string;
}

const Button: FunctionComponent<ButtonProps> = ({ className }) => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    return (
        <button
            className={
                "bg-neon-green p-5 rounded-full hover:shadow-xl hover:shadow-neon-green " +
                className +
                (isPending ? " opacity-70 cursor-not-allowed" : "")
            }
            disabled={isPending}
            onClick={() => startTransition(() => router.refresh())}
        >
            <Image src={"/icon-dice.svg"} alt="dice" width={24} height={24} />
        </button>
    );
};

export default Button;
