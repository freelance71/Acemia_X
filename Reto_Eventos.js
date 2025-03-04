import React from 'react';

function Formulario() {
    const cambiarCorreo = (e) => {
        console.log(e.target.value);
    };

    const cambiarClave = (e) => {
        console.log(e.target.value);
    };

    const registrarDatos = (e) => {
        e.preventDefault();
        alert(`Correo: ${e.target.correo.value}, Clave: ${e.target.clave.value}`);
    };

    return (<div>
        <form onSubmit={registrarDatos}>
            <input
                name="correo"
                type="email"
                placeholder="Correo electrónico o número de teléfono"
                onChange={cambiarCorreo}
            />
            <input
                name="clave"
                type="password"
                placeholder="Clave"
                onChange={cambiarClave}
            />
            <button type="submit">Iniciar sesión</button>
        </form>
        <a href="#">¿Olvidaste tu contraseña?</a>
    </div>);
}
export default Formulario;