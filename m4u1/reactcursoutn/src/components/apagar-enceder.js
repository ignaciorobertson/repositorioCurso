'use client';
import React, { useState } from "react";

export function BotonLuz(){
    const [isOn, setIsOn] = useState(true); // true = encendido, false = apagado

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return (
        <button onClick={handleToggle}>
            {isOn ? 'Apagar' : 'Encender'}
        </button>
    );
}

