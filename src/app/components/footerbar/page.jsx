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
            <div className={styled.footerBox}>
                <div className="footerSocial">
                    <p>Minhas Rede Sociais</p>
                    <Link href={''} className="footerSocialIcons">
                        <Image src={linkedin} alt="linkedIn"/> LinkedIn
                    </Link>
                    <Link href={''} className="footerSocialIcons">
                        <Image src={github} alt="github" /> Github
                    </Link>
                </div>
                <div className="footerContat">
                    <p></p>
                    <Link href={''} className="footerSocialIcons">
                        <Image src={gmail} alt="gmail" /> Gmail
                    </Link>
                    <Link href={''} className="footerSocialIcons">
                        <Image src={whatsapp} alt="whatsapp" /> Whatsapp
                    </Link>
                </div>
                <div className="footerLinks">
                    <p>Links</p>
                </div>
            </div>
            <span className={styled.copyright}>all copyright r..</span>
        </footer>
    )
}
