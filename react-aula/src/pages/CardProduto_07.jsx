import { useState } from "react";

function CardProduto() {

    const [estoque, setEstoque] = useState(10);

    return (
        <div className="card">
            <h2>Notebook Dell</h2>
            <p>Estoque: {estoque}</p>
            <button onClick={() => setEstoque(estoque - 1)}>
                Vender
            </button>
        </div>
    );

}

export default CardProduto;