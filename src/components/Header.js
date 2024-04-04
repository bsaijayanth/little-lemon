import { NavBar} from "./NavBar";
import logo from "../assets/littlelemon_logo.svg";

export const Header = () => {
    return <>
    <header style={{"display": "flex", "justifyContent": "space-evenly"}}>
        <img src={logo} alt ="little lemon logo"/>
        <NavBar/>
    </header>
    </>
}

