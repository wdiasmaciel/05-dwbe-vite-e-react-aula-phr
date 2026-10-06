import { useState } from "react";

function Contador_01() {

	const [contador, setContador] = useState(0);

	return (
		<div>
			<h1>Contador_01: {contador}</h1>
		</div>
	);

}

export default Contador_01;