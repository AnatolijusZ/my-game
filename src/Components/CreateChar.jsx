import React, { useState } from "react";
//import getId from '../Shared/getId';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function CreateChar({id, str, dex, vit, agi, luck, setName, strInc, dexInc, vitInc, agiInc, luckInc}) {
  const [nameInput, setNameInput] = useState("");
  const [stat, setStat] = useState('10');

  const NameInputHandler = (e) => {
    setNameInput(e.target.value);
  };

  const statHandler = () => {
    setStat(stat - 1);
  };

  return (
    <>
      <div className="stats">
      
        <span>You have {stat} points remaining</span>
        Strength: {str}
        <button onClick={() => {strInc(id, str); statHandler();}}>Increase</button>
        Vitality: {vit}
        <button onClick={() => {vitInc(id, vit); statHandler();}}>Increase</button>
        Dexterity: {dex}
        <button onClick={() => {dexInc(id, dex); statHandler();}}>Increase</button>
        Agility: {agi}
        <button onClick={() => {agiInc(id, agi); statHandler();}}>Increase</button>
        Luck: {luck}
        <button onClick={() => {luckInc(id, luck); statHandler();}}>Increase</button>
      

        Enter your character name:
        <input type="text" value={nameInput} onChange={NameInputHandler} />
        <button onClick={() => setName(id, nameInput)}>Submit</button>
        <Link to="/main">
          <button>Start adventure</button>
        </Link>
      </div>
      {console.log(nameInput)}
      {console.log(vit)}
    </>
  );
}
export default CreateChar;
