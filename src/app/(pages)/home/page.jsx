import styles from './home.module.css';
import Navbar from '@/app/components/navbar/page';
import Image from 'next/image';
import perfil from '@/assets/img/perfil.jpeg';

export const metadata = {
    title: "Sobre Mim",
    description: "descrição da page"
}

export default function Home() {
    return (
        <>
            <Navbar />
            <div className={styles.home}>
                <h3>Sobre Mim</h3>
                <div className={styles.aboutme}>
                    <div className={styles.profile}>
                        <Image src={perfil} alt="perfil imagem" />
                        <h4>
                            Utilizo<span>JavaScript</span>
                        </h4>
                    </div>
                    <div className={styles.description}>
                        <h2>Samuel Rosário</h2>
                        <span>
                            OIÊ, desenvolvo em JavaScript, React - Next para o Frontend
                            e Node.js para Backend, estou em constante estudo, melhorando
                            meus conhecimentos e praticas de programação. conhecimentos:
                            <p>Js, next, react, node e apis.</p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}