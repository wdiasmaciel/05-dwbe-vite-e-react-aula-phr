import { useState } from "react";

export default function Contador_05() {

    const [contador, setContador] = useState(0);

    function incrementar() {
        setContador(contador + 1);
    }

    function decrementar() {
        setContador(contador - 1);
    }

    return (
        <>
            <h1>Contador_05: {contador}</h1>
            <button onClick={incrementar}>
                Incrementar
            </button>
            <button onClick={decrementar}>
                Decrementar
            </button>
        </>
    );

}