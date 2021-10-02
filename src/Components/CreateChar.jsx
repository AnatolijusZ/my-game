import React, {useState} from "react";
import getId from '../Shared/getId';

function CharCreation() {
     const [character, setCharacter] = useState([]);
     const [nameInput, setNameInput] = useState("");


    const newPlayer = () => {
        const player = {
            id: getId(),
            name: nameInput,
        }

    }
    const NameInputHandler= (e) => {
        setNameInput(e.target.value)
        };

    return (
        <input type="text" value={nameInput} onChange={NameInputHandler}></input>
    )
}
export default CharCreation;
