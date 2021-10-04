import getId from '../Shared/getId';
function Character() {

    const [characters, setCharacters] = useState([]);

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

    return (<>

        {characters.map(b => <CreateChar key={b.id}/>)}
    </>)
}

export default newCharacter;