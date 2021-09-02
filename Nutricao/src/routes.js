import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/home";
import Post from "./Pages/Post/post";
import Favoritos from "./Pages/Favoritos/index";
import Erro from "./Pages/Erro/index";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/post/:id" component={Post} />
                <Route exact path="/favoritos" component={Favoritos} />
                <Route path="*" component={Erro} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
