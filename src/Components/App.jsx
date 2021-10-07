import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateChar from "./CreateChar";
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
      dexterity: dex,
    };
    const charactersCopy = characters.slice();
    charactersCopy.push(player);
    setCharacters(charactersCopy);
    localStorage.setItem("allCharacters", JSON.stringify(charactersCopy));
  };

  const editName = (id, name) => {
    const charactersCopy = characters.slice();
    for (let i = 0; i < charactersCopy.length; i++) {
      if (charactersCopy[i].id == id) {
        charactersCopy[i].name = nameInput;
        break;
      }
    }
    setCharacters(charactersCopy);
    localStorage.setItem("allCharacters", JSON.stringify(charactersCopy));
  };

  const strIncrease = (id, strength) => {
    console.log("test");
    const charactersCopy = characters.slice();
    for (let i = 0; i < charactersCopy.length; i++) {
      
      if (charactersCopy[i].id == id) {
        charactersCopy[i].strength++;
        break;
      }
    }
    setCharacters(charactersCopy);
    localStorage.setItem("allCharacters", JSON.stringify(charactersCopy));
  };

  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <div className="main-menu">
            <Link to="/create">
              <button onClick={() => newCharacter()}>Create character</button>
            </Link>
            <button>Load existing character (not implemented)</button>
          </div>
        </Route>

        <Route path={"/create"}>
          <div className="char-creation-menu">
            {characters.map((character) => (
              <CreateChar
                key={character.id}
                id={character.id}
                str={character.strength}
                vit={character.vitality}
                dex={character.dexterity}
                setName={editName}
                strInc={strIncrease}
              />
            ))}
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
