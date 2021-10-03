import React, {useState} from "react";
import getId from '../Shared/getId';
import { useRouteMatch } from "react-router";

function CharCreation() {
     const [character, setCharacter] = useState([]);
     const [nameInput, setNameInput] = useState("");
     const [str, setStr] = useState(5);
     const [vit, setVit] = useState(5);
     const [dex, setDex] = useState(5);

     //let { path, url } = useRouteMatch();


    const newPlayer = () => {
        const player = {
            id: getId(),
            name: nameInput,
            strength: str,
            vitality: vit,
            dexterity: dex
        }
    }

    const strIncrease = () => {
        setStr(str++)
    }

    const NameInputHandler= (e) => {
        setNameInput(e.target.value)
        };

        return (<>
            <div className="stats">
            Strength: {str}
            <button onClick={() => strIncrease()}>Increase</button>
            Vitality: {vit}
            <button>Increase</button>
            Dexterity: {dex}
            <button>Increase</button>
            Enter your character name:
            <input type="text" value={nameInput} onChange={NameInputHandler}/>
        </div>
        {console.log(nameInput)}
        {console.log(str)}
    
        </>
    )
}
export default CharCreation;
