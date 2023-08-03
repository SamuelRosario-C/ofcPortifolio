//Imagem das tecnologias
import iconJavascript from '@/assets/image-tech/javascript.svg';
import iconNode from '@/assets/image-tech/node.svg';
import iconFirebase from '@/assets/image-tech/firebase.svg';
import iconNext from '@/assets/image-tech/next.svg';
import iconReact from '@/assets/image-tech/react.svg';
import iconstyledComponents from '@/assets/image-tech/styled-components.svg';
import iconExpress from '@/assets/image-tech/express.svg';
import iconApi from '@/assets/image-tech/api.svg';
import iconPnpm from '@/assets/image-tech/pnpm.svg';
import iconInsomnia from '@/assets/image-tech/insomnia.svg';
import iconGitHub from '@/assets/image-tech/github.svg';
import iconGit from '@/assets/image-tech/git.svg';
import iconFigma from '@/assets/image-tech/figma.svg';

//Cofing
import styles from './tech.module.css'
import Navbar from '@/app/components/navbar/page';
import Image from 'next/image';

export const metadata = {
    title: "Tecnologias",
    description: "descrição da page"
}

const allTechnologies = [{
    imgTechnology: iconJavascript,
    description: 'Array, Object, Loops, If else, functions, operadores, map, reduce, filter',
    nameTech: 'Javascript',
},{
    imgTechnology: iconNode,
    description: 'class, switch case, Api Rest, Restful',
    nameTech: 'Node'
},{
    imgTechnology: iconFirebase,
    description: 'recebimento de dados e envio de dados para armazenar.',
    nameTech: 'Firebase'
},{
    imgTechnology: iconNext,
    description: 'Utilizo para criação de projetos web com frontend e backend',
    nameTech: 'Next'
},{
    imgTechnology: iconReact,
    description: 'Utilizo para criação de layouts',
    nameTech: 'React'
},{
    imgTechnology: iconstyledComponents,
    description: 'alto conhecimento em styled-components, facil de utlizar',
    nameTech: 'Styled-Components'
},{
    imgTechnology: iconExpress,
    description: 'Facilita criação de rotas e conecta frontend',
    nameTech: 'Express'
},{
    imgTechnology: iconApi,
    description: 'Api rest e Restful, criação de apis e consumo',
    nameTech: 'API'
},{
    imgTechnology: iconPnpm,
    description: 'um versionador novo porém mais rápido e com boa performace',
    nameTech: 'Pnpm' 
},{
    imgTechnology: iconInsomnia,
    description: 'Utilizo para verificar minhas rotas, apis e verificar error de http',
    nameTech: 'Insomnia'
},{
    imgTechnology: iconGitHub,
    description: 'git push, git add, git commit, git init',
    nameTech: 'GitHub'
},{
    imgTechnology: iconGit,
    description: 'caso necessario, codifico em grupo e tenho melhor  manuseio do meu projeto',
    nameTech: 'Git'
},{
    imgTechnology: iconFigma,
    description: 'caso necessario, utilizo para montar projetos frontend designados a mim',
    nameTech: 'Figma'
}]


export default function Home() {
    return (
        <>
            <Navbar />
            <main className={styles.boxTechnologies}>
                <section className={styles.technologies}>
                    
                    {allTechnologies.map((technology) => (
                        <div className={styles.tabelTechnologies}>
                            <h4>{technology.nameTech}</h4>
                            <div className={styles.techIllustrated}>
                                <Image width={60} height={60} src={technology.imgTechnology} alt={technology.nameTech} />
                                <p>{technology.description}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </>
    )
}