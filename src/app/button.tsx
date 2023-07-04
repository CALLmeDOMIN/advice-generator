"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

interface ButtonProps {
    className?: string;
}

const Button: FunctionComponent<ButtonProps> = ({ className }) => {
    const router = useRouter();

    return (
        <button
            className={
                "bg-neon-green p-5 rounded-full hover:shadow-xl hover:shadow-neon-green " +
                className
            }
            onClick={() => router.refresh()}
        >
            <Image src={"/icon-dice.svg"} alt="dice" width={24} height={24} />
        </button>
    );
};

export default Button;
