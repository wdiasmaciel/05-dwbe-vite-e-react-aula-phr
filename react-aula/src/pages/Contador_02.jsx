import { useState } from "react";

function Contador_02() {

    const [contador, setContador] = useState(0);

    return (

        <div>
            <h1>Contador_02: {contador}</h1>
            <button onClick={() => setContador(contador + 1)}>
                Incrementar
            </button>
        </div>
    );
}

export default Contador_02;