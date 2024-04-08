import logo from "../assets/Logo.svg"

export const Footer = () => {
    return <footer style={{"display": "flex", "justifyContent": "space-evenly"}}>
        {/* <div> */}

            <img src={logo} alt ="footer-logo"/>
        {/* </div> */}
        <div className="footer-links">
            <div >
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservations</a></li>
                    <li><a href="/">Order Online</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                    <li><a href="/">Address</a></li>
                    <li><a href="/">email</a></li>
                    <li><a href="/">Phone number</a></li>
                </ul>
            </div>
            <div>
                <h4>Social media links</h4>
                <ul>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">Twitter</a></li>

                </ul>
            </div>
        </div>
    </footer>
}


