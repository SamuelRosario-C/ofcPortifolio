import Link from "next/link";
import styled from './navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styled.navbar}>
            <Link className={styled.links} href='/home'>Home</Link>
            <Link className={styled.links} href='/projects'>Projects</Link>
            <Link className={styled.links} href='/tecnologies'>Technologies</Link>
            <Link className={styled.links} href='/upgrades'>Upgrades</Link>
        </nav>
    )
}