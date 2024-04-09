export const NavBar = () => {
    return <nav>
        <ul className="nav-list" style={{"display": "flex"}}>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/booking">Reservations</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Login</a></li>
        </ul>
    </nav>
}
