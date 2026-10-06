export default function Contador_04() {

    const [contador, setContador] = useState(0);

    function incrementar() {
        setContador(contador + 1);
    }

    return (
        <button onClick={incrementar}>
            Incrementar
        </button>
    );

}