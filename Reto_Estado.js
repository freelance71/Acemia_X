import React, { useState } from 'react';

function Contador() {
    const [cantidad, setCantidad] = useState(0);
    const aumentarCantidad = () => {
        setCantidad(cantidad + 1);
    };
    const disminuirCantidad = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    };
    return (
        <div>
            <button onClick={aumentarCantidad}>Aumentar</button>
            <p>{cantidad}</p>
            <button onClick={disminuirCantidad}>Disminuir</button>
        </div>
    );
}
export default Contador;