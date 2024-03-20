import React from "react";
const Hero = ({name, img}) => {
    return(
        <div>
        <h3>Hero name:{name}</h3>
        <img src={img} alt={`Image do ${name}`} width="500" height="200"/>
        </div>
    )
}

const Enemy = ({name, img}) => {
    return(
        <div>
            <h3>Enemy name:{name}</h3>
            <img src={img} alt={`Image do ${name}`} width="500" height="200"/>
        </div>
    )
}

const Arena = () => {
    return(
    <div>
        <Hero name = "Baki" img = "https://cupulatrovao.com.br/wp-content/uploads/2020/05/baki-capa.jpg"/>
        <Enemy name = "Yujiro" img = "https://cdna.artstation.com/p/assets/images/images/030/175/628/large/sean-gorman-yujiro-hanma-render-ed.jpg?1599824348"/>

    </div>
    )
}

const World = ({Children}) => {
    return(
        <div>
            {Children}
        </div>
    )
}

export {Hero, Enemy, Arena, World}
