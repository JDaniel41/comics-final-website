import React from "react";

import ericahenderson from "../assets/ericahenderson.jpeg";
import karlkerschl from "../assets/karlkerschl.jpeg";
import ledgerwood from "../assets/ledgerwood.jpeg";
import ArtistBox from "./ArtistBox";

import ledgerwood_sample from "../assets/ledgerwood_sample.png";

export default function MeetTheArtists() {
    const characterInfo = [
        {
            characterName: "Erica Henderson",
            characterDescription:
                "Adaine is a divination wizard and the youngest daughter of the elvish Angwyn Abernant, an ambassador of Fallinel. Her biggest weakness: panic attacks. ",
            characterImg: ericahenderson,
        },
        {
            characterName: "Karl Kerschl",
            characterDescription:
                "Fig is Adaine's best friend and half wood elf, half demon. ",
            characterImg: karlkerschl,
        },
        {
            characterName: "Mark Ledgerwood",
            characterDescription:
                "Goldenrod is vice principal of Aguefort and the reason Adaine meets her friends: detention.",
            characterImg: ledgerwood,
            artSample: ledgerwood,
        },
    ];

    return (
        <div className="bg-navbar p-5" id="characters">
            <h1 className="text-4xl font-bold text-center p-12">
                Meet the Artists!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {characterInfo.map((character) => {
                    return (
                        <ArtistBox
                            characterName={character.characterName}
                            characterImg={character.characterImg}
                            characterDescription={
                                character.characterDescription
                            }
                            artSample={character.artSample}
                        />
                    );
                })}
            </div>
        </div>
    );
}
