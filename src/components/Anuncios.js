import React from "react";

import anuncio1 from "../images/anuncio-1.jpg";
import anuncio2 from "../images/anuncio-2.jpg";

function Anuncios() {
  return (
    <aside class="anuncios">
      <div class="anuncio-item">
        <img src={anuncio1} alt="anuncio1" />
      </div>
      <div class="anuncio-item">
        <img src={anuncio2} alt="anuncio2" />
      </div>
    </aside>
  );
}

export default Anuncios;
