import styles from './aboutme.module.css';
import Navbar from '@/app/components/navbar/page';
import FooterBar from '@/app/components/footerbar/page';
import Image from 'next/image';
import Link from 'next/link';

import perfil from '@/assets/img/perfil.jpg';
import linkedInIcon from '@/assets/icons/linkedIn.svg';
import githubIcon from '@/assets/icons/github.svg'


export const metadata = {
    title: "Sobre Mim",
    description: "descrição da page"
}

export default function Aboutme() {
    return (
        <>
            <Navbar />
            <section className={styles.secAboutme}>
                <div className={styles.aboutme}>
                    <div className={styles.description}>
                        <h1 className={styles.title}>Desenvolvedor Web</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et recusandae earum adipisci tempora natus vero ut ad eos? Suscipit, dignissimos exercitationem. Magnam commodi animi laboriosam accusamus fuga officia, eum quo?</p>
                        <div className={styles.buttonLinkedInGithub}>
                            <Link className={styles.linkedIn} href={"https://www.linkedin.com/in/samu-rosario/"}>
                                <Image src={linkedInIcon}/>LinkedIn
                            </Link>
                            <Link className={styles.gitHub} href={"https://github.com/samuelrosario-c"}>
                                <Image src={githubIcon}/>GitHub
                            </Link>
                        </div>
                    </div>
                    <div className={styles.profile}>
                        <Image src={perfil} alt="perfil imagem" />
                    </div>
                </div>
            </section>
            <FooterBar/>

        </>
    )
}