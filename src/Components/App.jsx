import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateChar from "./CreateChar";
import getId from "../Shared/getId";

function App() {
  const [characters, setCharacters] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [str, setStr] = useState(5);
  const [vit, setVit] = useState(5);
  const [dex, setDex] = useState(5);
  const [luck, setLuck] = useState(5);
  const [agi, setAgi] = useState(5);
  

  

  useEffect(()=> {
    const charactersCopy = JSON.parse(localStorage.getItem('allCharacters'));
    if (null === charactersCopy) {
        return;
    }
    setCharacters (charactersCopy);
},[]);

  const newCharacter = () => {
    const player = {
      id: getId(),
      name: nameInput,
      strength: str,
      vitality: vit,
      dexterity: dex,
      agility: agi,
      luck: luck
    };
    const charactersCopy = characters.slice();
    charactersCopy.push(player);
    setCharacters(charactersCopy);
    localStorage.setItem("allCharacters", JSON.stringify(charactersCopy));
  };

  const editName = (id, nameInput) => {
    const charactersCopy = characters.slice();
    for (let i = 0; i < charactersCopy.length; i++) {
      if (charactersCopy[i].id === id) {
        charactersCopy[i].name = nameInput;
        break;
      }
    }
    setCharacters(charactersCopy);
    localStorage.setItem("allCharacters", JSON.stringify(charactersCopy));
  };

  const strIncrease = (id, strength, stat) => {
    if (stat > 0) {
    const charactersCopy = characters.slice();
    for (let i = 0; i < charactersCopy.length; i++) {
      
      if (charactersCopy[i].id === id) {
        charactersCopy[i].strength = strength + 1;
        setStr(charactersCopy.strength)
        break;
      }
    }
    setCharacters(charactersCopy);
    localStorage.setItem("allCharacters", JSON.stringify(charactersCopy));
  }};

  const vitIncrease = (id, vitality, stat) => {
    if (stat > 0) {
    const charactersCopy = characters.slice();
    for (let i = 0; i < charactersCopy.length; i++) {
      
      if (charactersCopy[i].id === id) {
        charactersCopy[i].vitality = vitality + 1;
        setVit(charactersCopy.vitality)
        break;
      }
    }
    setCharacters(charactersCopy);
    localStorage.setItem("allCharacters", JSON.stringify(charactersCopy));
  }};

  const dexIncrease = (id, dexterity, stat) => {
    if (stat > 0) {
    const charactersCopy = characters.slice();
    for (let i = 0; i < charactersCopy.length; i++) {
      
      if (charactersCopy[i].id === id) {
        charactersCopy[i].dexterity = dexterity + 1;
        setDex(charactersCopy.dexterity)
        break;
      }
    }
    setCharacters(charactersCopy);
    localStorage.setItem("allCharacters", JSON.stringify(charactersCopy));
  }};
  
  const agiIncrease = (id, agility, stat) => {
    if (stat > 0) {
    const charactersCopy = characters.slice();
    for (let i = 0; i < charactersCopy.length; i++) {
      
      if (charactersCopy[i].id === id) {
        charactersCopy[i].agility = agility + 1;
        setAgi(charactersCopy.agility)
        break;
      }
    }
    setCharacters(charactersCopy);
    localStorage.setItem("allCharacters", JSON.stringify(charactersCopy));
  }};

  const luckIncrease = (id, luck, stat) => {
    if (stat > 0) {
    const charactersCopy = characters.slice();
    for (let i = 0; i < charactersCopy.length; i++) {
      
      if (charactersCopy[i].id === id) {
        charactersCopy[i].luck = luck + 1;
        setLuck(charactersCopy.luck)
        break;
      }
    }
    setCharacters(charactersCopy);
    localStorage.setItem("allCharacters", JSON.stringify(charactersCopy));
  }};


  

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
            {characters.length !==0 && characters.map((character) => (
              <CreateChar
                key={character.id}
                id={character.id}
                str={character.strength}
                vit={character.vitality}
                dex={character.dexterity}
                agi={character.agility}
                luck={character.luck}
                setName={editName}
                strInc={strIncrease}
                vitInc={vitIncrease}
                dexInc={dexIncrease}
                agiInc={agiIncrease}
                luckInc={luckIncrease}
              />
            ))}
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
