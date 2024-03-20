import React from "react";
    const PlacaMae = ({nome, preco}) => {
        return(
            <div>
                <h3>Nome: {nome}</h3>
                <p>Preço: R$ {preco.toFixed(2)} </p>
            </div>
        )
    }

    const Memoria = ({nome, preco}) => {
        return(
            <div>
                <h3>Nome: {nome}</h3>
                <p>Preço: R$ {preco.toFixed(2)} </p>
            </div>
        )
    }

    const PlacaDeVideo = ({nome, preco}) => {
        return (
            <div>
                <h3>Nome: {nome}</h3>
                <p>Preço: R$ {preco.toFixed(2)} </p>
            </div>
        )
    }


export {PlacaMae, Memoria, PlacaDeVideo}
