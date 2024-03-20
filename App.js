import React from "react";
import Filho from "./components/atividade01/questão01/Filho";
import Pai from "./components/atividade01/questão01/Pai";
/*
function App() {
  return (
    <div>
        <h1>Desenvolvimento para WEB!</h1>
        <Filho/>
        <Pai/>
    </div>
  );
}
 */

import {PlacaMae, Memoria, PlacaDeVideo} from "./components/atividade01/MeuPc";

import {Arena, World} from "./components/atividade01/Batalha";

function App() {
  return (
    <div>
        <h1>Desenvolvimento para WEB!</h1>
        <Arena/>
        <World>
            <Arena/>
            <Arena/>
            <Arena/>
        </World>
    </div>
  );
}
/*
function App() {
  return (
    <div>
        <h1> Desenvolvimento de Software para a WEB!</h1>
        <PlacaMae nome = "Samsung" preco = {600.00} />
        <Memoria nome = "Lenovo" preco={300.00} />
        <PlacaDeVideo nome = "Dell" preco={1200.00}/>
</div>
  );
}
*/
export default App;
