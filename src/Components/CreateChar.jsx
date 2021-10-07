import React, {useState} from "react";
import getId from '../Shared/getId';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function CreateChar(id, name, str, dex, vit, setName, strInc) {
 
    const [nameInput, setNameInput] = useState("");



    const NameInputHandler= (e) => {
        setNameInput(e.target.value)
        };

    
        return (<>
           
            <div className="stats">
            Strength: {str}
            <button onClick={() => strInc()}>Increase</button>
            Vitality: {vit}
            <button>Increase</button>
            Dexterity: {dex}
            <button>Increase</button>

            Enter your character name:
            <input type="text" value={nameInput} onChange={NameInputHandler} />
            <button onClick={()=> setName(nameInput)}>Submit</button>                      
                    <Link to="/main">
                        <button >Start adventure</button>
                    </Link>                    
        </div>
        {console.log(nameInput)}
        {console.log(str)}
    
        </>
    )
}
export default CreateChar;
