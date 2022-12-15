import React from "react";

export default function CharacterBox({
    characterName,
    characterDescription,
    characterImg,
}) {
    return (
        <div className="bg-navbar flex flex-col items-center">
            <img src={characterImg} alt={characterName} />
            <h1 className="text-2xl">{characterName}</h1>
            <p className="text-center">{characterDescription}</p>
        </div>
    );
}
