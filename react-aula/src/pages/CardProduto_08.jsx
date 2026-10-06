import { useState } from "react";
import '../style/style.css'

function CardProduto() {

    const [estoque, setEstoque] = useState(10);

    function vender() {
        if (estoque > 0) {
            setEstoque(estoque - 1);
        }
    }

    return (
        <div className="card">
            <h2>Notebook Dell</h2>
            <p>Estoque: {estoque}</p>
            <button onClick={vender}>
                Vender
            </button>
        </div>
    );

}

export default CardProduto;