import Link from "next/link";
import styled from './navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styled.navbar}>
            <Link href='/home'>Home</Link>
            <Link href='/tecnologies'>Technologies</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/upgrades'>Upgrades</Link>
        </nav>
    )
}