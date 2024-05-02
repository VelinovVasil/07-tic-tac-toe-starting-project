import { useState } from "react";

export default function Player({name, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);

        if (isEditing) {
          onChangeName(symbol, playerName);
        }
    }

    function handleSaveClick() {
        setIsEditing(false);
    }

    function handleChangeName(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
          {!isEditing &&
            <span className="player-name">{playerName}</span>
          }
          {isEditing &&
            <input type="text" required defaultValue={playerName} onChange={(e) => handleChangeName(e)}/>
          }
          <span className="player-symbol">{symbol}</span>
        </span>
        {!isEditing &&
            <button onClick={() => handleEditClick()}>Edit</button>
        }
        {isEditing &&
            <button onClick={() => handleSaveClick()}>Save</button>
        }
      </li>
    );
}