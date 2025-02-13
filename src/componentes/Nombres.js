import React, { useState } from "react";
import "./Nombres.css";

const ListaNombres = () => {
    const [nombre, setNombre] = useState("");
    const [nombres, setNombres] = useState([]);

    const guardar = () => {
        if (nombre.trim() !== "") {
            setNombres([...nombres, nombre]);
            setNombre("");
        }
    };

    return (
        <div className="contenedor">
            <div className="formulario">
                <p>Ingresa un nombre:</p>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Escribe un nombre..."
                />
                <button onClick={guardar}>Enviar</button>
            </div>
            <ul className="lista-nombres">
                {nombres.map((elemento, index) => (
                    <li key={index}>{elemento}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListaNombres;
