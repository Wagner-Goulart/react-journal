import { Link } from "react-router-dom"

function NavBar(){
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contatos</Link>
        </nav>
    )
}

export { NavBar }