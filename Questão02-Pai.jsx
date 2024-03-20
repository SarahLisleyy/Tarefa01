import React from "react";
import Filho from "./Filho";

const Pai = () => {
    function receberMensagemDoFilho (mensagem){
        alert("Recebi do meu filho: " + mensagem)

    }

    return (
        <div>
            <Filho altura={1.8} peso={90}
                   enviarMensagemParaOPai={receberMensagemDoFilho}
            />
        </div>
    )
}
export default Pai
