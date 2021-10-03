import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import CharCreation from "./CreateChar";


function App() {
    
    

     
        return (
            <Router>
                <Switch>            
                    <Route exact path={"/"}>
                    <div className = "main-menu">
                        <Link to="/create"> <button>Create character</button></Link>
                        <button>Load existing character (not implemented)</button>
                    </div>
                    </Route>

                    <Route path={"/create"}>
                        <div className="char-creation-menu">
                        <CharCreation></CharCreation>
                        </div>
                    </Route>
                </Switch>
            </Router>
        )
    
    
}

export default App;