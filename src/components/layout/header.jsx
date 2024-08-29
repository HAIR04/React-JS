import { Link, NavLink } from "react-router-dom"
import "./header.css"
const Header = () => {
    return (
        <ul>
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/users">users</NavLink></li>
<li><NavLink to="/products">products</NavLink></li>
<li><NavLink to="/login">Login</NavLink></li>
</ul>
    )
}

export default Header