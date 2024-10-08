"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ToogleLanguage } from "../SelectLanguage";
import { ModeToggle } from "../ui/toogleMode";
import { usePathname, useRouter } from "next/navigation";

export const Header = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [targetId, setTargetId] = useState<string | null>(null);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();

        if (pathname === "/") {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }, 200);
            }
        } else {
            setTargetId(targetId);
            router.push("/#" + targetId);
        }
    };

    useEffect(() => {
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }, 200);
                setTargetId(null);
            }
        }
    }, [targetId]);

    return (
        <header className="flex justify-between items-center h-20 max-w-[1248px] w-full mx-auto px-3 xl:px-0">
            <div className="flex items-center gap-10">
                <h2 className="font-bold text-2xl cursor-pointer">
                    <Link href="/">
                        <span className="text-primary-blue">LJ</span>ConstruTic
                    </Link>
                </h2>
                <nav>
                    <ul className="md:flex items-center hidden gap-4 lg:gap-6">
                        <li>
                            <a href="/#aboutus" onClick={(e) => handleClick(e, "aboutus")}>
                                Quem somos
                            </a>
                        </li>
                        <li>
                            <a href="/#products" onClick={(e) => handleClick(e, "products")}>
                                Produtos
                            </a>
                        </li>
                        <li>
                            <a href="/#services" onClick={(e) => handleClick(e, "services")}>
                                Serviços
                            </a>
                        </li>
                        <li>
                            <a href="/#contact" onClick={(e) => handleClick(e, "contact")}>
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex items-center gap-1">
                <ToogleLanguage />
                <ModeToggle />
            </div>
        </header>
    );
};
