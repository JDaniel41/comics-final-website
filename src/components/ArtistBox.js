import React from "react";
import { Modal, Button } from "flowbite-react";

export default function ArtistBox({
    characterName,
    characterDescription,
    characterImg,
    artSample,
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
        <div className="bg-navbar flex flex-col items-center">
            <img src={characterImg} alt={characterName} className="max-h-96" />
            <h1 className="text-2xl">{characterName}</h1>
            <p className="text-center">{characterDescription}</p>
            <Button onClick={onClick} className="m-auto" href={linkToWebsite}>
                Check out my work!
            </Button>

            {/* <Button onClick={onClick} className="m-auto">
                Check out my work!
            </Button>
            <Modal show={show} onClose={onClose}>
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                    <img src={artSample} className="w-96 h-96" />
                    <p>Sup</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onClick}>I accept</Button>
                </Modal.Footer>
            </Modal> */}
        </div>
    );
}
