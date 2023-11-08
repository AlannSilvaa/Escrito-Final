import react from 'react';
import { Link, link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>BOTON</h1>
            <Link to="/crear">Crear Usuario</Link>
        </div>
    );
}

export default Home;