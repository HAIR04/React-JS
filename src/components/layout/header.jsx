import { Link, NavLink } from "react-router-dom"
import "./header.css"
const Header = () => {
    return (
        <ul className="header-item">
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/users">Users</NavLink></li>
<li><NavLink to="/books">Book</NavLink></li>
<li><NavLink to="/login">Login</NavLink></li>
</ul>
    )
}

export default Header