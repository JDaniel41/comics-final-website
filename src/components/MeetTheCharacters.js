import React from "react";

import adaine from "../assets/adaine.png";
import fig from "../assets/fig.png";
import goldenhoard from "../assets/goldenhoard.png";
import CharacterBox from "./CharacterBox";

export default function MeetTheCharacters() {
    const characterInfo = [
        {
            characterName: "Adaine",
            characterDescription:
                "Adaine is a divination wizard and the youngest daughter of the elvish Angwyn Abernant, an ambassador of Fallinel. Her biggest weakness: panic attacks. ",
            characterImg: adaine,
        },
        {
            characterName: "Fig",
            characterDescription:
                "Fig is Adaine’s best friend and half wood elf, half demon. ",
            characterImg: fig,
        },
        {
            characterName: "Goldenhoard",
            characterDescription:
                "Goldenrod is vice principal of Aguefort and the reason Adaine meets her friends: detention.",
            characterImg: goldenhoard,
        },
    ];

    // let characterNames = [];
    // let characterDescriptions = [];
    // let characterImgs = [];

    // for (let i = 0; i < characterInfo.length; i++) {
    //     characterNames.push(characterInfo[i].characterName);
    //     characterDescriptions.push(characterInfo[i].characterDescription);
    //     characterImgs.push(characterInfo[i].characterImg);
    // }
    return (
        <div className="bg-navbar p-5" id="characters">
            <div className="grid grid-cols-1 md:grid-cols-3">
                {characterInfo.map((character) => {
                    return (
                        <CharacterBox
                            characterName={character.characterName}
                            characterImg={character.characterImg}
                            characterDescription={
                                character.characterDescription
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
}
