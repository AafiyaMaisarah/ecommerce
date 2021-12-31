import './styles.module.css';
import {Link} from 'react-router-dom'
function Header(){
    return(
       
            <header>
                <ul>
                  <Link to ="/" ><li>access_</li></Link>
                    <Link to="/cart"> <li>Cart</li></Link>
                  <Link to="/login" > <li>login/signup</li></Link>
                </ul>
            </header>
        
    )
}
export default Header;