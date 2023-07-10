
import styles from './tecnologies.module.css'
import Navbar from '@/app/components/navbar/page';
import Image from 'next/image';
import project from '@/assets/image-project/projectA.jpeg'
export const metadata = {
    title: "Tecnologias",
    description: "descrição da page"

}

export default function Home() {
    return (
        <>
            <Navbar />
            <main className={styles.boxTecnologies}>
                <h3>Tecnologias</h3>
                <section className={styles.tecnologies}>
                    
                    {/* aqui onde vai configuração padrão div que vai zer clonada */}
                    <div >
                        <div>
                            <Image src={project} alt="project-Image" />
                            <div>
                                {/* tecnologias utilizadas no prjeto */}
                            </div>
                        </div>
                        <div>
                            <p>informação do projeto</p>
                            <div>
                                <a href="#">Link para o github</a>
                                <a href="#">Link para o site!</a> 
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}