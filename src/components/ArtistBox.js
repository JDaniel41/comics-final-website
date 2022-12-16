import React from "react";
import { Modal, Button } from "flowbite-react";

export default function ArtistBox({
    characterName,
    characterDescription,
    characterImg,
    linkToWebsite,
}) {
    const [show, setShow] = React.useState(false);

    const onClick = () => {
        setShow(!show);
    };

    const onClose = () => {
        setShow(false);
    };
    return (
        <div className="bg-navbar flex flex-col items-center m-4">
            <img src={characterImg} alt={characterName} className="max-h-96" />
            <h1 className="text-2xl">{characterName}</h1>
            <p className="text-center">{characterDescription}</p>
            <Button onClick={onClick} className="m-auto" href={linkToWebsite}>
                Check out my work!
            </Button>
        </div>
    );
}
