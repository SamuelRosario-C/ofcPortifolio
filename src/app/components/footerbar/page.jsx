import Link from "next/link";
import styled from "./footerbar.module.css"

export default function FooterBar() {
    return (
        <footer className={styled.footerBar}>
            <Link href='/home'>Home</Link>
        </footer>
    )
}
