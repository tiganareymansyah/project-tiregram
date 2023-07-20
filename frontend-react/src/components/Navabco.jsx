import { NavLink, Link } from "react-router-dom"
import Button from "./Button"

export default function Navabco() {
    return (
        <header className="flex justify-between items-center px-10 py-5 header-navlog">
            <Link>
                <h1 className="text-3xl text-pink-600 judulnavlogreg">TiRegram</h1>
            </Link>
            <NavLink to={"/"}>
                <Button name="Back" />
            </NavLink>
        </header>
    )
}
