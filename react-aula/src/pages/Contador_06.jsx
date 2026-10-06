import { useState } from "react";

export default function Contador_06() {

    const [contador, setContador] = useState(0);

    function incrementar() {
        setContador(valor => valor + 1);
    }

    function decrementar() {
        setContador(valor => valor - 1);
    }

    return (
        <>
            <h1>Contador_06: {contador}</h1>
            <button onClick={incrementar}>
                Incrementar
            </button>
            <button onClick={decrementar}>
                Decrementar
            </button>
        </>
    );

}