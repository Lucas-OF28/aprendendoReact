import './App.css'
import React from "react";

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional';
import CondicionalComIf from './components/CondicionalComIf';

export default (props) => (
  <div className="App">
    <Card titulo="#06 - Condicional v2">
      <CondicionalComIf numero={10}></CondicionalComIf>
    </Card>
    <Card titulo="#05 - Condicional v1">
      <Condicional numero={10}></Condicional>
    </Card>
    <Card titulo="#04 - Repetição">
      <Repeticao></Repeticao>
    </Card>
    <Card titulo="#03 - Componente Com Filhos">
    <ComFilhos>
      <ul>
        <li>Lucas</li>
        <li>Pedro</li>
        <li>Mario</li>
        <li>Ana</li>
      </ul>
      </ComFilhos>
    </Card>
    <Card titulo="#02 -Componente com parametro">
      <ComParametro titulo="Titulo" 
       subtitulo="Subtitulo" />
    </Card>
    <Card titulo="#01 - Primeiro Componente">
      <Primeiro />
    </Card>

    {/*<ComFilhos>
      <ul>
        <li>Lucas</li>
        <li>Pedro</li>
        <li>Mario</li>
        <li>Ana</li>
      </ul>
      </ComFilhos>*/}

    {/*<Primeiro/>
     <ComParametro titulo="Titulo"subtitulo="Subtitulo"/>
<ComParametro titulo="Opa" subtitulo="Epa"/> */}
  </div>);