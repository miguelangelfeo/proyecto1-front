import React, { useState, useEffect } from "react";
import axios from "axios";

const ListaNombres = () => {
    const [nombre, setNombre] = useState("");
    const [nombres, setNombres] = useState([]);

    // Cargar nombres desde el backend cuando el componente se monta
    useEffect(() => {
        cargarNombres();
    }, []);
    const cargarNombres = async () => {
        try {
            const response = await axios.get("/api/nombres-bd");
            setNombres(response.data);
        } catch (error) {
            console.error("Error al obtener los nombres", error);
        }
    };
    const guardar = async () => {
        if (nombre.trim() === "") return;
        try {
            await axios.post("/api/nombre", { nombre });
            setNombre("");  // Limpiar el input
            cargarNombres(); // Recargar los nombres después de guardar
        } catch (error) {
            console.error("Error al guardar el nombre", error);
        }
    };

    return (
        <div>
            <p>Ingresa un nombre: </p>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <button onClick={guardar}>Enviar</button>
            <ul>
                {nombres.map((elemento, index) => (
                    <li key={index}>{elemento.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListaNombres;