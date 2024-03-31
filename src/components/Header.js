import { NavBar} from "./NavBar";
import logo from "../assets/littlelemon_logo.svg";

export const Header = () => {
    return <>
     <img src={logo} alt ="little lemon logo"/>
     <NavBar/>
    </>
}

