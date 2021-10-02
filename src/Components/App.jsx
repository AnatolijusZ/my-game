import React from "react";
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import CharCreation from "./CreateChar";


function App() {
    
    

     
        return (
            <Router>
            <div className = "main-menu">
                <Route path={"/:create"}>
                <button onClick={() => <CharCreation></CharCreation>}>Create character</button>
                </Route>
                <button>Load existing character (not implemented)</button>
            </div>
            </Router>
        )
    
    
}

export default App;