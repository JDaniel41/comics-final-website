import React from "react";

export default function CharacterBox({
    characterName,
    characterDescription,
    characterImg,
}) {
    return (
        <div className="bg-navbar flex flex-col items-center m-4">
            <img src={characterImg} alt={characterName} className="max-h-96" />
            <h1 className="text-2xl">{characterName}</h1>
            <p className="text-center">{characterDescription}</p>
        </div>
    );
}
