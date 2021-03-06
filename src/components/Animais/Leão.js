import React from "react";

import Header from "../Header";
import Nav from "../Nav";
import Anuncios from "../Anuncios";
import Footer from "../Footer";

import leao1 from "../../images/leao/leao1.jpg";
import leao2 from "../../images/leao/leao2.jpg";
import leao3 from "../../images/leao/leao3.jpg";

function Leao() {
  return (
    <div className="estrutura">
      <Header />
      <Nav />

      <main className="content">
        <div className="titulo">
          <h1>Leão</h1>
          <span>da família felidae</span>
        </div>
        <div className="caracteristicas">
          <div>
            <span className="numero">190</span>
            <span className="rotulo">kg</span>
          </div>
          <div>
            <span className="numero">14</span>
            <span className="rotulo">age</span>
          </div>
        </div>

        <p className="col-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla at risus.
        </p>

        <img className="img1" src={leao1} alt="leao1" />
        <p className="destaque">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          ligula eu lectus lobortis condimentum.
        </p>

        <img className="img2" src={leao2} alt="leao2" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla at risus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla at risus.
        </p>
        <blockquote className="citacao col-wide">
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ligula eu lectus lobortis condimentum.”
          </p>
        </blockquote>

        <ul className="atributos">
          <li>Surgiu: 00.000 anos</li>
          <li>Tipo: Mamífero</li>
          <li>Idade Média: 20 anos</li>
          <li>Macho adulto: 190kg</li>
          <li>Fêmea adulta: 130kg</li>
          <li>Família: Felidae</li>
        </ul>

        <div className="informacoes">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla at risus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla at risus.
          </p>
        </div>
        <img className="col-wide" src={leao3} alt="leao3" />
      </main>
      <Anuncios />
      <Footer />
    </div>
  );
}

export default Leao;
