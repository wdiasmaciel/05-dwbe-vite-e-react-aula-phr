import {useState} from "react";

function Contador_01() {

const [contador, setContador] = useState(0);

return (
	<div>
		<h1>{contador}</h1>
	</div>
);

}

export default App;