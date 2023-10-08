import Link from "next/link";
import Image from "next/image";
import styled from "./footerbar.module.css"

import linkedin from "@/assets/icons/linkedIn.svg"
import github from "@/assets/icons/github.svg"
import gmail from "@/assets/icons/gmail.svg"
import whatsapp from "@/assets/icons/whatsapp.svg"

export default function FooterBar() {
    return (
        <footer className={styled.footerBar}>
            <p>Fique avontade para entrar em contato! através:</p>
            <div className={styled.footerBox}>
                    <Link href={''} className="footerSocialIcons">
                        <Image src={linkedin} alt="linkedIn"/>
                    </Link>
                    <Link href={''} className="footerSocialIcons">
                        <Image src={github} alt="github" />
                    </Link>
                    <Link href={''} className="footerSocialIcons">
                        <Image src={gmail} alt="gmail" />
                    </Link>
                    <Link href={''} className="footerSocialIcons">
                        <Image src={whatsapp} alt="whatsapp" />
                    </Link>
            </div>
            <span className={styled.copyright}>@copyright 2023</span>
        </footer>
    )
}
