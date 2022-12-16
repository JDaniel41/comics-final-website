import React from "react";
import aguefort from "../assets/aguefort.png";
import { Button } from "flowbite-react";

import cover_letter from "../assets/cover_letter.pdf";

export default function Summary() {
    /**
     * This will be a grid of 2 columns. The first column will have the header
     * "Summary" and a text box that's just us introducing our story. The second
     * element will just be a placeholder for pictures of the characters.
     */
    return (
        <div className="bg-navbar" id="summary">
            <h1 className="text-2xl md:text-5xl text-center">
                Welcome to Elmville!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <img src={aguefort} alt="Aguefort" className="w-1/2 mx-auto" />
                <div>
                    <h2 className="text-center mx-2">
                        Welcome to Elmville, home of the Aguefort Adventuring
                        Academy! Our story takes place in this fantasy town full
                        of wizards, demons, elves, and many more magical
                        creatures. While this may seem odd, don't worry. It is
                        reminiscent of a 1980s America. However, not everything
                        is as it seems. Our story follows Adaine Abernant, a
                        young divination wizard and daughter of Ambassador
                        Angwyn Abernant! She's been excelling in her studies at
                        the Aguefort Adventuring Academy, to the point where she
                        was the featured honors student at the annual faculty
                        awards dinner! Just one small problem: her family is
                        fleeing the country because of a scandal with the Elvish
                        KNB Bank and the Cult of the Nightmare King. Okay, so
                        maybe that not a <b>small</b> problem.
                        <br />
                        Oh yeah, also there's been a series of female students
                        who have gone missing at Aguefort, and Adaine's friends
                        want to solve the mystery.
                        <br />
                        Oh one more thing, Sandtrolls have kidnapped Principle
                        Aguefort. Okay, maybe these aren't small problems now
                        that we think about it. Anyways, none of this should be
                        a match for Adaine and her friends, right? We hope that
                        you'll join us on this action-packed journey where we'll
                        find out who's behind all of this, (and not to sound
                        cliche), learn more about the power of friends and
                        support groups!
                    </h2>
                    <div className="grid my-2 grid-cols-1 sm:grid-cols-3">
                        <Button
                            className="m-auto"
                            href="https://youtu.be/bUh5noBcyAA"
                        >
                            Check out our pitch video!
                        </Button>
                        <Button
                            className="m-auto"
                            href="https://www.patreon.com/elmville"
                        >
                            Check out our story synposis!
                        </Button>
                        <Button className="m-auto" href={cover_letter}>
                            Check out our cover letter!
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
