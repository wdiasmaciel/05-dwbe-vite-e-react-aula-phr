import { useState } from "react";
import '../style/style.css'

function CardProduto_09() {

    const [estoque, setEstoque] = useState(10);
    
    function vender() {
        if (estoque > 0) {
            setEstoque(estoque - 1);
        }
    }
    
    function repor() {
        setEstoque(estoque + 1);
    }

    return (
        <div className="card">
            <h1>CardProduto_09</h1>
            <h2>Notebook Dell</h2>
            <p>Estoque: {estoque}</p>
            <button onClick={vender}>
                Vender
            </button>
            <button onClick={repor}>
                Repor
            </button>
        </div>
    );

}

export default CardProduto_09;