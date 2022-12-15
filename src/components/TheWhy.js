import React from "react";
import aguefort from "../assets/aguefort.png";
import CoverLetter from "./CoverLetter";

export default function TheWhy() {
    /**
     * This will be a grid of 2 columns. The first column will have the header
     * "Summary" and a text box that's just us introducing our story. The second
     * element will just be a placeholder for pictures of the characters.
     */
    return (
        <div className="bg-navbar" id="summary">
            <h1 className="text-2xl md:text-5xl text-center">
                Why are we doing this?
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <img src={aguefort} alt="Aguefort" className="w-1/2 mx-auto" />
                <div>
                    <h2 className="text-center mx-2">
                        In Fall 2022, Christian Blackburn and Jonathan Daniel
                        took HON 2010: The Cultural Works of Comics together.
                        Through that class, they learned more about the
                        different ways that comics can perform cultural work,
                        and more importantly they got to bond over their shared
                        love of comics! For their final project, they were
                        challenged to pitch an idea for their own comic that
                        would perform some cultural work. Both of them are
                        really passionate about mental health, so they knew they
                        wanted to tell a story that shows the reality of dealing
                        with stress, and more importantly, encourages readers to
                        recognize their support systems.
                        <br />
                        <br />
                        Christian is a huge fan of Dropout TV's "Dimension 20."
                    </h2>
                    <CoverLetter />
                </div>
            </div>
        </div>
    );
}
