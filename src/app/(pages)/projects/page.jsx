import Navbar from "@/app/components/navbar/page"
import FooterBar from "@/app/components/footerbar/page"
// import Image from "next/image"
import styled from "./projects.module.css"
import projectImg from "@/assets/image-project/projectA.jpeg"


import node from "@/assets/image-tech/node.svg"
import next from "@/assets/image-tech/next.svg"
import Image from "next/image"

export const metadata = {
    title: "Projects",
    description: "descrição da page"
}

export default function Projects() {
    const projects = [{
        nameProject: "Nome do projeto",
        projectNodeOrNext: next,
        imgProject: projectImg,
        description: "Descrição do projeto",
    }, {
        nameProject: "Nome do projeto",
        projectNodeOrNext: next,
        imgProject: projectImg,
        description: "Descrição do projeto",
    }, {
        nameProject: "Nome do projeto",
        projectNodeOrNext: next,
        imgProject: projectImg,
        description: "Descrição do projeto",
    }, {
        nameProject: "Nome do projeto",
        projectNodeOrNext: next,
        imgProject: projectImg,
        description: "Descrição do projeto",
    }]

    return (
        <>
            <Navbar />
            <section className={styled.boxProjects}>
                <article className={styled.projects}>

                    {projects.map((allProjects) => (

                        <div className={styled.tableProjects}>
                            <span className={styled.textsProject}>
                                <h3>{allProjects.nameProject}</h3>
                                <p>{allProjects.description}</p>
                            </span>
                            <div className={styled.imageAndIconProjects}>
                                <Image width={35} height={35} src={allProjects.projectNodeOrNext} alt="tec" />
                            </div>
                            <Image width={155} height={0} src={allProjects.imgProject} alt="project" />
                        </div>
                    ))}
                </article>
            </section>
            <FooterBar />
        </>
    )
}