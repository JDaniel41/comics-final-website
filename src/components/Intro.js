import React from "react";

export default function Intro() {
    /**
     * This will be a grid of 2 columns. The first column will have the header
     * "Summary" and a text box that's just us introducing our story. The second
     * element will just be a placeholder for pictures of the characters.
     */
    return (
        <div className="bg-orange-200 h-5/6 flex">
            <div className="m-auto">
                <h1 className="text-5xl text-center m-2">Summary</h1>
                <h2 className="text-center m-2">
                    Welcome to Elmville, home of the Aguefort Adventuring
                    Academy! Our story takes place in this fantasy town full of
                    wizards, demons, elves, and many more magical creatures.
                    While this may seem odd, don't worry. It is reminiscent of a
                    1980s America.
                </h2>
            </div>
            <div className="m-auto">
                <h1 className="text-5xl text-center m-2">
                    Meet the Characters!
                </h1>
                <h2 className="text-center m-2">Placeholder</h2>
            </div>
        </div>
    );
}
