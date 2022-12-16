import React from "react";
import aguefort from "../assets/elmville.png";
import { Button } from "flowbite-react";

import cover_letter from "../assets/cover_letter.pdf";
import story from "../assets/story.pdf";

export default function Summary() {
    /**
     * This will be a grid of 2 columns. The first column will have the header
     * "Summary" and a text box that's just us introducing our story. The second
     * element will just be a placeholder for pictures of the characters.
     */
    return (
        <div className="bg-navbar" id="summary">
            <h1 className="text-2xl md:text-5xl text-center py-8 font-bold">
                Welcome to Elmville!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <img
                    src={aguefort}
                    alt="Aguefort"
                    className="mx-auto min-h-80"
                />
                <div>
                    <h2 className="text-center mx-2">
                        Welcome to Elmville, home of the Aguefort Adventuring
                        Academy! Our story takes place in this fantasy town full
                        of wizards, demons, elves, and magical creatures while
                        also similar to a 1980s America. Our story follows
                        Adaine Abernant, a young divination wizard and daughter
                        of Elvish Ambassador Angwyn Abernant. Adaine has lived
                        her whole life in the shadow of her older sister Aelwyn.
                        After failing the entrance exam to the prestigious Hudol
                        Preparatory College due to a panic attack, Adaine is
                        sent to the Aguefort Adventuring Academy. This new
                        school allows her to grow into herself, and she begins
                        to excel in her studies. Alongside her new friends,
                        Adaine puts her magical skills to the test working to
                        solve the mysterious disappearance of a group of
                        Aguefort students. We hope that you'll join us on this
                        action-packed journey where we'll find out who's behind
                        all of this, (and not to sound cliche), learn more about
                        the power of friends and support groups!
                    </h2>
                    <div className="grid my-2 grid-cols-1 sm:grid-cols-3">
                        <Button
                            className="m-auto h-full"
                            href="https://youtu.be/bUh5noBcyAA"
                        >
                            Check out our pitch video!
                        </Button>
                        <Button className="m-auto h-full" href={story}>
                            Check out our story synposis!
                        </Button>
                        <Button className="m-auto h-full" href={cover_letter}>
                            Check out our cover letter!
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
