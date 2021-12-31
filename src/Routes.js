import { BrowserRouter,Route,Switch } from "react-router-dom";
import Authentication from "./pages/authentication/Authentication";
import Cart from "./pages/cart/Cart";
import Home from "./pages/homepage/Homepage";
import Productpage from "./pages/productpage/Productpage";
import Header from "./components/header/Header";
import Login from "./pages/login/Login"
import signup from "./pages/signup/signup";
import SignUp from "./pages/signup/signup";
const Routes = () => {
    return (
        <BrowserRouter>
        <div>
            <Header />
           
        <Switch>
            
            <Route path="/Cart"  component={Cart}/>
            <Route path="/productpage"  component={Productpage}/>
            <Route path="/authentication"  component={Authentication}/>
            <Route path="/login"  component={Login}/>
            
            
            <Route path="/" exact component={Home}/>
            <SignUp />
        </Switch>
       
        </div>
       </BrowserRouter>
    );
};
export default Routes;