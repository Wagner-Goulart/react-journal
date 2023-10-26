import { Link } from "react-router-dom"

function Contact(){
    return(
        <div>
            <h1>Página de Contatos</h1>
            <p>
                <Link to="/contact/1">Forma de contato 1</Link>
                <Link to="/contact/2">Forma de contato 2</Link>
                <Link to="/contact/3">Forma de contato 3</Link>
            </p>
        </div>
    )
}

export { Contact }