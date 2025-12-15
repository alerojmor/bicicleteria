import React from "react";

function Servicios() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Nuestros Servicios</h1>
      <div className="row">
        
        {/* Servicio 1 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Reparaciones y Mantenimiento</h5>
              <p className="card-text">
                Ajustes de frenos, cambios, ruedas y todo lo que tu bici necesita para rodar segura.
              </p>
            </div>
          </div>
        </div>

        {/* Servicio 2 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Puesta a Punto</h5>
              <p className="card-text">
                Limpieza, lubricación y calibración completa, ideal antes de una salida o competencia.
              </p>
            </div>
          </div>
        </div>

        {/* Servicio 3 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Repuestos y Accesorios</h5>
              <p className="card-text">
                Contamos con piezas originales y accesorios para mejorar tu experiencia sobre dos ruedas.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Servicios;
