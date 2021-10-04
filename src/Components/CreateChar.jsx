import React, {useState} from "react";
import getId from '../Shared/getId';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function CharCreation() {
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

    const strIncrease = (id, strength) => {
        const charactersCopy = characters.slice();
            for(let i=0; i<charactersCopy.length; i++) {
                if (charactersCopy[i].id == id) {
                    charactersCopy[i].strength++;
                    break;
                }
                
            }
            setCharacters (charactersCopy);
            localStorage.setItem('allCharacters', JSON.stringify(charactersCopy));
    }

    const NameInputHandler= (e) => {
        setNameInput(e.target.value)
        };

        return (<>
            <div className="stats">
            Strength: {str}
            <button onClick={() => strIncrease(), console.log(characters.id)}>Increase</button>
            Vitality: {vit}
            <button>Increase</button>
            Dexterity: {dex}
            <button>Increase</button>
            Enter your character name:
            <input type="text" value={nameInput} onChange={NameInputHandler} />
            <button onClick={() => newCharacter()}>Submit</button>                      
                    <Link to="/main">
                        <button onClick={() => newCharacter()}>Start adventure</button>
                    </Link>                    
        </div>
        {console.log(nameInput)}
        {console.log(str)}
    
        </>
    )
}
export default CharCreation;
