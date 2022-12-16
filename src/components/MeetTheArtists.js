import React from "react";

import ericahenderson from "../assets/henderson_example.png";
import karlkerschl from "../assets/kerschl_example.png";
import ledgerwood from "../assets/ledgerwood_example.png";
import ArtistBox from "./ArtistBox";

export default function MeetTheArtists() {
    const characterInfo = [
        {
            characterName: "Erica Henderson",
            characterDescription: `Erica Henderson is famously known for her work in "The Unbeatable Squirrel Girl" and we\'re so excited to have her on board! We wanted to work with her because her art style is very good for creating characters with cartoony styles. This is perfect for "Divination Dillema" as her art style will allow us to maintain the original lighthearted spirit exhibited in "Fantasy High". Additionally, her characters show vivid emotions, and we think that\'s especially important given the subject matter for our story.`,
            characterImg: ericahenderson,
            linkToWebsite: "https://www.patreon.com/ericafails",
        },
        {
            characterName: "Karl Kerschl",
            characterDescription: `Karl Kerschl is serving as our backdrop and spray artist, and will be responsible for many of the backgrounds that you see in the comic. He has worked on numerous other projects such as "The Flash" and "Deadpool", and we're excited to have him join us! In these works, you see that his art style is very sketch-like, where his rough images allow the readers to interpret mysterious and vibrant worlds. This is perfect for the fantasy world that we wish to develop, and we're excited to showcase his work to you!`,
            characterImg: karlkerschl,
            linkToWebsite: "https://karlkerschl.com",
        },
        {
            characterName: "Mark Ledgerwood",
            characterDescription: `Mark Ledgerwood is serving as what we have coined our 'divination artist'. During scenes when Adaine is performing magical spells, she enters into a somewhat dreamscape that reflects her subconscious and her magical powers. Ledgerwood's abstract interpretation of the human form allows for the creation of this magical world. He is also well-versed in creating fantasy figurines and will be the main artist for our collectible figurines.`,
            characterImg: ledgerwood,
            artSample: ledgerwood,
            linkToWebsite: "https://mledgerwood.com",
        },
    ];

    return (
        <div className="bg-navbar p-5" id="artists">
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
                            linkToWebsite={character.linkToWebsite}
                        />
                    );
                })}
            </div>
        </div>
    );
}
