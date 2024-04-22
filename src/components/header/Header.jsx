import "./header.css"
import Navbar from '../navbar/Navbar'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">logo</div>
                <div><Navbar /></div>
            </div>
        </header>
    )
}

export default Header