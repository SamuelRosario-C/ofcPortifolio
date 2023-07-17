import Navbar from "@/app/components/navbar/page"
// import Image from "next/image"
import styled from "./projects.module.css"
import projectImg from "@/assets/image-project/projectA.jpeg"


import node from "@/assets/image-tech/node.svg"
import Image from "next/image"

export const metadata = {
    title: "Projects",
    description: "descrição da page"
}

export default function Projects() {
    return (
        <>
            <Navbar/>
            <section className={styled.boxProjects}>
                <h3>Projects</h3>
                <article className={styled.projects}>
                    <div className={styled.tableProjects}>
                        <span className={styled.textsProject}>
                            <h3>GroundDesk</h3>
                            <p>Descrição do projeto</p>
                        </span>
                        <div className={styled.imageAndIconProjects}>
                            <Image width={40} height={40} src={node} alt="node" />
                            <Image width={155} height={0} src={projectImg} alt="project" />
                        </div>
                    </div>
                    <div className={styled.tableProjects}>
                        <span className={styled.textsProject}>
                            <h3>GroundDesk</h3>
                            <p>Descrição do projeto</p>
                        </span>
                        <div className={styled.imageAndIconProjects}>
                            <Image width={40} height={40} src={node} alt="node" />
                            <Image width={155} height={0} src={projectImg} alt="project" />
                        </div>
                    </div>
                    <div className={styled.tableProjects}>
                        <span className={styled.textsProject}>
                            <h3>GroundDesk</h3>
                            <p>Descrição do projeto</p>
                        </span>
                        <div className={styled.imageAndIconProjects}>
                            <Image width={40} height={40} src={node} alt="node" />
                            <Image width={155} height={0} src={projectImg} alt="project" />
                        </div>
                    </div>
                    <div className={styled.tableProjects}>
                        <span className={styled.textsProject}>
                            <h3>GroundDesk</h3>
                            <p>Descrição do projeto</p>
                        </span>
                        <div className={styled.imageAndIconProjects}>
                            <Image width={40} height={40} src={node} alt="node" />
                            <Image width={155} height={0} src={projectImg} alt="project" />
                        </div>
                    </div>
                    <div className={styled.tableProjects}>
                        <span className={styled.textsProject}>
                            <h3>GroundDesk</h3>
                            <p>Descrição do projeto</p>
                        </span>
                        <div className={styled.imageAndIconProjects}>
                            <Image width={40} height={40} src={node} alt="node" />
                            <Image width={155} height={0} src={projectImg} alt="project" />
                        </div>
                    </div>
                    <div className={styled.tableProjects}>
                        <span className={styled.textsProject}>
                            <h3>GroundDesk</h3>
                            <p>Descrição do projeto</p>
                        </span>
                        <div className={styled.imageAndIconProjects}>
                            <Image width={40} height={40} src={node} alt="node" />
                            <Image width={155} height={0} src={projectImg} alt="project" />
                        </div>
                    </div>
                    <div className={styled.tableProjects}>
                        <span className={styled.textsProject}>
                            <h3>GroundDesk</h3>
                            <p>Descrição do projeto</p>
                        </span>
                        <div className={styled.imageAndIconProjects}>
                            <Image width={40} height={40} src={node} alt="node" />
                            <Image width={155} height={0} src={projectImg} alt="project" />
                        </div>
                    </div>
                    <div className={styled.tableProjects}>
                        <span className={styled.textsProject}>
                            <h3>GroundDesk</h3>
                            <p>Descrição do projeto</p>
                        </span>
                        <div className={styled.imageAndIconProjects}>
                            <Image width={40} height={40} src={node} alt="node" />
                            <Image width={155} height={0} src={projectImg} alt="project" />
                        </div>
                    </div>
                    
                </article>
            </section>
            
        </>
    )
}