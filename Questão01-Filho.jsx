import React from "react";
import Pai from "./Pai";
const Filho = ({altura, peso}) => {
    const imc = peso / (altura*altura);

    const getMessage = () => {
        if(imc < 18){
            return <h3>Abaixo do peso</h3>
        } else if (imc > 25){
            return <h3>Acima do peso</h3>
        } else {
            return <h3>Peso ideal</h3>
        }
    }

    return(
        <div>
            <h2>Mensagem do pai: {getMessage(imc)}</h2>
            <button>
                Enviar mensagem para o pai
            </button>
        </div>
    )
}

export default Filho

