import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import CharCreation from "./CreateChar";
import getId from "../Shared/getId";


function App() {
    
    const [characters, setCharacters] = useState([]);
    const [nameInput, setNameInput] = useState("");
    const [str, setStr] = useState(5);
    const [vit, setVit] = useState(5);
    const [dex, setDex] = useState(5);

    

    const newCharacter = () => {
       const player = {
           id: getId(),
           name: nameInput,
           strength: str,
           vitality: vit,
           dexterity: dex
       }
       const charactersCopy = characters.slice();
       charactersCopy.push(player);
       setCharacters (charactersCopy);
       localStorage.setItem('allCharacters', JSON.stringify(charactersCopy));
    }

     
        return (
            <Router>
                <Switch>            
                    <Route exact path={"/"}>
                    <div className = "main-menu">
                        <Link to="/create"> 
                        <button  onClick={() => newCharacter(), characters.map(b => <CharCreation key={b.id} name={b.name} str={b.strength} vit={b.vitality} dex={b.dexterity}/> ) }>Create character</button>
                        </Link>
                        <button>Load existing character (not implemented)</button>
                    </div>
                    </Route>

                    <Route path={"/create"}>
                        <div className="char-creation-menu">
                        <CharCreation/>
                        </div>
                    </Route>
                </Switch>
            </Router>
        )
    
    
}

export default App;