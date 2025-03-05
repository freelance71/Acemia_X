import React, { useState } from "react";
import "./App.css";

const Producto = ({ imagen, titulo, descripcion }) => {
  const [cantidad, setCantidad] = useState(0);

  return (
    <div className="card">
      <img src={imagen} alt={titulo} className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{titulo}</h2>
        <p className="card-text">{descripcion}</p>
        <div className="card-actions">
          <button onClick={() => setCantidad(cantidad - 1)} className="btn">-</button>
          <span className="cantidad">{cantidad}</span>
          <button onClick={() => setCantidad(cantidad + 1)} className="btn">+</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const imagen = "https://nintendo.pe/wp-content/uploads/2021/06/nintendo-switch-2313343.jpg"; // Asegúrate de colocar la imagen en public/
  const productos = [
    { id: 1, imagen, titulo: "Consola de videojuegos", descripcion: "Esta es una consola de videojuegos que entretiene a los programadores en sus breaks" },
    { id: 2, imagen, titulo: "Consola de videojuegos", descripcion: "Esta es una consola de videojuegos que entretiene a los programadores en sus breaks" },
    { id: 3, imagen, titulo: "Consola de videojuegos", descripcion: "Esta es una consola de videojuegos que entretiene a los programadores en sus breaks" },
  ];

  return (
    <div className="container">
      {productos.map((producto) => (
        <Producto key={producto.id} {...producto} />
      ))}
    </div>
  );
};

export default App;