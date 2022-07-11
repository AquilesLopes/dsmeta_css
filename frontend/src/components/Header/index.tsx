import logo from '../../assets/img/logo.svg';
import './styles.css'

function Header() {
    return(
        <header>
            <div className="header-container">
                <img src={logo} alt="Logo DSMeta"></img>
                <h1>DSMeta</h1>
                <p>Desenvolvido por
                    <a href="https://www.github.com/AquilesLopes">
                    @AquilesLopes
                </a>
                </p>
            </div>
        </header>
    )
 }
 
 export default Header