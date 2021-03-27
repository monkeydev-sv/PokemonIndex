import React, { useState } from "react";
import typeColors from "../../helpers/typeColors";
import "./style.css";

function Card(props) {

    const pokemon = props.pokemon;
    const [check, setCheck] = useState(true);
    const [openDeck, setOpenDeck] = useState(false);
    const openDecker = () => {
        setOpenDeck((prev) => !prev);
        setCheck(false);
    };
    return (
        <div className="Card">
            <div className="btn">
                <button onClick={openDecker}>
                    {openDeck ? "Close" : "Open"}
                </button>
            </div>
            <div className="btn1">
                <button onClick={() => props.removePokemon(pokemon.id)}>
                    Delete
                </button>
            </div>

            <div className="Card__name">#{pokemon.id}</div>
            <div className="Card__name">{pokemon.name}</div>
            {openDeck && (
                <div className="Card__info">
                    <div className="Card__img">
                        <img src={pokemon.sprites.front_default} alt="" />
                        <img src={pokemon.sprites.back_default} alt="" />
                    </div>
                    <div className="Card__types">
                        {pokemon.types.map((type) => {
                            return (
                                <div
                                    className="Card__type"
                                    style={{
                                        backgroundColor:
                                            typeColors[type.type.name],
                                    }}
                                >
                                    {type.type.name}
                                </div>
                            );
                        })}
                    </div>
                    <div className="Card__info">
                        XP: {pokemon.base_experience}
                    </div>

                    <div className="Card__info">Weight:{pokemon.weight}</div>
                    <div className="Card__info">Height: {pokemon.height}</div>
                    <div className="Card__info">
                        Ability: {pokemon.abilities[0].ability.name}
                    </div>
                </div>
            )}

            <div className={openDeck ? "active" : ""}>
                <div className="Card__img">
                    <img
                        src={
                            check
                                ? "./npics.png"
                                : pokemon.sprites.front_default
                        }
                        alt={pokemon.name}
                    />
                </div>
            </div>
        </div>
    );
}

export default Card;
