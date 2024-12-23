import React from "react";
import { Section } from "./Section";
import {GithubIcon} from "./icons/GithubIcon";
import {LinkedinIcon} from "./icons/LinkedinIcon";
import {GmailIcon} from "./icons/GmailIcon";
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";

export const Header = () => {
    return (
        <header className = "sticky top-0 py-4">
            <Section className = "flex items-baseline">
                {/*<h1 className = "text-lg font-bold text-primary-foreground">masooma.com</h1>*/}
                <div className = "flex-1"/>
                <ul className = "flex items-center gap-2">
                    <Link
                    href = "https://github.com/massooma"
                    className= {cn(buttonVariants({variant : "outline"}), "size-6 p-0")}
                    >
                        <GithubIcon size = {12} className = "text-foreground"/>
                    </Link>

                    <Link
                        href = "https://www.linkedin.com/in/masooma-mukhtar/"
                        className= {cn(buttonVariants({variant : "outline"}), "size-6 p-0")}
                    >
                        <LinkedinIcon size = {12} className = "text-foreground"/>
                    </Link>

                    <Link
                        href = "mailto:mukhtar.masooma@gmail.com"
                        className= {cn(buttonVariants({variant : "outline"}), "size-6 p-0")}
                    >
                        <GmailIcon size = {12} className = "text-foreground"/>
                    </Link>

                </ul>
            </Section>
        </header>
    );
};