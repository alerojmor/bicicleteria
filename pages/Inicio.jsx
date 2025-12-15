import React from 'react'

function Inicio() {
  return (
    <>
    <div style={{textAlign: 'center'}}>
    <h1>Bicicleteria Colombike  </h1>
    <hr />
    <main>
      <p>En Colombike ofrecemos los mejores productos para los aficionados al ciclismo y profesionales tambien. </p>
    </main>

    <img src="./src/images/imagen1.jpg"></img>
    <br />
        <img src="./src/images/imagen2.jpg" width="20%"></img>
    <br />
    <a href="https://artsandculture.google.com/story/mwXRBYATtgPOLg?hl=es-419" target="_blank">[+] info</a>
    <br />
    <hr />
    <img src="./src/images/instagram.svg" alt="Imagen de bicicletas" width={50} height={50}></img>
    <a href="https://www.instagram.com/colombike.2025">Instagram</a>
    <br />
    <img src="./src/images/whatsapp.svg" alt="Imagen de bicicletas" width={50} height={50}></img>
    <a href="https://wa.me/541136917016">Whatsapp</a>
    <br />

    <br />
    <a href="https://www.unc.edu.ar/vida-estudiantil/dale-una-vuelta" target='_blank'>Una bicicleta es la mejor elección</a>
    </div>
    </>
  )
}

export default Inicio