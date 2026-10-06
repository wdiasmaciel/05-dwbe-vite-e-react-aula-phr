import { useState } from "react";
import '../style/style.css'

function CardProduto_10() {

    const [nome, setNome] = useState("");
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
            <h1>CardProduto_11</h1>
            <h2>{nome}</h2>
            <p>Estoque: {estoque}</p>
            <div>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <button onClick={vender}>
                Vender
            </button>
            <button onClick={repor}>
                Repor
            </button>
        </div>
    );

}

export default CardProduto_10;