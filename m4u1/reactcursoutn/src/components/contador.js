'use client';
import React, { useState } from "react";

// Componente del Cliente: Necesita interacción y estado
export function Contador() {
    const [contador, setContador] = useState(0);

    const handleClick = () => {
        setContador(contador + 1);
    };
    const handleReset = () => {
        setContador(0);
    };

    return (
        <div>
            <div>   
            <p>Has hecho clic {contador} veces.</p>
            {/* manejo de evento desde el lado del cliente */}
            <button onClick={handleClick}>
                Incrementar
            </button>
            </div>
            <div>
            <button onClick={handleReset}>
                Reset
            </button>
            </div>  

        </div>
    );
}