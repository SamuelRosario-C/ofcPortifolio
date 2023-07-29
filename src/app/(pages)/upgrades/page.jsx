import styled from "./upgrades.module.css"
import Navbar from "@/app/components/navbar/page"
export const metadata = {
    title: "Projects",
    description: "descrição da page"
}

const allUpgrades = [{
    typeUpgrade: "Upgrades em andamento ...",
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis at soluta repellendus cupiditate eaque cumque aperiam modi dicta tenetur architecto minima, quos cum eveniet ipsam. Dolorem iure fuga eum esse! 
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi consequatur quaerat incidunt, laboriosam ipsa ex omnis veritatis reiciendis voluptatum aspernatur. Quae eum nisi id aliquam iste porro vero natus sapiente.`,
    dataUpgrade: "22/07/2023"
}]

export default function Projects() {
    return (
        <>
            <Navbar />
            <section className={styled.boxUpgrades}>
                <article className={styled.tableUpgrades}>
                    {/*  */}
                    {allUpgrades.map((upgrade) =>(
                        <div className={styled.upgrades}>
                            <h3 className={styled.subjectUpgrades}>{upgrade.typeUpgrade}</h3>
                            <div className={styled.textsUpgrades}>
                                <p>{upgrade.description}</p>
                                <span className={styled.dateUpgrades}>{upgrade.dataUpgrade}</span>
                            </div>

                        </div>
                    ))}
                    {/*  */}

                </article>

            </section>

        </>
    )
}