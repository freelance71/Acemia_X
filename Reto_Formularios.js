import React, { useState } from 'react';

function NuevaClave() {
    const [claveAntigua, setClaveAntigua] = useState('');
    const [claveNueva, setClaveNueva] = useState('');
    const [confirmarClave, setConfirmarClave] = useState('');

    const cambiarClaveAntigua = (e) => {
        setClaveAntigua(e.target.value);
    }

    const cambiarClaveNueva = (e) => {
        setClaveNueva(e.target.value);
    }

    const cambiarConfirmarClave = (e) => {
        setConfirmarClave(e.target.value);
    }

    const mensaje = () => {
        if (claveNueva !== confirmarClave) {
            return "Por favor asegúrate de que ambas claves coincidan";
        }
        return "Las claves coinciden";
    }

    const enviarFormulario = (e) => {
        e.preventDefault();
        console.log("Clave antigua:", claveAntigua);
        console.log("Clave nueva:", claveNueva);
        console.log("Confirmar clave:", confirmarClave);
    }

    return (
        <form onSubmit={enviarFormulario}>
            <label>
                Clave antigua:
                <input type="password" value={claveAntigua} onChange={cambiarClaveAntigua} />
            </label>
            <label>
                Clave nueva:
                <input type="password" value={claveNueva} onChange={cambiarClaveNueva} />
            </label>
            <label>
                Confirmar clave nueva:
                <input type="password" value={confirmarClave} onChange={cambiarConfirmarClave} />
            </label>
            <button type="submit">Cambiar clave</button>
            <p>{mensaje()}</p>
        </form>
    );
}

export default NuevaClave;