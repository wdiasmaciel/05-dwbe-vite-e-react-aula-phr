import { useState } from "react";

export default function Contador_04() {

    const [contador, setContador] = useState(0);

    function incrementar() {
        setContador(contador + 1);
    }

    return (
        <>
            <h1>Contador_04: {contador}</h1>
            <button onClick={incrementar}>
                Incrementar
            </button>
        </>
    );

}